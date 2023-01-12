import { CreateOption, CreateOptionWithParameter } from "./option.ts";

// https://ffmpeg.org/ffmpeg.html#Audio-options
// https://ffmpeg.org/ffmpeg.html#Advanced-Audio-options
export const AudioOptions = [
  // "aframes obsolete for -frames:a"
  CreateOptionWithParameter({
    name: "audio sampling frequency",
    description: "Set the audio sampling frequency.",
    scope: "input-output",
    cli: "ar",
    parameterType: "string",
    parameterName: "freq",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "audio quality",
    description:
      "Set the audio quality (codec-specific, VBR). This is an alias for -q:a. ",
    scope: "output",
    cli: "aq",
    parameterType: "string",
    parameterName: "q",
  }),
  CreateOptionWithParameter({
    name: "audio channels",
    description: "Set the number of audio channels.",
    scope: "input-output",
    cli: "ac",
    parameterType: "string",
    parameterName: "channels",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "no audio",
    description: "Block audio streams from being selected or recorded",
    cli: "an",
  }),
  CreateOptionWithParameter({
    name: "audio codec",
    description: "Set the audio codec. This is an alias for -codec:a.",
    scope: "input-output",
    cli: "acodec",
    parameterType: "string",
    parameterName: "codec",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "sample audio format",
    description: "Set the audio sample format.",
    scope: "output",
    cli: "sample_fmt",
    parameterType: "string",
    parameterName: "sample_fmt",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "audio filtergraph",
    description:
      "Create the filtergraph specified by filtergraph and use it to filter the stream. alias for -filter:a",
    scope: "output",
    cli: "af",
    parameterType: "string",
    parameterName: "filtergraph",
  }),
  CreateOptionWithParameter({
    name: "audio tag",
    description: "Force audio tag/fourcc. This is an alias for -tag:a.",
    scope: "output",
    cli: "atag",
    parameterType: "string",
    parameterName: "fourcc-tag",
  }),
  // use bfs not absf (bitstream filter)
  CreateOptionWithParameter({
    name: "guess channel layout",
    description:
      "If some input channel layout is not known, try to guess only if it corresponds to at most the specified number of channels.",
    scope: "input",
    cli: "guess_layout_max",
    parameterType: "string",
    parameterName: "channels",
    specifier: "per-stream",
  }),
];
