import { OutputOptions } from "../output-options.ts";
import { OptionsBuilderType } from "./options-builder.ts";
import { InputOutputOptionsBuilder } from "./input-output-options-builder.ts";

export class OutputOptionsBuilder
  extends InputOutputOptionsBuilder<OutputOptions> {
  override options: OutputOptions = {};
  override type: OptionsBuilderType = "output";
  fs(value: number): this {
    this.options.fs = value;
    return this;
  }
  timestamp(value: string): this {
    this.options.timestamp = value;
    return this;
  }
  metadata(value: string): this {
    this.options.metadata = value;
    return this;
  }
  disposition(value: string): this {
    this.options.disposition = value;
    return this;
  }
  program(value: string): this {
    this.options.program = value;
    return this;
  }
  target(value: string): this {
    this.options.target = value;
    return this;
  }
  dframes(value: number): this {
    this.options.dframes = value;
    return this;
  }
  frames(value: number): this {
    this.options.frames = value;
    return this;
  }
  q(value: string): this {
    this.options.q = value;
    return this;
  }
  qscale(value: string): this {
    this.options.qscale = value;
    return this;
  }
  filter(value: string): this {
    this.options.filter = value;
    return this;
  }
  filter_script(value: string): this {
    this.options.filter_script = value;
    return this;
  }
  attach(value: string): this {
    this.options.attach = value;
    return this;
  }
  pre(value: string): this {
    this.options.pre = value;
    return this;
  }
  // Audio
  aframes(value: number): this {
    this.options.aframes = value;
    return this;
  }
  aq(value: string): this {
    this.options.aq = value;
    return this;
  } // === q:a
  sample_fmt(value: string): this {
    this.options.sample_fmt = value;
    return this;
  }
  af(value: string): this {
    this.options.af = value;
    return this;
  }
  atag(value: string): this {
    this.options.atag = value;
    return this;
  }
  // Video
  vframes(value: number): this {
    this.options.vframes = value;
    return this;
  }
  fpsmax(value: number): this {
    this.options.fpsmax = value;
    return this;
  }
  aspect(value: string): this {
    this.options.aspect = value;
    return this;
  }
  vcodec(value: string): this {
    this.options.vcodec = value;
    return this;
  }
  pass(value: number): this {
    this.options.pass = value;
    return this;
  }
  passlogfile(value: string): this {
    this.options.passlogfile = value;
    return this;
  }
  vf(value: string): this {
    this.options.vf = value;
    return this;
  }
  rc_override(value: string): this {
    this.options.rc_override = value;
    return this;
  }
  top(value: number): this {
    this.options.top = value;
    return this;
  }
  vtag(value: string): this {
    this.options.vtag = value;
    return this;
  }
  force_key_frames(value: string): this {
    this.options.force_key_frames = value;
    return this;
  }
  copyinkf(value: boolean): this {
    this.options.copyinkf = value;
    return this;
  }
  // Subtitle
  // advanced
  map(value: string): this {
    this.options.map = value;
    return this;
  }
  map_metadata(value: string): this {
    this.options.map_metadata = value;
    return this;
  }
  map_chapters(value: string): this {
    this.options.map_chapters = value;
    return this;
  }
  fpsmode(value: string): this {
    this.options.fpsmode = value;
    return this;
  }
  apad(value: string): this {
    this.options.apad = value;
    return this;
  }
  enc_time_base(value: string): this {
    this.options.enc_time_base = value;
    return this;
  }
  shortest(value: boolean): this {
    this.options.shortest = value;
    return this;
  }
  muxdelay(value: string): this {
    this.options.muxdelay = value;
    return this;
  }
  muxpreload(value: string): this {
    this.options.muxpreload = value;
    return this;
  }
  streamid(value: string): this {
    this.options.streamid = value;
    return this;
  }
  bsf(value: string): this {
    this.options.bsf = value;
    return this;
  }
  max_muxing_queue_size(value: string): this {
    this.options.max_muxing_queue_size = value;
    return this;
  }
  muxing_queue_data_threshold(value: number): this {
    this.options.muxing_queue_data_threshold = value;
    return this;
  }
  bits_per_raw_sample(value: string): this {
    this.options.bits_per_raw_sample = value;
    return this;
  }
  file(value: string): this {
    this.options.file = value;
    return this;
  }
}
