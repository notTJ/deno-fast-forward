// shared by both input and output options
import { Options } from "./options.ts";

export interface InputOutputOptions extends Options {
  // main
  f?: string;
  c?: string;
  t?: string;
  to?: string;
  ss?: string;
  dn?: boolean;
  // Audio
  ar?: string;
  ac?: string;
  an?: boolean;
  acodec?: string;
  // Video
  framerate?: string;
  s?: string; // frame size
  vn?: string;
  // Subtitle
  scodec?: string;
  sn?: string; // ?
  // advanced
  bitexact?: boolean;
  tag?: string;
  thread_queue_size?: number;
}
