"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import { useTerminal } from "../core/useTerminal";

import {
    findCommand,
    getCommandNames,
    parseCommand,
} from "../core/terminalCommands";

import type {
    TerminalCommand,
    TerminalConfig,
} from "../core/terminalTypes";

import TerminalHeader from "./TerminalHeader";
import TerminalLine from "./TerminalLine";

type Props = TerminalConfig & {
    commands: TerminalCommand[];

    variant?: "default" | "compact";

    showBoot?: boolean;

    showHint?: boolean;

    startupLines?: string[];

    /**
     * Animate startup messages one by one.
     */
    animateStartup?: boolean;

    /**
     * Delay between startup messages.
     */
    startupDelay?: number;
};

export default function Terminal({
    commands,
    username = "lokesh",
    hostname = "portfolio",
    path = "~",
    title,
    variant = "default",
    showBoot = false,
    showHint = true,
    startupLines = [],
    animateStartup = false,
    startupDelay = 1200,
}: Props) {
    const terminal = useTerminal({
        username,
        hostname,
        path,
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    const commandNames = getCommandNames(commands);

    /*
     * ---------------------------------------
     * Startup animation
     * ---------------------------------------
     */

    const startupKey = startupLines.join("\n");

    const [visibleStartupLines, setVisibleStartupLines] =
        useState<string[]>(() => {
            if (!animateStartup) {
                return startupLines;
            }

            return [];
        });

    const [startupComplete, setStartupComplete] =
        useState(() => !animateStartup);

    useEffect(() => {
        if (!animateStartup) {
            return;
        }

        const lines = startupKey
            ? startupKey.split("\n")
            : [];

        let currentIndex = 0;
        let timer: number | undefined;

        const showNextLine = () => {
            if (currentIndex >= lines.length) {
                setStartupComplete(true);
                return;
            }

            setVisibleStartupLines((previous) => [
                ...previous,
                lines[currentIndex],
            ]);

            currentIndex += 1;

            timer = window.setTimeout(
                showNextLine,
                startupDelay
            );
        };

        timer = window.setTimeout(
            showNextLine,
            500
        );

        return () => {
            if (timer !== undefined) {
                window.clearTimeout(timer);
            }
        };
    }, [
        animateStartup,
        startupDelay,
        startupKey,
    ]);

    /*
     * ---------------------------------------
     * Auto scroll
     *
     * Only scroll when actual terminal
     * commands/output change.
     *
     * Startup animation does NOT trigger
     * page/terminal scrolling.
     * ---------------------------------------
     */

    useEffect(() => {
        if (!bodyRef.current) {
            return;
        }

        bodyRef.current.scrollTop =
            bodyRef.current.scrollHeight;
    }, [terminal.lines]);

    /*
     * ---------------------------------------
     * Focus terminal
     * ---------------------------------------
     */

    const focusTerminal = () => {
        if (!startupComplete) {
            return;
        }

        inputRef.current?.focus();
    };

    /*
     * ---------------------------------------
     * Execute command
     * ---------------------------------------
     */

    const executeCommand = (
        rawCommand: string
    ) => {
        const parts = parseCommand(rawCommand);

        const commandName =
            parts[0]?.toLowerCase();

        const args = parts.slice(1);

        if (!commandName) {
            return;
        }

        /*
         * CLEAR
         */

        if (
            commandName === "clear" ||
            commandName === "cls"
        ) {
            terminal.clear();
            return;
        }

        /*
         * Find command
         */

        const command = findCommand(
            commands,
            commandName
        );

        /*
         * Unknown command
         */

        if (!command) {
            terminal.execute(
                rawCommand,
                () => {
                    terminal.addError(
                        `bash: ${commandName}: command not found`
                    );

                    terminal.addOutput(
                        'Type "help" for available commands.'
                    );
                }
            );

            return;
        }

        /*
         * Execute command
         */

        terminal.execute(
            rawCommand,
            () => {
                const result =
                    command.execute(args);

                if (!result) {
                    return;
                }

                /*
                 * Command requested clear
                 */

                if (result.clear) {
                    terminal.clear();
                    return;
                }

                /*
                 * Command output
                 */

                if (result.output) {
                    terminal.addLine(
                        result.type ?? "output",
                        Array.isArray(result.output)
                            ? result.output.join("\n")
                            : result.output
                    );
                }
            }
        );
    };

    /*
     * ---------------------------------------
     * Keyboard
     * ---------------------------------------
     */

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        /*
         * ENTER
         */

        if (event.key === "Enter") {
            event.preventDefault();

            executeCommand(
                terminal.input
            );

            terminal.setInput("");

            return;
        }

        /*
         * UP - history
         */

        if (event.key === "ArrowUp") {
            event.preventDefault();

            terminal.setInput(
                terminal.previousCommand()
            );

            return;
        }

        /*
         * DOWN - history
         */

        if (event.key === "ArrowDown") {
            event.preventDefault();

            terminal.setInput(
                terminal.nextCommand()
            );

            return;
        }

        /*
         * TAB - autocomplete
         */

        if (event.key === "Tab") {
            event.preventDefault();

            const value =
                terminal.input.toLowerCase();

            const matches =
                commandNames.filter(
                    (name) =>
                        name.startsWith(value)
                );

            if (matches.length === 1) {
                terminal.setInput(
                    matches[0]
                );
            }

            return;
        }

        /*
         * CTRL + L - clear
         */

        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "l"
        ) {
            event.preventDefault();

            terminal.clear();
        }
    };

    /*
     * ---------------------------------------
     * TERMINAL UI
     * ---------------------------------------
     */

    return (
        <div
            onClick={focusTerminal}
            className="
                relative
                overflow-hidden
                rounded-lg
                border
                border-cyan-400/20
                bg-[#020409]
                shadow-[0_0_60px_rgba(34,211,238,0.06)]
                cursor-text
            "
        >
            {/* ================================= */}
            {/* HEADER */}
            {/* ================================= */}

            <TerminalHeader
                title={
                    title ??
                    `${username}@${hostname}: ${path}`
                }
            />

            {/* ================================= */}
            {/* BODY */}
            {/* ================================= */}

            <div
                ref={bodyRef}
                className={`
                    relative
                    overflow-y-auto
                    p-6
                    font-mono
                    text-[13px]
                    leading-7
                    bg-[#020409]

                    ${
                        variant === "compact"
                            ? "min-h-[280px]"
                            : "h-[430px]"
                    }
                `}
            >
                {/* ================================= */}
                {/* CRT SCANLINES */}
                {/* ================================= */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-10
                        opacity-[0.025]
                        bg-[linear-gradient(
                            to_bottom,
                            transparent 50%,
                            rgba(255,255,255,0.25) 50%
                        )]
                        bg-[length:100%_4px]
                    "
                />

                <div className="relative z-0">

                    {/* ================================= */}
                    {/* DEFAULT BOOT */}
                    {/* ================================= */}

                    {showBoot && (
                        <div className="mb-6 space-y-1">
                            <div className="text-slate-600">
                                Last login: portfolio.local
                            </div>

                            <div className="text-slate-600">
                                System initialized successfully.
                            </div>

                            <div className="mt-3 text-emerald-400">
                                Welcome to{" "}
                                <span className="text-cyan-400">
                                    LOKESH_OS
                                </span>
                                .
                            </div>

                            <div className="text-slate-500">
                                Type{" "}
                                <span className="text-slate-300">
                                    help
                                </span>{" "}
                                to see available commands.
                            </div>
                        </div>
                    )}

                    {/* ================================= */}
                    {/* STARTUP ANIMATION */}
                    {/* ================================= */}

                    {(visibleStartupLines.length > 0 ||
                        !startupComplete) && (
                        <div className="mb-6 space-y-1">

                            {visibleStartupLines.map(
                                (line, index) => {
                                    if (!line) {
                                        return (
                                            <div
                                                key={index}
                                                className="h-2"
                                            />
                                        );
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                animate-in
                                                fade-in
                                                duration-300
                                            "
                                        >
                                            <span className="text-emerald-400">
                                                [ OK ]
                                            </span>

                                            <span className="text-emerald-500/70">
                                                {line.replace(
                                                    /^\[ OK \]\s*/,
                                                    ""
                                                )}
                                            </span>
                                        </div>
                                    );
                                }
                            )}

                            {/* LOADING */}

                            {!startupComplete && (
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        pt-2
                                        text-slate-600
                                    "
                                >
                                    <span className="text-cyan-400 animate-pulse">
                                        ▋
                                    </span>

                                    <span>
                                        loading...
                                    </span>
                                </div>
                            )}

                            {/* SYSTEM READY */}

                            {startupComplete &&
                                visibleStartupLines.length > 0 && (
                                    <div className="pt-4 space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400">
                                                [ OK ]
                                            </span>

                                            <span className="text-emerald-400">
                                                System ready.
                                            </span>
                                        </div>

                                        <div className="text-slate-600">
                                            Session:{" "}
                                            {username}@{hostname}
                                        </div>
                                    </div>
                                )}
                        </div>
                    )}

                    {/* ================================= */}
                    {/* COMMAND HISTORY */}
                    {/* ================================= */}

                    {terminal.lines.length > 0 && (
                        <div className="space-y-1">
                            {terminal.lines.map(
                                (line) => (
                                    <TerminalLine
                                        key={line.id}
                                        line={line}
                                    />
                                )
                            )}
                        </div>
                    )}

                    {/* ================================= */}
                    {/* ACTIVE PROMPT */}
                    {/* ================================= */}

                    {startupComplete && (
                        <div
                            className={`
                                flex
                                items-center
                                gap-2

                                ${
                                    terminal.lines.length > 0
                                        ? "mt-5 pt-4 border-t border-slate-800/60"
                                        : "mt-6"
                                }
                            `}
                        >
                            {/* PROMPT */}

                            <span
                                className="
                                    text-emerald-400
                                    shrink-0
                                    select-none
                                "
                            >
                                {terminal.prompt}
                            </span>

                            {/* INPUT */}

                            <div className="relative flex-1 min-w-0">
                                <input
                                    ref={inputRef}
                                    value={terminal.input}
                                    onChange={(event) =>
                                        terminal.setInput(
                                            event.target.value
                                        )
                                    }
                                    onKeyDown={
                                        handleKeyDown
                                    }
                                    className="
                                        w-full
                                        bg-transparent
                                        border-none
                                        outline-none
                                        text-slate-200
                                        font-mono
                                        caret-cyan-400
                                        selection:bg-cyan-400/20
                                    "
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck={false}
                                />
                            </div>
                        </div>
                    )}

                    {/* ================================= */}
                    {/* HINT */}
                    {/* ================================= */}

                    {showHint &&
                        startupComplete && (
                            <div className="mt-3 text-[10px] text-slate-700">
                                TAB autocomplete · ↑↓ history · ENTER execute · CTRL+L clear
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}