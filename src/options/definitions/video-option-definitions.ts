import { createOption, createOptionWithParameter } from "../option.ts";

// https://ffmpeg.org/ffmpeg.html#Main-options
// https://ffmpeg.org/ffmpeg.html#Advanced-Video-options
export const VideoOptionDefinitions = [
  // -vframes, deprecated for -frames:v
  createOptionWithParameter({
    name: "framerate",
    description: "Set frame rate (Hz value, fraction or abbreviation).",
    scope: "input-output",
    specifier: "per-stream",
    cli: "framerate",
    parameter: { type: "string", name: "fps" },
  }),
  createOptionWithParameter({
    name: "max fps",
    description: "Set maximum frame rate (Hz value, fraction or abbreviation).",
    scope: "output",
    specifier: "per-stream",
    cli: "fpsmax",
    parameter: { type: "string", name: "max-fps" },
  }),
  createOptionWithParameter({
    name: "frame size",
    description: "Set frame size.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "s",
    parameter: { type: "string", name: "size" },
  }),
  createOptionWithParameter({
    name: "aspect ratio",
    description: "Set the video display aspect ratio specified by aspect. ",
    scope: "output",
    specifier: "per-stream",
    cli: "aspect",
    parameter: { type: "string", name: "aspect" },
  }),
  createOptionWithParameter({
    name: "video rotation metadata",
    description: "Set video rotation metadata.",
    scope: "input",
    specifier: "per-stream",
    cli: "display_rotation",
    parameter: { type: "decimal", name: "rotation" },
  }),
  createOption({
    name: "horizontal flip",
    description:
      "Set whether on display the image should be horizontally flipped.",
    scope: "input",
    cli: "display_hflip",
    specifier: "per-stream",
  }),
  createOption({
    name: "vertical flip",
    description:
      "Set whether on display the image should be vertically flipped.",
    scope: "input",
    specifier: "per-stream",
    cli: "display_vflip",
  }),
  createOption({
    name: "no video",
    description: "Blocks video streams from being slected or recorded",
    scope: "input-output",
    cli: "vn",
  }),
  createOptionWithParameter({
    name: "video codec",
    description: "Set the video codec.",
    scope: "output",
    cli: "vcodec",
    parameter: { type: "string", name: "codec" },
  }),
  createOptionWithParameter({
    name: "pass",
    description: "Select the pass number (1 or 2).",
    scope: "input",
    specifier: "per-stream",
    cli: "pass",
    parameter: { type: "integer", name: "n" },
  }),
  createOptionWithParameter({
    name: "pass log file",
    description:
      "Set two-pass log file name prefix to prefix, the default file name prefix is 'ffmpeg2pass'.",
    scope: "output",
    specifier: "per-stream",
    cli: "passlogfile",
    parameter: { type: "string", name: "prefix" },
  }),
  createOptionWithParameter({
    name: "video filter",
    description:
      "Create the filtergraph specified by filtergraph and use it to filter the stream.",
    scope: "input",
    cli: "vf", // alias for -filter:v
    parameter: { type: "string", name: "filtergraph" },
  }),
  createOption({
    name: "auto-rotate",
    description: "Automatically rotate the video according to file metadata.",
    scope: "output",
    cli: "autorotate",
  }),
  createOption({
    name: "auto-scale",
    description:
      "Automatically scale the video according to the resolution of first frame.",
    scope: "output",
    cli: "autoscale",
  }),
  // advanced video options
  createOptionWithParameter({
    name: "pixel format",
    description: "Set pixel format.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "pix_fmt",
  }),
  createOptionWithParameter({
    name: "SwScaler flags",
    description: "Set SwScaler flags.",
    scope: "input-output",
    cli: "sws_flags",
    parameter: { type: "string", name: "flags" },
  }),
  createOptionWithParameter({
    name: "rate control",
    description:
      'Rate control override for specific intervals, formatted as "int,int,int" list separated with slashes.',
    scope: "output",
    specifier: "per-stream",
    cli: "rc_override",
    parameter: { type: "string", name: "override" },
  }),
  createOption({
    name: "force interlacing support",
    description:
      "Force interlacing support in encoder (MPEG-2 and MPEG-4 only).",
    cli: "ilme",
  }),
  createOption({
    name: "calculate PSNR",
    description: "Calculate PSNR of compressed frames.",
    cli: "psnr",
  }),
  createOption({
    name: "log video stats",
    description: "Dump video coding statistics to vstats_HHMMSS.log.",
    cli: "vstats",
  }),
  createOptionWithParameter({
    name: "log video stats to file",
    description: "Dump video coding statistics to file.",
    cli: "vstats_file",
    parameter: { type: "string", name: "filename" },
  }),
  createOptionWithParameter({
    name: "log video stats to file",
    description: "Dump video coding statistics to file.",
    cli: "vstats_version",
    parameter: { type: "string", name: "filename" },
  }),
  createOptionWithParameter({
    name: "top",
    description: "top=1/bottom=0/auto=-1 field first",
    scope: "output",
    specifier: "per-stream",
    cli: "top",
    parameter: { type: "number", name: "n" },
  }),
  createOptionWithParameter({
    name: "dc precision",
    description: "Intra_dc_precision.",
    cli: "dc",
    parameter: { type: "string", name: "precision" },
  }),
  createOptionWithParameter({
    name: "video tag",
    description: "Force video tag/fourcc. This is an alias for -tag:v.",
    scope: "output",
    cli: "vtag",
    parameter: { type: "string", name: "fourcc/tag" },
  }),
  createOption({
    name: "QP histogram",
    description: "Show QP histogram",
    scope: "input",
    cli: "qphist",
  }),
  // deprecated: vbsf
  createOptionWithParameter({
    name: "force key frame",
    description: "",
    scope: "output",
    specifier: "per-stream",
    cli: "force_key_frames",
    parameter: { type: "string", name: "parameter" },
  }),
  createOption({
    name: "copy inkf",
    description:
      "When doing stream copy, copy also non-key frames found at the beginning. ",
    scope: "output",
    specifier: "per-stream",
    cli: "copyinkf",
  }),
  createOptionWithParameter({
    name: "init hardware device",
    description:
      "Initialise a new hardware device of type type called name, using the given device parameters.",
    cli: "init_hw_device",
    parameter: { type: "complex", name: "name" },
  }),
  createOption({
    name: "list init hw device",
    description:
      "List all hardware device types supported in this build of ffmpeg.",
    cli: "init_hw_device list",
  }),
  createOptionWithParameter({
    name: "filter hw device",
    description:
      "pass the hardware device called name to all filters in any filter graph.",
    cli: "filter_hw_device",
    parameter: { type: "string", name: "name" },
  }),
  createOptionWithParameter({
    name: "hardware accel",
    description: "Use hardware acceleration to decode the matching stream(s).",
    scope: "input",
    specifier: "per-stream",
    cli: "hwaccel",
    parameter: { type: "string", name: "hwaccel" },
  }),
  createOptionWithParameter({
    name: "hardware accel device",
    description: "Select a device to use for hardware acceleration.",
    scope: "input",
    specifier: "per-stream",
    cli: "hwaccel_device",
    parameter: { type: "string", name: "hwaccel_device" },
  }),
  createOption({
    name: "list hwaccel components",
    description:
      "List all hardware acceleration components enabled in this build of ffmpeg.",
    cli: "hwaccels",
  }),
];
