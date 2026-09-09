import type { TerminalCommand } from "./terminalTypes";

export function findCommand(
  commands: TerminalCommand[],
  input: string
) {
  const commandName =
    input.trim().split(/\s+/)[0].toLowerCase();

  return commands.find(
    (command) =>
      command.name === commandName ||
      command.aliases?.includes(commandName)
  );
}

export function getCommandNames(
  commands: TerminalCommand[]
) {
  return commands.flatMap((command) => [
    command.name,
    ...(command.aliases ?? []),
  ]);
}

export function parseCommand(input: string) {
  return input.trim().split(/\s+/);
}