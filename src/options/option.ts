import {createParameter, Parameter} from "../parameters/parameter.ts";

export interface Option {
  name: string;
  description: string;
  scope: Scope;
  specifier: Specifier;
  cli: string;
}

export interface OptionWithParameter extends Option {
  parameter: Parameter;
}

export type Scope =
  | "global"
  | "input"
  | "output"
  | "input-output"
  | "none";

export type Specifier = "single" | "per-stream" | "per-metadata" | "index";

export function createOption(option: Partial<Option>): Option {
  option.name = option.name!;
  option.description = option.description ?? "";
  option.scope = option.scope ?? "none";
  option.cli = option.cli!;
  option.specifier = option.specifier ?? "single";
  return option as Option;
}

export function createOptionWithParameter(
  option: Partial<OptionWithParameter>,
): Option {
  option.parameter = createParameter(option.parameter!);
  return createOption(option);
}

export function isOptionWithParameter(
  option: Option | Partial<Option>,
): option is OptionWithParameter {
  return (option && "parameter" in option);
}
