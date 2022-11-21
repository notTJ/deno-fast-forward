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

  merge(parameters: this): this {
    Object.assign(this.options, parameters.options);
    return this;
  }

  rebase(parameters: this): this {
    Object.assign(this.options, parameters.options, this.options);
    return this;
  }
}
