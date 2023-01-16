import { InputOutputOptions } from "./input-output-options.ts";

export interface OutputOptions extends InputOutputOptions {
  // main
  fs: number;
  timestamp: string;
  metadata: string;
  disposition: string;
  program: string;
  target: string;
  dframes: number;
  frames: number;
  q: string;
  qscale: string;
  filter: string;
  filter_script: string;
  attach: string;
  pre: string;
  // Audio
  aframes: number;
  aq: string; // === q:a
  sample_fmt: string;
  af: string;
  atag: string;
  // Video
  vframes: number;
  fpsmax: number;
  aspect: string;
  vcodec: string;
  pass: number;
  passlogfile: string;
  vf: string;
  rc_override: string;
  top: number;
  vtag: string;
  force_key_frames: string;
  copyinkf: boolean;
  // Subtitle
  // advanced
  map: string;
  map_metadata: string;
  map_chapters: string;
  fpsmode: string;
  apad: string;
  enc_time_base: string;
  shortest: boolean;
  muxdelay: string;
  muxpreload: string;
  streamid: string;
  bsf: string;
  max_muxing_queue_size: string;
  muxing_queue_data_threshold: number;
  bits_per_raw_sample: string;
}
