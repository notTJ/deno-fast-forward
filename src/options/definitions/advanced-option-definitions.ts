import { createOption, createOptionWithParameter } from "../option.ts";

// https://ffmpeg.org/ffmpeg.html#Advanced-options
export const AdvancedOptionDefinitions = [
  // -map is complicated, skip for now
  createOptionWithParameter({
    name: "map",
    description: "Create one or more streams in the output file.",
    scope: "output",
    specifier: "per-stream",
    cli: "map",
    parameter: { type: "complex", name: "input_file_id" },
  }),
  createOption({
    name: "ignore unknown",
    description:
      "Allow input streams with unknown type to be copied instead of failing if copying such streams is attempted. ",
    cli: "ignore_unknown",
  }),
  createOption({
    name: "copy unknown",
    description:
      "Ignore input streams with unknown type instead of failing if copying such streams is attempted.",
    cli: "copy_unknown",
  }),
  // map-channel is deprecated
  createOptionWithParameter({
    name: "map metadata",
    description:
      "Set metadata information of the next output file from infile.",
    scope: "output",
    specifier: "per-stream",
    cli: "map_metadata",
    parameter: { type: "complex", name: "infile" },
  }),
  createOptionWithParameter({
    name: "map chapters",
    description:
      "Set metadata information of the next output file from infile.",
    scope: "output",
    cli: "map_chapters",
    parameter: { type: "integer", name: "input_file_index" },
  }),
  createOption({
    name: "benchmark",
    description: "Show benchmarking information at the end of an encode.",
    scope: "global",
    cli: "benchmark",
  }),
  createOption({
    name: "benchmark all",
    description: "Show benchmarking information during the encode.",
    scope: "global",
    cli: "benchmark_all",
  }),
  createOptionWithParameter({
    name: "time limit",
    description:
      "Exit after ffmpeg has been running for duration seconds in CPU user time.",
    scope: "global",
    cli: "timelimit",
    parameter: { type: "time-duration", name: "duration" },
  }),
  createOption({
    name: "dump",
    description: "Dump each input packet to stderr.",
    scope: "global",
    cli: "dump",
  }),
  createOption({
    name: "hex",
    description: "When dumping packets, also dump the payload.",
    scope: "global",
    cli: "hex",
  }),
  createOptionWithParameter({
    name: "read rate",
    description: "Limit input read speed. ",
    scope: "input",
    cli: "readrate",
    parameter: { type: "float", name: "speed" },
  }),
  createOptionWithParameter({
    name: "native read rate",
    description:
      "Read input at native frame rate. This is equivalent to setting -readrate 1.",
    scope: "input",
    cli: "re",
    parameter: { type: "url", name: "input" },
  }),
  createOption({
    name: "vsync",
    scope: "global",
    cli: "vsync",
  }),
  createOptionWithParameter({
    name: "fps mode",
    description: "Set video sync method / framerate mode.",
    scope: "output",
    specifier: "per-stream",
    cli: "fps_mode",
    parameter: { type: "string", name: "parameter" },
  }),
  createOptionWithParameter({
    name: "frame drop threshold",
    description:
      "Frame drop threshold, which specifies how much behind video frames can be before they are dropped.",
    scope: "global", // ??
    cli: "frame_drop_threshold",
    parameter: { type: "number", name: "parameter" },
  }),
  createOptionWithParameter({
    name: "audio drift threshold",
    description:
      "Set the minimum difference between timestamps and audio data (in seconds) to trigger adding/dropping samples to make it match the timestamps.",
    scope: "global", // ??
    cli: "adrift_threshold",
    parameter: { type: "time", name: "time" },
  }),
  createOptionWithParameter({
    name: "audio pad",
    description:
      "Frame drop threshold, which specifies how much behind video frames can be before they are dropped.",
    scope: "output",
    specifier: "per-stream",
    cli: "apad",
    parameter: { type: "string", name: "parameters" },
  }),
  createOption({
    name: "copy timestamp",
    description:
      "Do not process input timestamps, but keep their values without trying to sanitize them.",
    scope: "global", // ??
    cli: "copyts",
  }),
  createOption({
    name: "start at zero",
    description:
      "When used with copyts, shift input timestamps so they start at zero.",
    scope: "global", // ??
    cli: "start_at_zero",
  }),
  createOptionWithParameter({
    name: "copy timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "global", // ??
    cli: "copytb",
    parameter: { type: "string", name: "mode" },
  }),
  createOptionWithParameter({
    name: "encoding timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "output",
    specifier: "per-stream",
    cli: "enc_time_base",
    parameter: { type: "float", name: "timebase" },
  }),
  createOption({
    name: "bit exact",
    description: "Enable bitexact mode for (de)muxer and (de/en)coder.",
    scope: "input-output",
    cli: "bitexact",
  }),
  createOption({
    name: "shortest",
    description: "Finish encoding when the shortest output stream ends.",
    scope: "output",
    cli: "shortest",
  }),
  // short dur
  // param? see doc
  createOptionWithParameter({
    name: "encoding timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "output",
    specifier: "per-stream",
    cli: "enc_time_base",
    parameter: { type: "float", name: "timebase" },
  }),
  createOptionWithParameter({
    name: "max duration of buffered frames",
    description: "controls the maximum duration of buffered frames in seconds.",
    scope: "output",
    cli: "shortest_buf_duration",
    parameter: { type: "time-duration", name: "threshold", default: "" }, // 10s
  }),
  createOptionWithParameter({
    name: "timestamp discontinuity delta threshold",
    description: "Timestamp discontinuity delta threshold.",
    cli: "dts_delta_threshold",
    parameter: { type: "number", name: "threshold" },
  }),
  createOptionWithParameter({
    name: "timestamp error delta threshold",
    description: "Timestamp error delta threshold.",
    cli: "dts_error_threshold",
    parameter: { type: "number", name: "seconds", default: "" }, // 30 hours
  }),
  createOptionWithParameter({
    name: "max mux delay",
    description: "Set the maximum demux-decode delay.",
    scope: "output",
    cli: "muxdelay",
    parameter: { type: "string", name: "seconds" },
  }),
  createOptionWithParameter({
    name: "initial mux delay",
    description: "Set the initial demux-decode delay.",
    scope: "output",
    cli: "muxpreload",
    parameter: { type: "string", name: "seconds" },
  }),
  createOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameter: { type: "complex", name: "output-stream-index:new-value" },
  }),
  createOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameter: { type: "complex", name: "output-stream-index:new-value" },
  }),
  createOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameter: { type: "complex", name: "output-stream-index:new-value" },
  }),
  createOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameter: { type: "complex", name: "output-stream-index:new-value" },
  }),
  createOptionWithParameter({
    name: "bitstream filter",
    description: "Set bitstream filters for matching streams.",
    scope: "output",
    specifier: "per-stream",
    cli: "bsf",
    parameter: { type: "string", name: "bitstream_filters " },
  }),
  createOptionWithParameter({
    name: "tag",
    description: "Force a tag/fourcc for matching streams",
    scope: "input-output",
    specifier: "per-stream",
    cli: "tag",
    parameter: { type: "string", name: "codec_tag " },
  }),
  createOptionWithParameter({
    name: "timecode",
    description:
      "Specify Timecode for writing. SEP is ’:’ for non drop timecode and ’;’ (or ’.’) for drop.",
    cli: "timecode",
    parameter: { type: "string", name: "hh:mm:ssSEPff " },
  }),
  createOptionWithParameter({
    name: "complex filter",
    description: "Define a complex filtergraph.",
    scope: "global",
    cli: "filter_complex",
    parameter: { type: "string", name: "filtergraph" },
  }),
  createOptionWithParameter({
    name: "complex filter threads",
    description:
      "Defines how many threads are used to process a filter_complex graph.",
    scope: "global",
    cli: "filter_complex_threads",
    parameter: { type: "integer", name: "nb_threads" },
  }),
  createOptionWithParameter({
    name: "lavfi complex filter",
    description: "Define a complex filtergraph. Equivalent to -filter_complex.",
    scope: "global",
    cli: "lavfi",
    parameter: { type: "string", name: "filtergraph" },
  }),
  createOptionWithParameter({
    name: "complex filter script",
    description:
      "complex filter but argument is the name of the file from which a complex filtergraph description is to be read.",
    scope: "global",
    cli: "filter_complex_script",
    parameter: { type: "url", name: "filename" },
  }),
  createOption({
    name: "accurate seek",
    description:
      "This option enables or disables accurate seeking in input files with the -ss option.",
    scope: "input",
    cli: "accurate_seek",
  }),
  createOption({
    name: "seek timestamp",
    description:
      "This option enables or disables seeking by timestamp in input files with the -ss option.",
    scope: "input",
    cli: "seek_timestamp",
  }),
  createOptionWithParameter({
    name: "thread queue size",
    description:
      "For input, this option sets the maximum number of queued packets when reading from the file or device.",
    scope: "input-output",
    cli: "thread_queue_size",
    parameter: { type: "integer", name: "size" },
  }),
  createOptionWithParameter({
    name: "print sdp",
    description: "Print sdp information for an output stream to file.",
    scope: "global",
    cli: "sdp_file",
    parameter: { type: "url", name: "file" },
  }),
  createOptionWithParameter({
    name: "discard",
    description: "Allows discarding specific streams or frames from streams.",
    scope: "input",
    specifier: "per-stream",
    cli: "discard",
    parameter: { type: "string", name: "discard" },
    // per stream ??
  }),
  createOptionWithParameter({
    name: "abort on",
    description: "Stop and abort on various conditions.",
    scope: "global",
    cli: "abort_on",
    parameter: { type: "string", name: "flags" },
  }),
  createOptionWithParameter({
    name: "max error rate",
    description:
      "Set fraction of decoding frame failures across all inputs which when crossed ffmpeg will return exit code 69.",
    scope: "global",
    cli: "max_error_rate",
    parameter: { type: "string", name: "rate" },
  }),
  createOption({
    name: "exit on error",
    description: "Stop and exit on error.",
    scope: "global",
    cli: "xerror",
  }),
  createOptionWithParameter({
    name: "max muxing queue size",
    description:
      "When transcoding audio and/or video streams, ffmpeg will not begin writing into the output until it has one packet for each such stream.",
    scope: "output",
    specifier: "per-stream",
    cli: "max_muxing_queue_size",
    parameter: { type: "number", name: "packets" },
  }),
  createOptionWithParameter({
    name: "muxing queue data threshole",
    description:
      "This is a minimum threshold until which the muxing queue size is not taken into account.",
    scope: "output",
    specifier: "per-stream",
    cli: "muxing_queue_data_threshold",
    parameter: { type: "integer", name: "bytes" },
  }),
  createOption({
    name: "auto conversion filters",
    description:
      "Enable automatically inserting format conversion filters in all filter graphs, including those defined by -vf, -af, -filter_complex and -lavfi.",
    scope: "global",
    cli: "auto_conversion_filters",
  }),
  createOptionWithParameter({
    name: "bits per raw sample",
    description:
      "Declare the number of bits per raw sample in the given output stream to be value.",
    scope: "output",
    specifier: "per-stream",
    cli: "bits_per_raw_sample",
    parameter: { type: "number", name: "value" },
  }),
];
/*
  CreateOptionWithParameter({
    name: "",
    description: "",
    optionScope: "global",
    cliOption: "",
    parameter: {type: "string",
    name: "",
  }),




 */
