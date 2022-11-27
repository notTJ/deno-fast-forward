export interface FFmpegBaseOptions {
  args?: string[];
  audioChannels?: number;
  audioCodec?: string;
  codec?: string;
  duration?: number | string;
  format?: string;
  frameRate?: number;
  noAudio?: boolean;
  noVideo?: boolean;
  noSubtitles?: boolean;
  sampleRate?: number;
  videoCodec?: string;
  start?: string;
  end?: string;
}

/** input & output parameters */
export abstract class FFmpegBaseParameters<T extends FFmpegBaseOptions>
  implements FFmpegBaseOptions {
  protected _opts: T;

  protected constructor(opts: T) {
    this._opts = opts;
  }

  protected get opts(): T {
    return this._opts;
  }

  protected set opts(options: T) {
    this._opts = options;
  }

  get format(): string | undefined {
    return this.opts.format;
  }

  set format(format: string | undefined) {
    this.opts.format = format;
  }

  get codec(): string | undefined {
    return this.opts.codec;
  }

  set codec(codec: string | undefined) {
    this.opts.codec = codec;
  }

  get audioCodec(): string | undefined {
    return this.opts.audioCodec;
  }

  set audioCodec(audioCodec: string | undefined) {
    this.opts.audioCodec = audioCodec;
  }

  get videoCodec(): string | undefined {
    return this.opts.videoCodec;
  }

  set videoCodec(videoCodec: string | undefined) {
    this.opts.videoCodec = videoCodec;
  }

  get frameRate(): number | undefined {
    return this.opts.frameRate;
  }

  set frameRate(frameRate: number | undefined) {
    this.opts.frameRate = frameRate;
  }

  get sampleRate(): number | undefined {
    return this.opts.sampleRate;
  }

  set sampleRate(sampleRate: number | undefined) {
    this.opts.sampleRate = sampleRate;
  }

  get audioChannels(): number | undefined {
    return this.opts.audioChannels;
  }

  set audioChannels(count: number | undefined) {
    this.opts.audioChannels = count;
  }

  get duration(): number | string | undefined {
    return this.opts.duration;
  }

  set duration(duration: number | string | undefined) {
    this.opts.duration = duration;
  }

  get noVideo(): boolean {
    return !!this.opts.noVideo;
  }

  set noVideo(disable: boolean) {
    this.opts.noVideo = disable;
  }

  get noAudio(): boolean {
    return !!this.opts.noAudio;
  }

  set noAudio(disable: boolean) {
    this.opts.noAudio = disable;
  }

  get noSubtitles(): boolean {
    return !!this.opts.noSubtitles;
  }

  set noSubtitles(disable: boolean) {
    this.opts.noSubtitles = disable;
  }

  get args(): string[] | undefined {
    return this.opts.args;
  }

  set args(ffmpegArgs: string[] | undefined) {
    this.opts.args = ffmpegArgs;
  }

  // not overriding these methods in derived classes causes weird linting error
  merge(parameters: this): FFmpegBaseParameters<T> {
    Object.assign(this.opts, parameters.opts);
    return this;
  }

  // merge<V extends T = T>(parameters: FFmpegBaseParameters<V>): FFmpegBaseParameters<T & V> {
  rebase(parameters: this): FFmpegBaseParameters<T> {
    Object.assign(this.opts, parameters.opts, this.opts);
    return this;
  }

  clone(): FFmpegBaseParameters<T> {
    return structuredClone(this);
  }
}
