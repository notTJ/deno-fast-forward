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

export interface Parameter {
  name: string;
  type: ParameterType;
  default?: any;
  valueRequired?: boolean; // default to true
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
  option.parameter = CreateParameter(option.parameter!);
  return CreateOption(option);
}

export function CreateParameter(parameter: Partial<Parameter>): Parameter {
  parameter.name = parameter!.name!;
  parameter.type = parameter!.type!;
  parameter.valueRequired = parameter!.valueRequired ?? true;
  parameter.default = parameter!.default;
  return parameter as Parameter;
}
export function IsOptionWithParameter(
  option: Option | Partial<Option>,
): option is OptionWithParameter {
  return (option && "parameterType" in option);
}
