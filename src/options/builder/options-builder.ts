import { GenericOptionsBuilder } from "./generic-options-builder.ts";
import { GlobalOptionsBuilder } from "./global-options-builder.ts";
import { InputOptionsBuilder } from "./input-options-builder.ts";
import { OutputOptionsBuilder } from "./output-options-builder.ts";
import { OtherOptionsBuilder } from "./other-options-builder.ts";
import { CommandOptions } from "../../command/command-builder.ts";

export abstract class OptionsBuilder<T> {
  abstract options: T;
  abstract type: OptionsBuilderType;

  asGenericOptionsBuilder(): GenericOptionsBuilder {
    if (isGenericOptionsBuilder(this)) {
      return (this as unknown) as GenericOptionsBuilder;
    }
    throw new Error(
      `incorrect options builder type. expected: generic. found: ${this.type}`,
    );
  }

  asGlobalOptionsBuilder(): GlobalOptionsBuilder {
    if (isGlobalOptionsBuilder(this)) {
      return (this as unknown) as GlobalOptionsBuilder;
    }
    throw new Error(
      `incorrect options builder type. expected: generic. found: ${this.type}`,
    );
  }

  asInputOptionsBuilder(): InputOptionsBuilder {
    if (isInputOptionsBuilder(this)) {
      return (this as unknown) as InputOptionsBuilder;
    }
    throw new Error(
      `incorrect options builder type. expected: generic. found: ${this.type}`,
    );
  }

  asOutputOptionsBuilder(): OutputOptionsBuilder {
    if (isOutputOptionsBuilder(this)) {
      return (this as unknown) as OutputOptionsBuilder;
    }
    throw new Error(
      `incorrect options builder type. expected: output. found: ${this.type}`,
    );
  }

  asOtherOptionsBuilder(): OtherOptionsBuilder {
    if (isOtherOptionsBuilder(this)) {
      return (this as unknown) as OtherOptionsBuilder;
    }
    throw new Error(
      `incorrect options builder type. expected: other. found: ${this.type}`,
    );
  }

  buildOptions(): CommandOptions {
    let commandOptions: CommandOptions = {};
    if (isGenericOptionsBuilder(this)) {
      commandOptions.genericOptions = this.asGenericOptionsBuilder().options;
    }
    if (isGlobalOptionsBuilder(this)) {
      commandOptions.globalOptions = this.asGlobalOptionsBuilder().options;
    }
    if (isInputOptionsBuilder(this)) {
      commandOptions.inputOptions = this.asInputOptionsBuilder().options;
    }
    if (isOutputOptionsBuilder(this)) {
      commandOptions.outputOptions = this.asOutputOptionsBuilder().options;
    }
    if (isOtherOptionsBuilder(this)) {
      commandOptions.otherOptions = this.asOtherOptionsBuilder().options;
    }
    return commandOptions;
  }
}

export function isGenericOptionsBuilder(
  value: OptionsBuilder<any>,
): value is GenericOptionsBuilder {
  return value.type === "generic";
}

export function isGlobalOptionsBuilder(
  value: OptionsBuilder<any>,
): value is GenericOptionsBuilder {
  return value.type === "global";
}

export function isInputOptionsBuilder(
  value: OptionsBuilder<any>,
): value is GenericOptionsBuilder {
  return value.type === "input";
}

export function isOutputOptionsBuilder(
  value: OptionsBuilder<any>,
): value is GenericOptionsBuilder {
  return value.type === "output";
}

export function isOtherOptionsBuilder(
  value: OptionsBuilder<any>,
): value is GenericOptionsBuilder {
  return value.type === "other";
}

export type OptionsBuilderType =
  | "generic"
  | "global"
  | "input"
  | "output"
  | "input-output"
  | "other";