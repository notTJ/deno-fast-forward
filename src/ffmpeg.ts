import { Encoding, EncodingOptions } from "./encoding.ts";
import { EncodingProcess } from "./encoding_process.ts";
import type {
  EncodingEndEventListener,
  EncodingErrorEventListener,
  EncodingEventListener,
  EncodingEventType,
  EncodingInfoEventListener,
  EncodingProgressEventListener,
  EncodingStartEventListener,
} from "./events.ts";
import { Resolution } from "./media_info.ts";
import { MappedOutput } from "./mapped-output.ts";

export function ffmpeg(
  input?: string,
  options?: EncodingOptions | string,
): FFmpeg {
  return new FFmpeg(input, options);
}

export class FFmpeg implements AsyncIterableIterator<EncodingProcess> {
  #global: Encoding = new Encoding();
  #encodings: Encoding[] = [];
  #encodingIndex = -1;
  #iteratorCount = 0;

  get encoding(): Encoding {
    if (this.#encodingIndex === -1) {
      return this.#global;
    }
    return this.#encodings[this.#encodingIndex];
  }

  get encodings(): Array<Encoding> {
    return this.#encodings;
  }

  constructor(input?: string, options: EncodingOptions | string = {}) {
    if (input) {
      this.encoding.input = input;
    }
    if (typeof options === "string") {
      this.encoding.output = options;
    }
    Object.assign(this.encoding, options);
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<EncodingProcess> {
    return this;
  }

  async encode(): Promise<void> {
    for await (const process of this) {
      process.run();
      for await (const event of process) {
        if (event.type === "error") {
          process.close();
          throw event.error;
        }
      }
      process.close();
    }
  }

  next(): Promise<IteratorResult<EncodingProcess, null>> {
    if (this.#iteratorCount < this.#encodings.length) {
      const encoding: Encoding = this.#encodings[this.#iteratorCount++];
      return Promise.resolve({
        value: new EncodingProcess(encoding),
        done: false,
      });
    }
    return Promise.resolve({
      done: true,
      value: null,
    });
  }

  #addEncoding = (): void => {
    this.#encodings.push(this.#global.clone());
    this.#encodingIndex = this.#encodings.length - 1;
  };

  // Encoding Options:

  input(source: string): this {
    this.encoding.input = source;
    return this;
  }

  output(target: string): this {
    this.#addEncoding();
    this.encoding.output = target;
    return this;
  }

  binary(ffmpeg: string): this {
    this.encoding.binary = ffmpeg;
    return this;
  }

  cwd(path: string): this {
    this.encoding.cwd = path;
    return this;
  }

  threads(count: number): this {
    this.encoding.threads = count;
    return this;
  }

  logLevel(logLevel: string): this {
    this.encoding.logLevel = logLevel;
    return this;
  }

  // Input / Output Options:

  args(ffmpegArgs: string[]): this {
    this.encoding.args = ffmpegArgs;
    return this;
  }

  inputArgs(ffmpegArgs: string[]): this {
    this.encoding.inputOptions.args = ffmpegArgs;
    return this;
  }

  audioChannels(count: number): this {
    this.encoding.audioChannels = count;
    return this;
  }

  inputAudioChannels(count: number): this {
    this.encoding.inputOptions.audioChannels = count;
    return this;
  }

  audioCodec(codec: string): this {
    this.encoding.audioCodec = codec;
    return this;
  }

  inputAudioCodec(codec: string): this {
    this.encoding.inputOptions.audioCodec = codec;
    return this;
  }

  codec(codec: string): this {
    this.encoding.codec = codec;
    return this;
  }

  inputCodec(codec: string): this {
    this.encoding.inputOptions.codec = codec;
    return this;
  }

  /**
   * https://ffmpeg.org/ffmpeg-utils.html#time-duration-syntax
   */
  duration(duration: string | number): this {
    this.encoding.duration = duration;
    return this;
  }

  inputDuration(duration: string | number): this {
    this.encoding.inputOptions.duration = duration;
    return this;
  }

  format(format: string): this {
    this.encoding.format = format;
    return this;
  }

  inputFormat(format: string): this {
    this.encoding.inputOptions.format = format;
    return this;
  }

  frameRate(frameRate: number): this {
    this.encoding.frameRate = frameRate;
    return this;
  }

  inputFrameRate(frameRate: number): this {
    this.encoding.inputOptions.frameRate = frameRate;
    return this;
  }

  noVideo(disable = true): this {
    this.encoding.noVideo = disable;
    return this;
  }

  noInputVideo(disable = true): this {
    this.encoding.inputOptions.noVideo = disable;
    return this;
  }

  noAudio(disable = true): this {
    this.encoding.noAudio = disable;
    return this;
  }

