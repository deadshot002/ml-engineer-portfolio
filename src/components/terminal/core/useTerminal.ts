"use client";

import { useState } from "react";
import type {
  TerminalConfig,
  TerminalLine,
  TerminalLineType,
} from "./terminalTypes";

export function useTerminal(
  config: TerminalConfig = {}
) {
  const {
    username = "lokesh",
    hostname = "portfolio",
    path = "~",
  } = config;

  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] =
    useState<string[]>([]);
  const [historyIndex, setHistoryIndex] =
    useState(-1);

  const prompt = `${username}@${hostname}:${path}$`;

  const addLine = (
    type: TerminalLineType,
    text: string
  ) => {
    setLines((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        type,
        text,
      },
    ]);
  };

  const addOutput = (text: string | string[]) => {
    const output = Array.isArray(text)
      ? text
      : [text];

    output.forEach((line) => {
      addLine("output", line);
    });
  };

  const addCommand = (command: string) => {
    addLine("command", command);
  };

  const addError = (text: string) => {
    addLine("error", text);
  };

  const addSuccess = (text: string) => {
    addLine("success", text);
  };

  const addSystem = (text: string) => {
    addLine("system", text);
  };

  const clear = () => {
    setLines([]);
  };

  const execute = (
    command: string,
    handler: (command: string) => void
  ) => {
    const value = command.trim();

    if (!value) return;

    setCommandHistory((previous) => [
      ...previous,
      value,
    ]);

    setHistoryIndex(-1);

    addCommand(value);

    handler(value);
  };

  const previousCommand = () => {
    if (commandHistory.length === 0) {
      return "";
    }

    const index =
      historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);

    setHistoryIndex(index);

    return commandHistory[index];
  };

  const nextCommand = () => {
    if (historyIndex === -1) {
      return "";
    }

    const index = historyIndex + 1;

    if (index >= commandHistory.length) {
      setHistoryIndex(-1);
      return "";
    }

    setHistoryIndex(index);

    return commandHistory[index];
  };

  return {
    input,
    setInput,

    lines,

    prompt,

    commandHistory,

    addLine,
    addOutput,
    addCommand,
    addError,
    addSuccess,
    addSystem,

    clear,
    execute,

    previousCommand,
    nextCommand,
  };
}