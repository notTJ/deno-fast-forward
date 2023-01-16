export interface Parameter {
  name: string;
  type: ParameterType;
  default?: any;
  valueRequired?: boolean; // default to true
}

export type ParameterType =
  | "string"
  | NumberType
  | DateTimeParameterType
  | "index"
  | "url"
  | "complex";

export type NumberType = "number" | "integer" | "float" | "decimal" | "ratio";
export type DateTimeParameterType =
  | "date"
  | "time"
  | "datetime"
  | "time-duration";

export function createParameter(parameter: Partial<Parameter>): Parameter {
  parameter.name = parameter!.name!;
  parameter.type = parameter!.type!;
  parameter.valueRequired = parameter!.valueRequired ?? true;
  parameter.default = parameter!.default;
  return parameter as Parameter;
}

export function isNumberParameterType(value: any): value is NumberType {
  return value === "number" || value === "integer" || value === "float" ||
    value === "decimal";
}
export function isDateTimeParameterType(
  value: any,
): value is DateTimeParameterType {
  return value === "date" || value === "time" ||
    value === "datetime" || value === "time-duration";
}