  noInputAudio(disable = true): this {
    this.encoding.inputOptions.noAudio = disable;
    return this;
  }

  noSubtitles(disable = true): this {
    this.encoding.noSubtitles = disable;
    return this;
  }

  noInputSubtitles(disable = true): this {
    this.encoding.inputOptions.noSubtitles = disable;
    return this;
  }

  sampleRate(hz: number): this {
    this.encoding.sampleRate = hz;
    return this;
  }

  inputSampleRate(hz: number): this {
    this.encoding.inputOptions.sampleRate = hz;
    return this;
  }

  videoCodec(codec: string): this {
    this.encoding.videoCodec = codec;
    return this;
  }

  inputVideoCodec(codec: string): this {
    this.encoding.inputOptions.videoCodec = codec;
    return this;
  }

  // Input Only Options:

  // ...

  // Output Only Options:

  audioBitrate(bitrate: number | string): this {
    this.encoding.audioBitrate = bitrate;
    return this;
  }

  audioQuality(quality: number): this {
    this.encoding.audioQuality = quality;
    return this;
  }

  frames(frames: number): this {
    this.encoding.frames = frames;
    return this;
  }

  height(height: number | string): this {
    this.encoding.height = height;
    return this;
  }

  loop(loops: string | number): this {
    this.encoding.loop = loops;
    return this;
  }

  maxVideoBitrate(bitrate: number | string): this {
    this.encoding.maxVideoBitrate = bitrate;
    return this;
  }

  minVideoBitrate(bitrate: number | string): this {
    this.encoding.minVideoBitrate = bitrate;
    return this;
  }

  override(enable: boolean): this {
    this.encoding.override = enable;
    return this;
  }

  // rotate(deg: number): this {
  //   this.encoding.output.rotate = deg;
  //   return this;
  // }

  videoBitrate(bitrate: number | string): this {
    this.encoding.videoBitrate = bitrate;
    return this;
  }

  videoBufSize(size: number | string): this {
    this.encoding.videoBufSize = size;
    return this;
  }

  width(width: number | string): this {
    this.encoding.width = width;
    return this;
  }

  seek(start: string): this {
    this.encoding.inputOptions.seek = start;
    return this;
  }

  to(end: string): this {
    this.encoding.outputOptions.to = end;
    return this;
  }

  complexFilter(filter: string): this {
    this.encoding.complexFilter = filter
    return this;
  }

  mappedOutputs(outputs: MappedOutput[]): this {
    this.#addEncoding();
    this.encoding.mappedOutputs = outputs;
    return this;
  }

  ignoreSubtitles(ignore: boolean = true) {
    // this
  }
  // Methods:

  addEventListener(
    event: "info",
    listener: EncodingInfoEventListener,
  ): this;
  addEventListener(
    event: "start",
    listener: EncodingStartEventListener,
  ): this;
  addEventListener(
    event: "progress",
    listener: EncodingProgressEventListener,
  ): this;
  addEventListener(
    event: "end",
    listener: EncodingEndEventListener,
  ): this;
  addEventListener(
    event: "error",
    listener: EncodingErrorEventListener,
  ): this;
  addEventListener(
    event: EncodingEventType,
    listener: EncodingEventListener,
  ): this {
    // deno-lint-ignore no-explicit-any
    this.encoding.addEventListener(event as any, listener as any);
    return this;
  }

  resolution(resolution: Resolution): this {
    if (resolution === Resolution.HD7680p) {
      this.encoding.width = 7680;
      this.encoding.height = 4320;
    } else if (resolution === Resolution.HD2160p) {
      this.encoding.width = 2840;
      this.encoding.height = 2160;
    } else if (resolution === Resolution.HD1440p) {
      this.encoding.width = 2560;
      this.encoding.height = 1440;
    } else if (resolution === Resolution.HD1080p) {
      this.encoding.width = 1920;
      this.encoding.height = 1080;
    } else if (resolution === Resolution.HD720p) {
      this.encoding.width = 1280;
      this.encoding.height = 720;
    } else if (resolution === Resolution.SD540p) {
      this.encoding.width = 960;
      this.encoding.height = 540;
    } else if (resolution === Resolution.SD480p) {
      this.encoding.width = 854;
      this.encoding.height = 480;
    } else if (resolution === Resolution.SD360p) {
      this.encoding.width = 640;
      this.encoding.height = 360;
    } else if (resolution === Resolution.SD240p) {
      this.encoding.width = 426;
      this.encoding.height = 240;
    } else if (resolution === Resolution.SD180p) {
      this.encoding.width = 320;
      this.encoding.height = 180;
    }
    return this;
  }
}
