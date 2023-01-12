export interface Option {
  name: string;
  description: string;
  scope: Scope;
  cli: string | string[];
  specifier: Specifier;
}

export type Scope =
  | "global"
  | "input"
  | "output"
  | "input-output"
  | "none";

export type ParameterType =
  | "string"
  | "number"
  | "integer"
  | "float"
  | "decimal"
  | "index"
  | "date"
  | "time"
  | "url"
  | "time-duration"
  | "complex";

export type Specifier = "single" | "per-stream" | "per-metadata" | "index";

export interface OptionWithParameter extends Option {
  parameterName: string;
  parameterType: ParameterType;
  default?: any;
  valueRequired?: boolean; // default to true
}

export function CreateOption(option: Partial<Option>): Option {
  option.name = option.name!;
  option.description = option.description ?? "";
  option.scope = option.scope ?? "none";
  option.cli = option.cli!;
  option.specifier = option.specifier ?? "single";
  return option as Option;
}

export function CreateOptionWithParameter(
  option: Partial<OptionWithParameter>,
): Option {
  option.parameterName = option.parameterName!;
  option.parameterType = option.parameterType!;
  option.valueRequired = option.valueRequired ?? true;
  return CreateOption(option);
}
export function IsOptionWithParameter(
  option: Option | Partial<Option>,
): option is OptionWithParameter {
  return (option && "parameterType" in option);
}
