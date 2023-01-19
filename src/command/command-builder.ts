import { ParameterValidator } from "../parameters/parameter-validator.ts";
import { GlobalOptions } from "../options/global-options.ts";
import { GenericOptionsBuilder } from "../options/builder/generic-options-builder.ts";
import { GlobalOptionsBuilder } from "../options/builder/global-options-builder.ts";
import {
  isGenericOptions,
  isInputOptions,
  isOptionWithParameter,
  isOtherOptions,
  isOutputOptions,
  Option,
} from "../options/option.ts";
import {
  createOptionDefinitionsMap,
} from "../options/definitions/options-map.ts";
import { GenericOptions } from "../options/generic-options.ts";
import { OutputOptions } from "../options/output-options.ts";
import { InputOptions } from "../options/input-options.ts";
import { OtherOptions } from "../options/other-options.ts";
import { InputOptionsBuilder } from "../options/builder/input-options-builder.ts";
import { OutputOptionsBuilder } from "../options/builder/output-options-builder.ts";
import { OtherOptionsBuilder } from "../options/builder/other-options-builder.ts";
import {Options} from "../options/options.ts";
import {CommandValidator} from "./command-validator.ts";
import {CommandExecutor} from "./command-executor.ts";

export class CommandBuilder {
  #options: CommandOptions = {}
  #validator: CommandValidator;
  #executor: CommandExecutor
  constructor() {
    this.#validator = new CommandValidator();
    this.#executor = new CommandExecutor();
  }

  execute = () => this.#executor.execute(this.#options)

  addInput(
    options: (optionsBuilder: InputOptionsBuilder) => InputOptionsBuilder,
  ): this {
    this.#options.inputs!.concat(
      options(new InputOptionsBuilder())
        .build()
    );
    return this;
  }

  addOutput(
    options: (optionsBuilder: OutputOptionsBuilder) => OutputOptionsBuilder,
  ): this {
    this.#options.outputs!.concat(
      options(new OutputOptionsBuilder())
        .build(),
    );
    return this;
  }

  setGenericOptions(
    options: (optionsBuilder: GenericOptionsBuilder) => GenericOptionsBuilder,
  ): this {
    this.#options.generic = options(new GenericOptionsBuilder())
      .build();
    return this;
  }

  setGlobalOptions(
    options: (optionsBuilder: GlobalOptionsBuilder) => GlobalOptionsBuilder,
  ): this {
    this.#options.global = options(new GlobalOptionsBuilder())
      .build();
    return this;
  }

  setOtherOptions(
    options: (optionsBuilder: OtherOptionsBuilder) => OtherOptionsBuilder,
  ): this {
    this.#options.otherOptions = options(new OtherOptionsBuilder())
      .build();
    return this;
  }
}

export interface CommandOptions {
  generic?: GenericOptions;
  global?: GlobalOptions;
  inputs?: InputOptions[];
  outputs?: OutputOptions[];
  otherOptions?: OtherOptions;
}

export interface Input {
  filename: string;
  options?: InputOptionsBuilder;
}
