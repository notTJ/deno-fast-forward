import { Options } from "./options.ts";

export interface GenericOptions extends Options {
  L?: boolean;
  help?: boolean;
  // long help
  version?: boolean;
  buildconf?: boolean;
  format?: string;
  demuxers?: boolean;
  muxers?: boolean;
  devices?: boolean;
  codecs?: boolean;
  decoders?: boolean;
  encoders?: boolean;
  bsfs?: boolean;
  filters?: boolean;
  protocols?: boolean;
  pix_fmts?: boolean;
  sample_fmts?: boolean;
  layouts?: boolean;
  dispositions?: boolean;
  colors?: boolean;
  sources?: boolean;
  sinks?: boolean;
  loglevel?: string;
  report?: boolean;
  level?: boolean;
  cpuflags?: string;
  cpucount?: number;
  max_alloc?: number;
}
