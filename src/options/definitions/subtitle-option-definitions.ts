import { createOption, createOptionWithParameter } from "../option.ts";

// https://ffmpeg.org/ffmpeg.html#Subtitle-options
// https://ffmpeg.org/ffmpeg.html#Advanced-Subtitle-options
export const SubtitleOptionDefinitions = [
  createOptionWithParameter({
    name: "subtitle codec",
    description: "Set the subtitle codec.",
    scope: "input-output",
    cli: "scodec",
    parameter: { type: "string", name: "codec" },
  }),

  createOption({
    name: "no subtitle streams",
    description: "blocks subtitle streams from being selected or recorded",
    scope: "input-output",
    cli: "sn",
  }),
  // -ssbf deprecated, see -bsf
  // advanced options
  createOption({
    name: "fix subtitle durations",
    description: "Stop writing the output or reading the input at position.",
    cli: "fix_sub_duration",
  }),
  createOptionWithParameter({
    name: "subtitle canvas size",
    description: "Set the size of the canvas used to render subtitles.",
    cli: "canvas_size",
    parameter: { type: "string", name: "size" },
  }),
];
