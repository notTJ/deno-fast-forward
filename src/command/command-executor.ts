import {CommandOptions} from "./command-builder.ts";
import {Options} from "../options/options.ts";

export class CommandExecutor {
  #process?: Deno.Process;
  async execute(options: CommandOptions) {
    const args = this.buildArgsList(options)
    if (this.#process) {
      throw new Error("Process already begun");
    }
    console.log(args)
    const opts: Deno.RunOptions = {
      cmd: args,
      stdin: "piped",
      stdout: "piped",
      stderr: "piped",
    };
    try {
      this.#process = Deno.run(opts);
      const [status, output] = await Promise.all([
        this.#process.status(),
        this.#process.output()
      ])
      if (!status) throw new Error("bad status?")
      console.log(output);
    } catch (error) {
      throw new Error(`Process failed: ${error.toString()}`);
    }
    return;
  }

  buildArgsList(options: CommandOptions): string[] {
    const args:string[] = ["ffmpeg"]
    if (options.generic) {
      args.push(...this.extractArgsFromOption(options.generic))
    }
    if (options.global) {
      args.push(...this.extractArgsFromOption(options.global))
    }
    if (options.inputs) {
      args.push(...this.extractArgsFromOption(options.inputs))
    }
    if (options.outputs) {
      args.push(...this.extractArgsFromOption(options.outputs))
    }
    if (options.otherOptions) {
      args.push(...this.extractArgsFromOption(options.otherOptions))
    }
    return args;
  }

  extractArgsFromOption(options: Options): string[] {
    const args:string[] = []
    for (const key in options) {
      const value = options[key as keyof Options]
      if (value) {
        const optionArgs = typeof value === "boolean" ? [`-${key}`] : [`-${key}`, `${value}`];
        args.push(...optionArgs)
      }
    }
    return args;
  }
}
