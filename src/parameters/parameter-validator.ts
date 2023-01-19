import { parse } from "https://deno.land/std@0.164.0/datetime/mod.ts";
import {
  isDateTimeParameterType,
  isNumberParameterType,
  Parameter,
} from "./parameter.ts";
import { OptionsMap } from "../options/definitions/options-map.ts";
import {
  isOptionWithParameter,
  Option,
  OptionWithParameter,
} from "../options/option.ts";

export class ParameterValidator {
  #options: Map<string, Option> = OptionsMap;

  validateParameter(option: Option, value: any): void {
    if (!isOptionWithParameter(option)) {
      throw new Error("option must have parameter");
    }
    const parameter = option.parameter;
    if (parameter.type === "string") {
      this.validateString(parameter, value);
    }
    if (isNumberParameterType(parameter.type)) {
      this.validateNumber(parameter, value);
    }
    if (parameter.type === "ratio") {
      this.validateRatio(parameter, value);
    }
    if (
      isDateTimeParameterType(parameter.type)
    ) {
      this.validateDateTime(parameter, value);
    }
  }
  private validateString(parameter: Parameter, value: NonNullable<any>): void {
    const valueType = typeof value;
    if (parameter.type === "string" && valueType !== "string") {
      this.throwTypeError(parameter, [valueType]);
    }
  }
  private validateNumber(parameter: Parameter, value: string | number): void {
    let number: number = Number(value);
    if (Number.isNaN(number)) {
      this.throwTypeError(parameter, ["NaN"]);
    }
    if (parameter.type === "integer" && !Number.isInteger(value)) {
      this.throwTypeError(parameter, ["integer"]);
    }
    if (
      parameter.type === "float" ||
      parameter.type === "decimal" && !Number.isFinite(number)
    ) {
      this.throwTypeError(parameter, ["non-finite-number"]);
    }
  }

  private validateDateTime(parameter: Parameter, value: string): void {
    let dateResult: { date?: Date; format: string };
    if (parameter.type === "datetime") {
      dateResult = this.tryDateParse(value);
    }
    if (!dateResult!.date) {
      throw new Error("bad date time format");
    }
  }
  private validateUrl(parameter: Parameter, value: string): void {
    try {
      new URL(value);
    } catch (error) {
      this.throwTypeError(parameter, ["string"]);
    }
  }
  private validateRatio(parameter: Parameter, value: string): void {
    // use regex but here point to bad value
    let fraction = value.split("\\");
    let numeric: number;
    if (fraction.length === 1) {
      fraction = fraction[0].split("/");
    }

    if (fraction.length === 1) {
      numeric = Number(fraction[0]);
      if (Number.isNaN(numeric)) {
        this.throwTypeError(parameter, ["NaN"]);
      }
      if ((numeric % 1) > 0) {
        this.throwTypeError(parameter, ["float"]);
      }
    }
  }

  private validateComplex(parameter: Parameter, value: string): void {}

  private throwTypeError(parameter: Parameter, foundTypes: string[] = []) {
    let errorString =
      `parameter: ${parameter.name}. Expected type: ${parameter.type}.`;
    if (foundTypes.length > 0) {
      errorString += ` Found: ${foundTypes.join(", ")}.`;
    }
    throw new Error(
      errorString,
    );
  }

  private tryDateParse(
    value: string,
    format: string = "YYYYMMDDTHHmmss.SS",
  ): { date?: Date; format: string } {
    try {
      return {
        date: parse(value, format),
        format: format,
      };
    } catch {
    }
    return { date: undefined, format: format };
  }

  private isString(value: NonNullable<any>): value is string {
    return typeof value === "string";
  }
}
