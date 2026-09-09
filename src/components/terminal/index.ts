export { default as Terminal } from "./ui/Terminal";

export { default as TerminalHeader } from "./ui/TerminalHeader";

export { default as TerminalLine } from "./ui/TerminalLine";

export { useTerminal } from "./core/useTerminal";

export {
  findCommand,
  getCommandNames,
  parseCommand,
} from "./core/terminalCommands";

export type {
  TerminalLine as TerminalLineType,
  TerminalCommand,
  TerminalCommandResult,
  TerminalConfig,
} from "./core/terminalTypes";