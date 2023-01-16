import { createOption, createOptionWithParameter } from "../option.ts";

// https://ffmpeg.org/ffmpeg.html#Audio-options
// https://ffmpeg.org/ffmpeg.html#Advanced-Audio-options
export const AudioOptionDefinitions = [
  // "aframes obsolete for -frames:a"
  createOptionWithParameter({
    name: "audio sampling frequency",
    description: "Set the audio sampling frequency.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "ar",
    parameter: { type: "string", name: "freq" },
  }),
  createOptionWithParameter({
    name: "audio quality",
    description:
      "Set the audio quality (codec-specific, VBR). This is an alias for -q:a. ",
    scope: "output",
    cli: "aq",
    parameter: { type: "string", name: "q" },
  }),
  createOptionWithParameter({
    name: "audio channels",
    description: "Set the number of audio channels.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "ac",
    parameter: {
      type: "string",
      name: "channels",
    },
  }),
  createOption({
    name: "no audio",
    description: "Block audio streams from being selected or recorded",
    cli: "an",
  }),
  createOptionWithParameter({
    name: "audio codec",
    description: "Set the audio codec. This is an alias for -codec:a.",
    scope: "input-output",
    specifier: "per-stream",
    cli: "acodec",
    parameter: { type: "string", name: "codec" },
  }),
  createOptionWithParameter({
    name: "sample audio format",
    description: "Set the audio sample format.",
    scope: "output",
    specifier: "per-stream",
    cli: "sample_fmt",
    parameter: { type: "string", name: "sample_fmt" },
  }),
  createOptionWithParameter({
    name: "audio filtergraph",
    description:
      "Create the filtergraph specified by filtergraph and use it to filter the stream. alias for -filter:a",
    scope: "output",
    cli: "af",
    parameter: { type: "string", name: "filtergraph" },
  }),
  createOptionWithParameter({
    name: "audio tag",
    description: "Force audio tag/fourcc. This is an alias for -tag:a.",
    scope: "output",
    cli: "atag",
    parameter: { type: "string", name: "fourcc-tag" },
  }),
  // use bfs not absf (bitstream filter)
  createOptionWithParameter({
    name: "guess channel layout",
    description:
      "If some input channel layout is not known, try to guess only if it corresponds to at most the specified number of channels.",
    scope: "input",
    specifier: "per-stream",
    cli: "guess_layout_max",
    parameter: { type: "string", name: "channels" },
  }),
];