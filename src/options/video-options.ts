import { CreateOption, CreateOptionWithParameter } from "./option.ts";

// https://ffmpeg.org/ffmpeg.html#Main-options
// https://ffmpeg.org/ffmpeg.html#Advanced-Video-options
export const VideoOptions = [
  // -vframes, deprecated for -frames:v
  CreateOptionWithParameter({
    name: "framerate",
    description: "Set frame rate (Hz value, fraction or abbreviation).",
    scope: "input-output",
    cli: "framerate",
    parameterType: "string",
    parameterName: "fps",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "max fps",
    description: "Set maximum frame rate (Hz value, fraction or abbreviation).",
    scope: "output",
    cli: "fpsmax",
    parameterType: "string",
    parameterName: "max-fps",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "frame size",
    description: "Set frame size.",
    scope: "input-output",
    cli: "s",
    parameterType: "string",
    parameterName: "size",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "aspect ratio",
    description: "Set the video display aspect ratio specified by aspect. ",
    scope: "output",
    cli: "aspect",
    parameterType: "string",
    parameterName: "aspect",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "",
    description: "",
    scope: "input",
    cli: "",
    parameterType: "string",
    parameterName: "",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "video rotation metadata",
    description: "Set video rotation metadata.",
    scope: "input",
    cli: "display_rotation",
    parameterType: "decimal",
    parameterName: "rotation",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "horizontal flip",
    description:
      "Set whether on display the image should be horizontally flipped.",
    scope: "input",
    cli: "display_hflip",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "vertical flip",
    description:
      "Set whether on display the image should be vertically flipped.",
    scope: "input",
    cli: "display_vflip",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "no video",
    description: "Blocks video streams from being slected or recorded",
    scope: "input-output",
    cli: "vn",
  }),
  CreateOptionWithParameter({
    name: "video codec",
    description: "Set the video codec.",
    scope: "output",
    cli: "vcodec",
    parameterType: "string",
    parameterName: "codec",
  }),
  CreateOptionWithParameter({
    name: "pass",
    description: "Select the pass number (1 or 2).",
    scope: "input",
    cli: "pass",
    parameterType: "integer",
    parameterName: "n",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "pass log file",
    description:
      "Set two-pass log file name prefix to prefix, the default file name prefix is 'ffmpeg2pass'.",
    scope: "output",
    cli: "passlogfile",
    parameterType: "string",
    parameterName: "prefix",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "video filter",
    description:
      "Create the filtergraph specified by filtergraph and use it to filter the stream.",
    scope: "input",
    cli: "vf", // alias for -filter:v
    parameterType: "string",
    parameterName: "filtergraph",
  }),
  CreateOption({
    name: "auto-rotate",
    description: "Automatically rotate the video according to file metadata.",
    scope: "output",
    cli: "autorotate",
  }),
  CreateOption({
    name: "auto-scale",
    description:
      "Automatically scale the video according to the resolution of first frame.",
    scope: "output",
    cli: "autoscale",
  }),
  // advanced video options
  CreateOptionWithParameter({
    name: "pixel format",
    description: "Set pixel format.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "pix_fmt",
  }),
  CreateOptionWithParameter({
    name: "SwScaler flags",
    description: "Set SwScaler flags.",
    scope: "input-output",
    cli: "sws_flags",
    parameterType: "string",
    parameterName: "flags",
  }),
  CreateOptionWithParameter({
    name: "rate control",
    description:
      'Rate control override for specific intervals, formatted as "int,int,int" list separated with slashes.',
    scope: "output",
    specifier: "per-stream",
    cli: "rc_override",
    parameterType: "string",
    parameterName: "override",
  }),
  CreateOption({
    name: "force interlacing support",
    description:
      "Force interlacing support in encoder (MPEG-2 and MPEG-4 only).",
    cli: "ilme",
  }),
  CreateOption({
    name: "calculate PSNR",
    description: "Calculate PSNR of compressed frames.",
    cli: "psnr",
  }),
  CreateOption({
    name: "log video stats",
    description: "Dump video coding statistics to vstats_HHMMSS.log.",
    cli: "vstats",
  }),
  CreateOptionWithParameter({
    name: "log video stats to file",
    description: "Dump video coding statistics to file.",
    cli: "vstats_file",
    parameterType: "string",
    parameterName: "filename",
  }),
  CreateOptionWithParameter({
    name: "log video stats to file",
    description: "Dump video coding statistics to file.",
    cli: "vstats_version",
    parameterType: "string",
    parameterName: "filename",
  }),
  CreateOptionWithParameter({
    name: "top",
    description: "top=1/bottom=0/auto=-1 field first",
    scope: "output",
    specifier: "per-stream",
    cli: "top",
    parameterType: "number",
    parameterName: "n",
  }),
  CreateOptionWithParameter({
    name: "dc precision",
    description: "Intra_dc_precision.",
    cli: "dc",
    parameterType: "string",
    parameterName: "precision",
  }),
  CreateOptionWithParameter({
    name: "video tag",
    description: "Force video tag/fourcc. This is an alias for -tag:v.",
    scope: "output",
    cli: "vtag",
    parameterType: "string",
    parameterName: "fourcc/tag",
  }),
  CreateOption({
    name: "QP histogram",
    description: "Show QP histogram",
    scope: "input",
    cli: "qphist",
  }),
  // deprecated: vbsf
  CreateOptionWithParameter({
    name: "force key frame",
    description: "",
    scope: "output",
    specifier: "per-stream",
    cli: "force_key_frames",
    parameterType: "string",
    parameterName: "parameter",
  }),
  CreateOption({
    name: "copy inkf",
    description:
      "When doing stream copy, copy also non-key frames found at the beginning. ",
    scope: "output",
    specifier: "per-stream",
    cli: "copyinkf",
  }),
  CreateOptionWithParameter({
    name: "init hardware device",
    description:
      "Initialise a new hardware device of type type called name, using the given device parameters.",
    cli: "init_hw_device",
    parameterType: "complex",
    parameterName: "name",
  }),
  CreateOption({
    name: "list init hw device",
    description:
      "List all hardware device types supported in this build of ffmpeg.",
    cli: "init_hw_device list",
  }),
  CreateOptionWithParameter({
    name: "filter hw device",
    description:
      "pass the hardware device called name to all filters in any filter graph.",
    cli: "filter_hw_device",
    parameterType: "string",
    parameterName: "name",
  }),
  CreateOptionWithParameter({
    name: "hardware accel",
    description: "Use hardware acceleration to decode the matching stream(s).",
    scope: "input",
    specifier: "per-stream",
    cli: "hwaccel",
    parameterType: "string",
    parameterName: "hwaccel",
  }),
  CreateOptionWithParameter({
    name: "hardware accel device",
    description: "Select a device to use for hardware acceleration.",
    scope: "input",
    specifier: "per-stream",
    cli: "hwaccel_device",
    parameterType: "string",
    parameterName: "hwaccel_device",
  }),
  CreateOption({
    name: "list hwaccel components",
    description:
      "List all hardware acceleration components enabled in this build of ffmpeg.",
    cli: "hwaccels",
  }),
];
