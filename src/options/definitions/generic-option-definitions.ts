import { createOption, createOptionWithParameter } from "../option.ts";

// shared amongst ff* tools
// https://ffmpeg.org/ffmpeg.html#Generic-options
export const GenericOptionDefinitions = [
  createOption({
    name: "license",
    description: "Show license",
    cli: "L",
  }),
  createOption({
    name: "help",
    description: "Show Help",
    cli: "-h", // ["-h", "-?", "-help"],
  }),
  createOptionWithParameter({
    name: "help (long)",
    description: "Show Help",
    cli: "-help",
    parameter: {
      name: "args",
      type: "string",
      valueRequired: false,
    },
  }),
  createOption({
    name: "version",
    description: "Show version.",
    cli: "version",
  }),
  createOption({
    name: "buildConfiguration",
    description: "Show the build configuration, one option per line.",
    cli: "buildconf",
  }),
  createOption({
    name: "format",
    description: "Show available formats (including devices).",
    cli: "formats",
  }),
  createOption({
    name: "demuxers",
    description: "Show available demuxers.",
    cli: "demuxers",
  }),
  createOption({
    name: "muxers",
    description: "Show available muxers.",
    cli: "muxers",
  }),
  createOption({
    name: "devices",
    description: "Show available devices.",
    cli: "devices",
  }),
  createOption({
    name: "codecs",
    description: "Show all codecs known to libavcodec.",
    cli: "codecs",
  }),
  createOption({
    name: "decoders",
    description: "Show available decoders.",
    cli: "decoders",
  }),
  createOption({
    name: "encoders",
    description: "Show all available encoders.",
    cli: "encoders",
  }),
  createOption({
    name: "bitstream filters",
    description: "Show available bitstream filters.",
    cli: "bsfs",
  }),
  createOption({
    name: "filters",
    description: "Show available libavfilter filters.",
    cli: "filters",
  }),
  createOption({
    name: "protocols",
    description: "Show available protocols.",
    cli: "protocols",
  }),
  createOption({
    name: "pixel formats",
    description: "Show available pixel formats.",
    cli: "pix_fmts",
  }),
  createOption({
    name: "sample formats",
    description: "Show available sample formats.",
    cli: "sample_fmts",
  }),
  createOption({
    name: "channel layout names",
    description: "Show channel names and standard channel layouts.",
    cli: "layouts",
  }),
  createOption({
    name: "stream dispositions",
    description: "Show stream dispositions.",
    cli: "dispositions",
  }),
  createOption({
    name: "color names",
    description: "Show recognized color names.",
    cli: "colors",
  }),
  createOptionWithParameter({
    name: "sources",
    description: "Show autodetected sources of the input device.",
    cli: "sources",
    parameter: {
      name: "sources",
      type: "string",
    },
  }),
  createOptionWithParameter({
    name: "sinks",
    description: "Show autodetected sinks of the output device.",
    cli: "sinks",
    parameter: {
      name: "sinks",
      type: "string",
    },
  }),
  createOptionWithParameter({
    name: "log level",
    description: "Set logging level and flags used by the library.",
    cli: "loglevel",
    parameter: {
      name: "loglevel",
      type: "string",
    },
  }),
  createOptionWithParameter({
    name: "report",
    description: "Dump full command line and log output.",
    cli: "report",
    parameter: {
      name: "report",
      type: "string",
    },
  }),
  createOption({
    name: "hide banner",
    description: "Suppress printing banner.",
    cli: "banner",
  }),
  createOptionWithParameter({
    name: "cpu flags",
    description: "Allows setting and clearing cpu flags.",
    scope: "global",
    // optionType: "parameter",
    cli: "cpuflags",
    parameter: {
      type: "string",
      name: "flags",
    },
  }),
  createOptionWithParameter({
    name: "cpu count",
    description: "Override detection of CPU count.",
    scope: "global",
    cli: "cpucount",
    parameter: {
      type: "integer",
      name: "cpucount",
    },
  }),
  createOptionWithParameter({
    name: "max alloc",
    description:
      "Set the maximum size limit for allocating a block on the heap by ffmpeg’s family of malloc functions.",
    scope: "global",
    cli: "max_alloc",
    parameter: {
      type: "integer",
      name: "maxAlloc",
    },
  }),
];
