import {GlobalOptions} from "../options/global-options.ts";
import {isOptionWithParameter, Option} from "../options/option.ts";
import {ParameterValidator} from "../parameters/parameter-validator.ts";
import {createOptionDefinitionsMap} from "../options/definitions/options-map.ts";
import {CommandOptions} from "./command-builder.ts";
import {Options} from "../options/options.ts";

export class CommandValidator {
  #optionsMap: Map<string, Option> = createOptionDefinitionsMap();
  #parameterValidator: ParameterValidator;
  constructor() {
    this.#parameterValidator = new ParameterValidator();
    this.#optionsMap = createOptionDefinitionsMap();
  }

  // validate(commandOptions: CommandOptions) {
  //   for (const option in commandOptions.generic) {
  //     const value = commandOptions.generic[option];
  //     if (option !== undefined) {
  //       this.validateParameter(value, option)
  //     }
  //   }
  // }
  // private validateParameter<T extends Options>(
  //   value: NonNullable<any>,
  //   key: keyof T,
  // ): void {
  //   const option = this.#optionsMap.get(key)!;
  //   if (!isOptionWithParameter(option)) {
  //     throw new Error("option must have parameter");
  //   }
  //   this.#parameterValidator.validateParameter(option, value);
  // }
}