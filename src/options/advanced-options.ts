import { CreateOption, CreateOptionWithParameter } from "./option.ts";

// https://ffmpeg.org/ffmpeg.html#Advanced-options
export const AdvancedOptions = [
  // -map is complicated, skip for now
  CreateOptionWithParameter({
    name: "map",
    description: "Create one or more streams in the output file.",
    scope: "output",
    cli: "map",
    parameterType: "complex",
    parameterName: "input_file_id",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "ignore unknown",
    description:
      "Allow input streams with unknown type to be copied instead of failing if copying such streams is attempted. ",
    cli: "ignore_unknown",
  }),
  CreateOption({
    name: "copy unknown",
    description:
      "Ignore input streams with unknown type instead of failing if copying such streams is attempted.",
    cli: "copy_unknown",
  }),
  // map-channel is deprecated
  CreateOptionWithParameter({
    name: "map metadata",
    description:
      "Set metadata information of the next output file from infile.",
    scope: "output",
    cli: "map_metadata",
    parameterType: "complex",
    parameterName: "infile",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "map chapters",
    description:
      "Set metadata information of the next output file from infile.",
    scope: "output",
    cli: "map_chapters",
    parameterType: "integer",
    parameterName: "input_file_index",
  }),
  CreateOption({
    name: "benchmark",
    description: "Show benchmarking information at the end of an encode.",
    scope: "global",
    cli: "benchmark",
  }),
  CreateOption({
    name: "benchmark all",
    description: "Show benchmarking information during the encode.",
    scope: "global",
    cli: "benchmark_all",
  }),
  CreateOptionWithParameter({
    name: "time limit",
    description:
      "Exit after ffmpeg has been running for duration seconds in CPU user time.",
    scope: "global",
    cli: "timelimit",
    parameterType: "time-duration",
    parameterName: "duration",
  }),
  CreateOption({
    name: "dump",
    description: "Dump each input packet to stderr.",
    scope: "global",
    cli: "dump",
  }),
  CreateOption({
    name: "hex",
    description: "When dumping packets, also dump the payload.",
    scope: "global",
    cli: "hex",
  }),
  CreateOptionWithParameter({
    name: "read rate",
    description: "Limit input read speed. ",
    scope: "input",
    cli: "readrate",
    parameterType: "float",
    parameterName: "speed",
  }),
  CreateOptionWithParameter({
    name: "native read rate",
    description:
      "Read input at native frame rate. This is equivalent to setting -readrate 1.",
    scope: "input",
    cli: "re",
    parameterType: "url",
    parameterName: "input",
  }),
  CreateOption({
    name: "vsync",
    scope: "global",
    cli: "vsync",
  }),
  CreateOptionWithParameter({
    name: "fps mode",
    description: "Set video sync method / framerate mode.",
    scope: "output",
    cli: "fps_mode",
    parameterType: "string",
    parameterName: "parameter",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "frame drop threshold",
    description:
      "Frame drop threshold, which specifies how much behind video frames can be before they are dropped.",
    scope: "global", // ??
    cli: "frame_drop_threshold",
    parameterType: "number",
    parameterName: "parameter",
  }),
  CreateOptionWithParameter({
    name: "audio drift threshold",
    description:
      "Set the minimum difference between timestamps and audio data (in seconds) to trigger adding/dropping samples to make it match the timestamps.",
    scope: "global", // ??
    cli: "adrift_threshold",
    parameterType: "time",
    parameterName: "time",
  }),
  CreateOptionWithParameter({
    name: "audio pad",
    description:
      "Frame drop threshold, which specifies how much behind video frames can be before they are dropped.",
    scope: "output",
    cli: "apad",
    parameterType: "string",
    parameterName: "parameters",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "copy timestamp",
    description:
      "Do not process input timestamps, but keep their values without trying to sanitize them.",
    scope: "global", // ??
    cli: "copyts",
  }),
  CreateOption({
    name: "start at zero",
    description:
      "When used with copyts, shift input timestamps so they start at zero.",
    scope: "global", // ??
    cli: "start_at_zero",
  }),
  CreateOptionWithParameter({
    name: "copy timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "global", // ??
    cli: "copytb",
    parameterType: "string",
    parameterName: "mode",
  }),
  CreateOptionWithParameter({
    name: "encoding timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "output",
    cli: "enc_time_base",
    parameterType: "float",
    parameterName: "timebase",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "bit exact",
    description: "Enable bitexact mode for (de)muxer and (de/en)coder.",
    scope: "input-output",
    cli: "bitexact",
  }),
  CreateOption({
    name: "shortest",
    description: "Finish encoding when the shortest output stream ends.",
    scope: "output",
    cli: "shortest",
  }),
  // short dur
  // param? see doc
  CreateOptionWithParameter({
    name: "encoding timebase",
    description: "Specify how to set the encoder timebase when stream copying.",
    scope: "output",
    cli: "enc_time_base",
    parameterType: "float",
    parameterName: "timebase",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "max duration of buffered frames",
    description: "controls the maximum duration of buffered frames in seconds.",
    scope: "output",
    cli: "shortest_buf_duration",
    parameterType: "time-duration",
    parameterName: "threshold",
    default: "", // 10s
  }),
  CreateOptionWithParameter({
    name: "timestamp discontinuity delta threshold",
    description: "Timestamp discontinuity delta threshold.",
    cli: "dts_delta_threshold",
    parameterType: "number",
    parameterName: "threshold",
  }),
  CreateOptionWithParameter({
    name: "timestamp error delta threshold",
    description: "Timestamp error delta threshold.",
    cli: "dts_error_threshold",
    parameterType: "number",
    parameterName: "seconds",
    default: "", // 30 hours
  }),
  CreateOptionWithParameter({
    name: "max mux delay",
    description: "Set the maximum demux-decode delay.",
    scope: "output",
    cli: "muxdelay",
    parameterType: "string",
    parameterName: "seconds",
  }),
  CreateOptionWithParameter({
    name: "initial mux delay",
    description: "Set the initial demux-decode delay.",
    scope: "output",
    cli: "muxpreload",
    parameterType: "string",
    parameterName: "seconds",
  }),
  CreateOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameterType: "complex",
    parameterName: "output-stream-index:new-value",
  }),
  CreateOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameterType: "complex",
    parameterName: "output-stream-index:new-value",
  }),
  CreateOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameterType: "complex",
    parameterName: "output-stream-index:new-value",
  }),
  CreateOptionWithParameter({
    name: "stream id",
    description: "Assign a new stream-id value to an output stream.",
    scope: "output",
    cli: "streamid",
    parameterType: "complex",
    parameterName: "output-stream-index:new-value",
  }),
  CreateOptionWithParameter({
    name: "bitstream filter",
    description: "Set bitstream filters for matching streams.",
    scope: "output",
    cli: "bsf",
    parameterType: "string",
    parameterName: "bitstream_filters ",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "tag",
    description: "Force a tag/fourcc for matching streams",
    scope: "input-output",
    cli: "tag",
    parameterType: "string",
    parameterName: "codec_tag ",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "timecode",
    description:
      "Specify Timecode for writing. SEP is ’:’ for non drop timecode and ’;’ (or ’.’) for drop.",
    cli: "timecode",
    parameterType: "string",
    parameterName: "hh:mm:ssSEPff ",
  }),
  CreateOptionWithParameter({
    name: "complex filter",
    description: "Define a complex filtergraph.",
    scope: "global",
    cli: "filter_complex",
    parameterType: "string",
    parameterName: "filtergraph",
  }),
  CreateOptionWithParameter({
    name: "complex filter threads",
    description:
      "Defines how many threads are used to process a filter_complex graph.",
    scope: "global",
    cli: "filter_complex_threads",
    parameterType: "integer",
    parameterName: "nb_threads",
  }),
  CreateOptionWithParameter({
    name: "lavfi complex filter",
    description: "Define a complex filtergraph. Equivalent to -filter_complex.",
    scope: "global",
    cli: "lavfi",
    parameterType: "string",
    parameterName: "filtergraph",
  }),
  CreateOptionWithParameter({
    name: "complex filter script",
    description:
      "complex filter but argument is the name of the file from which a complex filtergraph description is to be read.",
    scope: "global",
    cli: "filter_complex_script",
    parameterType: "url",
    parameterName: "filename",
  }),
  CreateOption({
    name: "accurate seek",
    description:
      "This option enables or disables accurate seeking in input files with the -ss option.",
    scope: "input",
    cli: "accurate_seek",
  }),
  CreateOption({
    name: "seek timestamp",
    description:
      "This option enables or disables seeking by timestamp in input files with the -ss option.",
    scope: "input",
    cli: "seek_timestamp",
  }),
  CreateOptionWithParameter({
    name: "thread queue size",
    description:
      "For input, this option sets the maximum number of queued packets when reading from the file or device.",
    scope: "input-output",
    cli: "thread_queue_size",
    parameterType: "integer",
    parameterName: "size",
  }),
  CreateOptionWithParameter({
    name: "print sdp",
    description: "Print sdp information for an output stream to file.",
    scope: "global",
    cli: "sdp_file",
    parameterType: "url",
    parameterName: "file",
  }),
  CreateOptionWithParameter({
    name: "discard",
    description: "Allows discarding specific streams or frames from streams.",
    scope: "input",
    cli: "discard",
    parameterType: "string",
    parameterName: "discard",
    // per stream ??
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "abort on",
    description: "Stop and abort on various conditions.",
    scope: "global",
    cli: "abort_on",
    parameterType: "string",
    parameterName: "flags",
  }),
  CreateOptionWithParameter({
    name: "max error rate",
    description:
      "Set fraction of decoding frame failures across all inputs which when crossed ffmpeg will return exit code 69.",
    scope: "global",
    cli: "max_error_rate",
    parameterType: "string",
    parameterName: "rate",
  }),
  CreateOption({
    name: "exit on error",
    description: "Stop and exit on error.",
    scope: "global",
    cli: "xerror",
  }),
  CreateOptionWithParameter({
    name: "max muxing queue size",
    description:
      "When transcoding audio and/or video streams, ffmpeg will not begin writing into the output until it has one packet for each such stream.",
    scope: "output",
    cli: "max_muxing_queue_size",
    parameterType: "number",
    parameterName: "packets",
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "muxing queue data threshole",
    description:
      "This is a minimum threshold until which the muxing queue size is not taken into account.",
    scope: "output",
    cli: "muxing_queue_data_threshold",
    parameterType: "integer",
    parameterName: "bytes",
    specifier: "per-stream",
  }),
  CreateOption({
    name: "auto conversion filters",
    description:
      "Enable automatically inserting format conversion filters in all filter graphs, including those defined by -vf, -af, -filter_complex and -lavfi.",
    scope: "global",
    cli: "auto_conversion_filters",
  }),
  CreateOptionWithParameter({
    name: "bits per raw sample",
    description:
      "Declare the number of bits per raw sample in the given output stream to be value.",
    scope: "output",
    cli: "bits_per_raw_sample",
    parameterType: "number",
    parameterName: "value",
    specifier: "per-stream",
  }),
];
/*
  CreateOptionWithParameter({
    name: "",
    description: "",
    optionScope: "global",
    cliOption: "",
    parameterType: "string",
    parameterName: "",
  }),




 */
