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

  get seek(): string | undefined {
    return this.opts.seek;
  }

  set seek(start: string | undefined) {
    this.opts.seek = start;
  }
}
