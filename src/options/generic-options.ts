import { CreateOption, CreateOptionWithParameter } from "./option.ts";

// shared amongst ff* tools
// https://ffmpeg.org/ffmpeg.html#Generic-options
export const GenericOptions = [
  CreateOption({
    name: "license",
    description: "Show license",
    cli: "L",
  }),
  CreateOption({
    name: "help",
    description: "Show Help",
    cli: ["-h", "-?", "-help"],
  }),
  CreateOptionWithParameter({
    name: "help (long)",
    description: "Show Help",
    cli: "-help",
    parameterName: "args",
    parameterType: "string",
    valueRequired: false,
  }),
  CreateOption({
    name: "version",
    description: "Show version.",
    cli: "version",
  }),
  CreateOption({
    name: "buildConfiguration",
    description: "Show the build configuration, one option per line.",
    cli: "buildconf",
  }),
  CreateOption({
    name: "format",
    description: "Show available formats (including devices).",
    cli: "formats",
  }),
  CreateOption({
    name: "demuxers",
    description: "Show available demuxers.",
    cli: "demuxers",
  }),
  CreateOption({
    name: "muxers",
    description: "Show available muxers.",
    cli: "muxers",
  }),
  CreateOption({
    name: "devices",
    description: "Show available devices.",
    cli: "devices",
  }),
  CreateOption({
    name: "codecs",
    description: "Show all codecs known to libavcodec.",
    cli: "codecs",
  }),
  CreateOption({
    name: "decoders",
    description: "Show available decoders.",
    cli: "decoders",
  }),
  CreateOption({
    name: "encoders",
    description: "Show all available encoders.",
    cli: "encoders",
  }),
  CreateOption({
    name: "bitstream filters",
    description: "Show available bitstream filters.",
    cli: "bsfs",
  }),
  CreateOption({
    name: "filters",
    description: "Show available libavfilter filters.",
    cli: "filters",
  }),
  CreateOption({
    name: "protocols",
    description: "Show available protocols.",
    cli: "protocols",
  }),
  CreateOption({
    name: "pixel formats",
    description: "Show available pixel formats.",
    cli: "pix_fmts",
  }),
  CreateOption({
    name: "sample formats",
    description: "Show available sample formats.",
    cli: "sample_fmts",
  }),
  CreateOption({
    name: "channel layout names",
    description: "Show channel names and standard channel layouts.",
    cli: "layouts",
  }),
  CreateOption({
    name: "stream dispositions",
    description: "Show stream dispositions.",
    cli: "dispositions",
  }),
  CreateOption({
    name: "color names",
    description: "Show recognized color names.",
    cli: "colors",
  }),
  CreateOptionWithParameter({
    name: "sources",
    description: "Show autodetected sources of the input device.",
    cli: "sources",
    parameterName: "sources",
    parameterType: "string",
  }),
  CreateOptionWithParameter({
    name: "sinks",
    description: "Show autodetected sinks of the output device.",
    cli: "sinks",
    parameterName: "sinks",
    parameterType: "string",
  }),
  CreateOptionWithParameter({
    name: "log level",
    description: "Set logging level and flags used by the library.",
    cli: "loglevel",
    parameterName: "loglevel",
    parameterType: "string",
  }),
  CreateOptionWithParameter({
    name: "report",
    description: "Dump full command line and log output.",
    cli: "report",
    parameterName: "report",
    parameterType: "string",
  }),
  CreateOption({
    name: "hide banner",
    description: "Suppress printing banner.",
    cli: "banner",
  }),
  CreateOptionWithParameter({
    name: "cpu flags",
    description: "Allows setting and clearing cpu flags.",
    scope: "global",
    // optionType: "parameter",
    cli: "cpuflags",
    parameterType: "string",
    parameterName: "flags",
  }),
  CreateOptionWithParameter({
    name: "cpu count",
    description: "Override detection of CPU count.",
    scope: "global",
    cli: "cpucount",
    parameterType: "integer",
    parameterName: "cpucount",
    default: 2,
  }),
  CreateOptionWithParameter({
    name: "max alloc",
    description:
      "Set the maximum size limit for allocating a block on the heap by ffmpeg’s family of malloc functions.",
    scope: "global",
    cli: "max_alloc",
    parameterType: "integer",
    parameterName: "maxAlloc",
    default: Number.MAX_SAFE_INTEGER, // Default is INT_MAX. (check values)
  }),
];
