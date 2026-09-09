export type TerminalLineType =
  | "command"
  | "output"
  | "error"
  | "success"
  | "system";

export type TerminalLine = {
  id: string;
  type: TerminalLineType;
  text: string;
};

export type TerminalCommand = {
  name: string;
  description?: string;
  aliases?: string[];
  execute: (
    args: string[]
  ) => TerminalCommandResult | void;
};

export type TerminalCommandResult = {
  type?: TerminalLineType;
  output?: string | string[];
  clear?: boolean;
};

export type TerminalConfig = {
  username?: string;
  hostname?: string;
  path?: string;
  title?: string;
};