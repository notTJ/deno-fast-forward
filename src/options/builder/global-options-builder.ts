import { GlobalOptions } from "../global-options.ts";
import { OptionsBuilder, OptionsBuilderType } from "./options-builder.ts";

export class GlobalOptionsBuilder extends OptionsBuilder<GlobalOptions> {
  override options: Partial<GlobalOptions> = {};
  override type: OptionsBuilderType = "global";
  // main
  y(enable: boolean = true): this {
    this.options.y = enable;
    return this;
  }
  n(enable: boolean = true): this {
    this.options.n = enable;
    return this;
  }
  recast_media(enable: boolean = true): this {
    this.options.recast_media = enable;
    return this;
  }
  filter(filter: number): this {
    this.options.filter = filter;
    return this;
  }
  stats(enable: boolean = true): this {
    this.options.stats = enable;
    return this;
  }
  stats_period(file: string): this {
    this.options.stats_period = file;
    return this;
  }
  progress(file: string): this {
    this.options.progress = file;
    return this;
  } // url
  stdin(enable: boolean = true): this {
    this.options.stdin = enable;
    return this;
  } // enable
  debug_ts(enable: boolean = true): this {
    this.options.debug_ts = enable;
    return this;
  }
  // Audio
  // Video
  // Subtitle
  // advanced
  benchmark(enable: boolean = true): this {
    this.options.benchmark = enable;
    return this;
  }
  benchmark_all(enable: boolean = true): this {
    this.options.benchmark_all = enable;
    return this;
  }
  timelimit(timelimit: string): this {
    this.options.timelimit = timelimit;
    return this;
  } // time-duration
  dump(enable: boolean = true): this {
    this.options.dump = enable;
    return this;
  }
  hex(enable: boolean = true): this {
    this.options.hex = enable;
    return this;
  }
  vsync(enable: boolean = true): this {
    this.options.vsync = enable;
    return this;
  }
  filter_complex(filter: string): this {
    this.options.filter_complex = filter;
    return this;
  }
  filter_complex_threads(threads: number): this {
    this.options.filter_complex_threads = threads;
    return this;
  }
  lavfi(codec: string): this {
    this.options.lavfi = codec;
    return this;
  } //
  filter_complex_script(file: string): this {
    this.options.filter_complex_script = file;
    return this;
  } // url
  sdp_file(file: string): this {
    this.options.sdp_file = file;
    return this;
  } // url
  abort_on(enable: boolean = true): this {
    this.options.abort_on = enable;
    return this;
  }
  max_error_rate(rate: string): this {
    this.options.max_error_rate = rate;
    return this;
  }
  auto_conversion_filters(enable: boolean = true): this {
    this.options.auto_conversion_filters = enable;
    return this;
  }
}
