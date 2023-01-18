import { OptionsBuilder, OptionsBuilderType } from "./options-builder.ts";
import { OtherOptions } from "../other-options.ts";

export class OtherOptionsBuilder extends OptionsBuilder<OtherOptions> {
  override options: Partial<OtherOptions> = {};
  override type: OptionsBuilderType = "other";
  stdin(value: boolean): this {
    this.options.stdin = value;
    return this;
  }
  // Video + Advanced Video
  autorotate(value: boolean): this {
    this.options.autorotate = value;
    return this;
  }
  autoscale(value: boolean): this {
    this.options.autoscale = value;
    return this;
  }
  ilme(value: boolean): this {
    this.options.ilme = value;
    return this;
  }
  psnr(value: boolean): this {
    this.options.psnr = value;
    return this;
  }
  vstats(value: boolean): this {
    this.options.vstats = value;
    return this;
  }
  vstats_file(value: string): this {
    this.options.vstats_file = value;
    return this;
  }
  vstats_version(value: string): this {
    this.options.vstats_version = value;
    return this;
  }
  dc(value: string): this {
    this.options.dc = value;
    return this;
  }
  // deprecated(value: vbsf
  init_hw_device(value: string): this {
    this.options.init_hw_device = value;
    return this;
  }
  filter_hw_device(value: string): this {
    this.options.filter_hw_device = value;
    return this;
  }
  hwaccels(value: boolean): this {
    this.options.hwaccels = value;
    return this;
  }
  // Audio + Advanced Audio
  // deprecated(value: absf
  // subtitle + Advanced Subtitle
  // deprecated(value: sbsf
  fix_sub_duration(value: boolean): this {
    this.options.fix_sub_duration = value;
    return this;
  }
  canvas_size(value: string): this {
    this.options.canvas_size = value;
    return this;
  }
  // Advanced
  ignore_unknown(value: boolean): this {
    this.options.ignore_unknown = value;
    return this;
  }
  copy_unknown(value: boolean): this {
    this.options.copy_unknown = value;
    return this;
  }
  frame_drop_threshold(value: string): this {
    this.options.frame_drop_threshold = value;
    return this;
  }
  adrift_threshold(value: string): this {
    this.options.adrift_threshold = value;
    return this;
  }
  copyts(value: boolean): this {
    this.options.copyts = value;
    return this;
  }
  start_at_zero(value: boolean): this {
    this.options.start_at_zero = value;
    return this;
  }
  copytb(value: string): this {
    this.options.copytb = value;
    return this;
  }
  dts_delta_threshold(value: boolean): this {
    this.options.dts_delta_threshold = value;
    return this;
  }
  dts_error_threshold(value: string): this {
    this.options.dts_error_threshold = value;
    return this;
  }
}
