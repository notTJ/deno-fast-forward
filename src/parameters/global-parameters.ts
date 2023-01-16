import {ParameterValidator} from "./parameter-validator.ts";
import {ToolsParameters} from "./tools-parameters.ts";
import {GlobalOptions} from "../options/global-options.ts";

export class GlobalParameters extends ToolsParameters {
  #globalOptions: Partial<GlobalOptions> = {};
  #parameterValidator: ParameterValidator = new ParameterValidator();
  private validateParameters(value: NonNullable<any>, key: keyof GlobalOptions): void {
    this.#parameterValidator.validateParameter(key, value);
  }
  // main
  y(enable: boolean = true) {
    this.validateParameters(enable, "y")
    this.#globalOptions.y = enable;
  }
  n(enable: boolean = true) {
    this.#globalOptions.n = enable;
  }
  recast_media(enable: boolean = true) {
    this.#globalOptions.recast_media = enable;
  }
  filter(filter: number) {
    this.#globalOptions.filter = filter;
  }
  stats(enable: boolean = true) {
    this.#globalOptions.stats = enable;
  }
  stats_period(file: string) {
    this.#globalOptions.stats_period = file;
  }
  progress(file: string) {
    this.#globalOptions.progress = file;
  } // url
  stdin(enable: boolean = true) {
    this.#globalOptions.stdin = enable;
  } // enable
  debug_ts(enable: boolean = true) {
    this.#globalOptions.debug_ts = enable;
  }
  // Audio
  // Video
  // Subtitle
  // advanced
  benchmark(enable: boolean = true) {
    this.#globalOptions.benchmark = enable;
  }
  benchmark_all(enable: boolean = true) {
    this.#globalOptions.benchmark_all = enable;
  }
  timelimit(timelimit: string) {
    this.#globalOptions.timelimit = timelimit;
  } // time-duration
  dump(enable: boolean = true) {
    this.#globalOptions.dump = enable;
  }
  hex(enable: boolean = true) {
    this.#globalOptions.hex = enable;
  }
  vsync(enable: boolean = true) {
    this.#globalOptions.vsync = enable;
  }
  filter_complex(filter: string) {
    this.#globalOptions.filter_complex = filter;
  }
  filter_complex_threads(threads: number) {
    this.#globalOptions.filter_complex_threads = threads;
  }
  lavfi(codec: string) {
    this.#globalOptions.lavfi = codec;
  } //
  filter_complex_script(file: string) {
    this.#globalOptions.filter_complex_script = file;
  } // url
  sdp_file(file: string) {
    this.#globalOptions.sdp_file = file;
  } // url
  abort_on(enable: boolean = true) {
    this.#globalOptions.abort_on = enable;
  }
  max_error_rate(rate: string) {
    this.#globalOptions.max_error_rate = rate;
  }
  auto_conversion_filters(enable: boolean = true) {
    this.#globalOptions.auto_conversion_filters = enable;
  }
}
