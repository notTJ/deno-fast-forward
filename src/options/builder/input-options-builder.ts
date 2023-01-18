import { InputOptions } from "../input-options.ts";
import { OptionsBuilderType } from "./options-builder.ts";
import { InputOutputOptionsBuilder } from "./input-output-options-builder.ts";

export class InputOptionsBuilder
  extends InputOutputOptionsBuilder<InputOptions> {
  override options: InputOptions = {};
  override type: OptionsBuilderType = "input";
  i(value: string): this {
    this.options.i = value;
    return this;
  }
  stream_loop(value: number): this {
    this.options.stream_loop = value;
    return this;
  }
  sseof(value: string): this {
    this.options.sseof = value;
    return this;
  }
  isync(value: string): this {
    this.options.isync = value;
    return this;
  }
  itsoffset(value: string): this {
    this.options.itsoffset = value;
    return this;
  }
  itsscale(value: string): this {
    this.options.itsscale = value;
    return this;
  }
  reinit_filter(value: string): this {
    this.options.reinit_filter = value;
    return this;
  }
  dump_attachment(value: string): this {
    this.options.dump_attachment = value;
    return this;
  }
  guess_layout_max(enable: boolean): this {
    this.options.guess_layout_max = enable;
    return this;
  }
  display_rotation(value: string): this {
    this.options.display_rotation = value;
    return this;
  }
  display_hflip(enable: boolean): this {
    this.options.display_hflip = enable;
    return this;
  }
  display_vflip(enable: boolean): this {
    this.options.display_vflip = enable;
    return this;
  }
  hwaccel(value: string): this {
    this.options.hwaccel = value;
    return this;
  }
  hwaccelDevice(value: string): this {
    this.options.hwaccel_device = value;
    return this;
  }
  readrate(value: number): this {
    this.options.readrate = value;
    return this;
  }
  re(enable: boolean): this {
    this.options.re = enable;
    return this;
  }
  accurate_seek(enable: boolean): this {
    this.options.accurate_seek = enable;
    return this;
  }
  seek_timestamp(enable: boolean): this {
    this.options.seek_timestamp = enable;
    return this;
  }
  discard(value: string): this {
    this.options.discard = value;
    return this;
  }
}
