import {
  FFmpegBaseOptions,
  FFmpegBaseParameters,
} from "./encoding_base_parameters.ts";

export interface FFmpegInputOptions extends FFmpegBaseOptions {
  to?: string;
  // used with multi input...
  input?: string;
}

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

  get seek(): string | undefined {
    return this.opts.seek;
  }

  set seek(start: string | undefined) {
    this.opts.seek = start;
  }

  get to(): string | undefined {
    return this.opts.to;
  }

  set to(input: string | undefined) {
    this.opts.input = input;
  }

  get input(): string | undefined {
    return this.opts.input;
  }

  set input(input: string | undefined) {
    this.opts.input = input;
  }
}
