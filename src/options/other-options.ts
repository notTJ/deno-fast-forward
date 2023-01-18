// keys matching cli arg
// options with unspecified scope (input, output, global)
// assuming global is probably safe
export interface OtherOptions {
  // Main
  stdin?: boolean;
  // Video + Advanced Video
  autorotate?: boolean;
  autoscale?: boolean;
  ilme?: boolean;
  psnr?: boolean;
  vstats?: boolean;
  vstats_file?: string;
  vstats_version?: string;
  dc?: string;
  // deprecated?: vbsf
  init_hw_device?: string;
  filter_hw_device?: string;
  hwaccels?: boolean;
  // Audio + Advanced Audio
  // deprecated?: absf
  // subtitle + Advanced Subtitle
  // deprecated?: sbsf
  fix_sub_duration?: boolean;
  canvas_size?: string;
  // Advanced
  ignore_unknown?: boolean;
  copy_unknown?: boolean;
  frame_drop_threshold?: string;
  adrift_threshold?: string;
  copyts?: boolean;
  start_at_zero?: boolean;
  copytb?: string;
  dts_delta_threshold?: boolean;
  dts_error_threshold?: string;
}
