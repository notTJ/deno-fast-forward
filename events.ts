import type { Encoding } from "./encoding.ts";
import type { MediaInfo } from "./media_info.ts";

export type EncodingEventType = "info" | "start" | "progress" | "end" | "error";

export type EncodingEventListener =
  | EncodingInfoEventListener
  | EncodingStartEventListener
  | EncodingProgressEventListener
  | EncodingEndEventListener
  | EncodingErrorEventListener;

export type EncodingEvent =
  | EncodingInfoEvent
  | EncodingStartEvent
  | EncodingProgressEvent
  | EncodingEndEvent
  | EncodingErrorEvent;

abstract class AbstractEncodingEvent<T extends EncodingEventType> {
  readonly type: T;
  readonly #encoding: Encoding;

  protected constructor(
    name: T,
    encoding: Encoding,
  ) {
    this.type = name;
    this.#encoding = encoding;
  }

  get encoding(): Encoding {
    return this.#encoding;
  }
}

export type EncodingInfoEventListener = (
  event: EncodingInfoEvent,
) => void;

export class EncodingInfoEvent extends AbstractEncodingEvent<"info"> {
  readonly #info: MediaInfo;

  constructor(encoding: Encoding, info: MediaInfo) {
    super("info", encoding);
    this.#info = info;
  }

  get info(): MediaInfo {
    return this.#info;
  }

  private readonly "#encoding": Encoding;
}

export type EncodingStartEventListener = (
  event: EncodingStartEvent,
) => void;

export class EncodingStartEvent extends AbstractEncodingEvent<"start"> {
  constructor(encoding: Encoding) {
    super("start", encoding);
  }

  private readonly "#encoding": Encoding;
}

export type EncodingProgressEventListener = (
  event: EncodingProgressEvent,
) => void;

export class EncodingProgressEvent extends AbstractEncodingEvent<"progress"> {
  readonly frame: number;
  readonly fps: number;
  readonly bitrate: string;
  readonly totalSize: number;
  // readonly outTimeUs: number;
  readonly outTimeMs: number;
  readonly outTime: string;
  readonly dupFrames: number;
  readonly dropFrames: number;
  readonly speed: number;
  readonly progress: number;
  readonly done: boolean;

  constructor(
    encoding: Encoding,
    progress: number,
    info: ProgressInfo,
  ) {
    super("progress", encoding);
    this.frame = parseInt(info.frame);
    this.fps = parseFloat(info.fps);
    this.bitrate = info.bitrate;
    this.totalSize = parseInt(info.total_size);
    // this.outTimeUs = parseInt(info.out_time_us);
    this.outTimeMs = parseInt(info.out_time_ms);
    this.outTime = info.out_time;
    this.dupFrames = parseInt(info.dup_frames);
    this.dropFrames = parseInt(info.drop_frames);
    this.speed = parseFloat(info.speed);
    this.progress = progress;
    this.done = info.progress === "end";
  }

  private readonly "#encoding": Encoding;
}

// FFmpegProgressInfo
export interface ProgressInfo {
  frame: string;
  fps: string;
  // deno-lint-ignore camelcase
  stream_0_0_q: string;

  // size: string; // audio end only ?
  // time: string; // audio end only ?

  bitrate: string;
  // deno-lint-ignore camelcase
  total_size: string;
  // out_time_us: string;
  // deno-lint-ignore camelcase
  out_time_ms: string;
  // deno-lint-ignore camelcase
  out_time: string;
  // deno-lint-ignore camelcase
  dup_frames: string;
  // deno-lint-ignore camelcase
  drop_frames: string;
  speed: string;
  progress: "continue" | "end";
}

export type EncodingEndEventListener = (
  event: EncodingEndEvent,
) => void;

export class EncodingEndEvent extends AbstractEncodingEvent<"end"> {
  constructor(encoding: Encoding) {
    super("end", encoding);
  }

  private readonly "#encoding": Encoding;
}

export class EncodingErrorEvent extends AbstractEncodingEvent<"error"> {
  constructor(encoding: Encoding, readonly error: Error) {
    super("error", encoding);
  }

  private readonly "#encoding": Encoding;
}

export type EncodingErrorEventListener = (
  event: EncodingErrorEvent,
) => void;
