import {
  FFmpegBaseOptions,
  FFmpegBaseParameters,
} from "./encoding_base_parameters.ts";

export type FFmpegInputOptions = FFmpegBaseOptions;

/** input parameters */
export class FFmpegInputParameters
  extends FFmpegBaseParameters<FFmpegInputOptions>
  implements FFmpegInputOptions {
  constructor(options: FFmpegInputOptions = {}) {
    super(options);
  }

  get options(): FFmpegInputOptions {
    return this.opts;
  }

  set options(options: FFmpegInputOptions) {
    this.opts = options;
  }

  get start(): string | undefined {
    return this.opts.start;
  }

  set start(start: string | undefined) {
    this.opts.start = start;
  }

  get end(): string | undefined {
    return this.opts.end;
  }

  set end(end: string | undefined) {
    this.opts.end = end;
  }
}
