import { FFMpegInputOutputOptions } from "./ffmpeg-input-output-options.ts";

export interface FFMpegInputOptions extends FFMpegInputOutputOptions {
  // main
  i: string;
  stream_loop: number;
  sseof: string;
  isync: string;
  itsoffset: string;
  itsscale: string;
  reinit_filter: string;
  dump_attachment: string;
  // Audio + Advanced Audio
  guess_layout_max: boolean;
  // Video + Advanced Video
  display_rotation: string;
  display_hflip: boolean;
  display_vflip: boolean;
  hwaccel: string;
  hwaccel_device: string;
  // Subtitle
  // advanced
  readrate: number;
  re: boolean;
  accurate_seek: boolean;
  seek_timestamp: boolean;
  discard: string;
}
