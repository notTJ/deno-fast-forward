import { Options } from "./options.ts";

export interface GlobalOptions extends Options {
  // main
  y?: boolean;
  n?: boolean;
  recast_media?: boolean;
  filter?: number;
  filterThreads?: number;
  stats?: boolean;
  stats_period?: string;
  progress?: string; // url
  stdin?: boolean; // enable
  debug_ts?: boolean;
  // Audio
  // Video
  // Subtitle
  // advanced
  benchmark?: boolean;
  benchmark_all?: boolean;
  timelimit?: string; // time-duration
  dump?: boolean;
  hex?: boolean;
  vsync?: boolean;
  filter_complex?: string;
  filter_complex_threads?: number;
  lavfi?: string;
  filter_complex_script?: string; // url
  sdp_file?: string; // url
  abort_on?: boolean;
  max_error_rate?: string;
  auto_conversion_filters?: boolean;
}
