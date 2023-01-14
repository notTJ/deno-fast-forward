import { CreateOption, CreateOptionWithParameter } from "./option.ts";

// https://ffmpeg.org/ffmpeg.html#Main-options
export const MainOptions = [
  // url validation
  CreateOptionWithParameter({
    name: "format",
    description: "Force input or output file format.",
    scope: "input-output",
    cli: "f",
    parameter: {
      type: "string",
      name: "fmt",
    },
  }),
  CreateOptionWithParameter({
    name: "input",
    description: "specifies input url",
    scope: "input",
    cli: "i",
    parameter: { type: "url", name: "url" },
  }),
  CreateOption({
    name: "yes",
    description: "Overwrite output files without asking.",
    scope: "global",
    cli: "y",
  }),
  CreateOption({
    name: "no",
    description:
      "Do not overwrite output files, and exit immediately if a specified output file already exists.",
    scope: "global",
    cli: "n",
  }),
  CreateOptionWithParameter({
    name: "stream loop",
    description:
      "Set number of times input stream shall be looped. Loop 0 means no loop, loop -1 means infinite loop.",
    scope: "input",
    cli: "stream_loop",
    parameter: { type: "number", name: "loops" },
  }),
  CreateOption({
    name: "recast media",
    description:
      "Allow forcing a decoder of a different media type than the one detected or designated by the demuxer.",
    scope: "global",
    cli: "recast_media",
  }),
  CreateOptionWithParameter({
    name: "codec",
    description:
      "Select an encoder (when used before an output file) or a decoder (when used before an input file) for one or more streams.",
    scope: "input-output",
    cli: "c", // codec
    parameter: {
      type: "string",
      name: "codec",
    },
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "duration",
    description:
      "input: limit the duration of data read from the input file. output: stop writing the output after its duration reaches duration.",
    scope: "input-output",
    cli: "t",
    parameter: { type: "time-duration", name: "position" },
  }),
  CreateOptionWithParameter({
    name: "to position",
    description: "Stop writing the output or reading the input at position.",
    scope: "input-output",
    cli: "to",
    parameter: { type: "time-duration", name: "position" },
  }),
  CreateOptionWithParameter({
    name: "file size limit",
    description: "Set the file size limit, expressed in bytes.",
    scope: "output",
    cli: "fs",
    parameter: { type: "integer", name: "limit_size" },
  }),
  CreateOptionWithParameter({
    name: "seek position",
    description:
      "input: seeks in this input file to position. output: decodes but discards input until the timestamps reach position.",
    scope: "input-output",
    cli: "ss",
    parameter: { type: "time-duration", name: "position" },
  }),
  CreateOptionWithParameter({
    name: "seek position (end of file)",
    description:
      'Like the -ss option but relative to the "end of file". That is negative values are earlier in the file, 0 is at EOF.',
    scope: "input",
    cli: "sseof",
    parameter: { type: "time-duration", name: "position" },
  }),
  CreateOptionWithParameter({
    name: "isync",
    description: "Assign an input as a sync source.",
    scope: "input",
    cli: "isync",
    parameter: { type: "number", name: "input_index", default: -1 },
  }),
  CreateOptionWithParameter({
    name: "input time offset",
    description: "Set the input time offset.",
    scope: "input",
    cli: "itsoffset",
    parameter: { type: "time-duration", name: "offset" },
  }),
  CreateOptionWithParameter({
    name: "input timestamp rescale",
    description: "Rescale input timestamps.",
    scope: "input",
    cli: "itsscale",
    parameter: { type: "float", name: "inputTimeOffset" },
    specifier: "per-stream",
  }),
  CreateOptionWithParameter({
    name: "timestamp",
    description: "Set the recording timestamp in the container.",
    scope: "output",
    cli: "timestamp",
    parameter: { type: "date", name: "date" },
  }),
  CreateOption({
    name: "metadata",
    description: "Set a metadata key/value pair.",
    scope: "output",
    specifier: "per-metadata",
    cli: "metadata",
  }),
  CreateOptionWithParameter({
    name: "disposition",
    description: "Sets the disposition for a stream.",
    scope: "output",
    specifier: "per-stream",
    cli: "disposition",
    parameter: { type: "string", name: "value" },
  }),
  // complex parameter structure
  CreateOptionWithParameter({
    name: "program",
    description:
      "Creates a program with the specified title, program_num and adds the specified stream(s) to it.",
    scope: "output",
    cli: "program",
    parameter: { type: "complex", name: "program-info" },
  }),
  CreateOptionWithParameter({
    name: "target",
    description: "Specify target file type.",
    scope: "output",
    cli: "target",
    parameter: { type: "string", name: "target-type" },
  }),
  CreateOption({
    name: "no data-streams",
    description:
      "input: blocks all data streams of a file from being filtered or being automatically selected or mapped for any output. output: disables data recording i.e. automatic selection or mapping of any data stream.",
    scope: "input-output",
    cli: "dn",
  }),
  CreateOptionWithParameter({
    name: "framecount",
    description: "Stop writing to the stream after framecount frames.",
    scope: "output",
    specifier: "per-stream",
    cli: "frames",
    parameter: { type: "number", name: "frames" },
  }),
  CreateOption({
    name: "fixed-scale",
    description: "Use fixed quality scale (VBR).",
    scope: "output",
    specifier: "per-stream",
    cli: "q", // ["q, qscale"],
  }),
  CreateOptionWithParameter({
    name: "filter",
    description:
      "Create the filtergraph specified by filtergraph and use it to filter the stream.",
    scope: "output",
    specifier: "per-stream",
    cli: "filter",
    parameter: { type: "string", name: "filtergraph" },
  }),
  CreateOptionWithParameter({
    name: "filter-script",
    description:
      "This option is similar to -filter, the only difference is that its argument is the name of the file from which a filtergraph description is to be read.",
    scope: "output",
    specifier: "per-stream",
    cli: "filter_script",
    parameter: { type: "url", name: "filename" },
  }),
  CreateOptionWithParameter({
    name: "reinit-filter",
    description:
      "This boolean option determines if the filtergraph(s) to which this stream is fed gets reinitialized when input frame parameters change mid-stream.",
    scope: "input",
    specifier: "per-stream",
    cli: "reinit_filter",
    parameter: { type: "integer", name: "integer" },
  }),
  CreateOptionWithParameter({
    name: "filter-threads",
    description:
      "Defines how many threads are used to process a filter pipeline.",
    scope: "global",
    cli: "filter",
    parameter: { type: "integer", name: "nb_threads" },
  }),
  CreateOptionWithParameter({
    name: "presets",
    description: "Specify the preset for matching stream(s).",
    scope: "output",
    specifier: "per-stream",
    cli: "pre",
    parameter: { type: "string", name: "preset_name" },
  }),
  CreateOption({
    name: "stats",
    description: "Print encoding progress/statistics.",
    cli: "stats",
    scope: "global",
  }),
  CreateOptionWithParameter({
    name: "stats-period",
    description:
      "Set period at which encoding progress/statistics are updated.",
    scope: "global",
    cli: "stats_period",
    parameter: {
      type: "time-duration",
      name: "time",
      default: "0.5", //0.5seconds
    },
  }),
  CreateOptionWithParameter({
    name: "progress",
    description: "Send program-friendly progress information to url.",
    scope: "global",
    cli: "progress",
    parameter: { type: "url", name: "url" },
  }),
  CreateOption({
    name: "enable-standard-input",
    description: "Enable interaction on standard input.",
    scope: "global", // ??
    cli: "stdin",
  }),
  CreateOption({
    name: "debug",
    description: "",
    scope: "global",
    cli: "debug_ts",
  }),

  CreateOptionWithParameter({
    name: "attach",
    description: "Add an attachment to the output file.",
    scope: "output",
    cli: "attach",
    parameter: { type: "url", name: "filename" },
  }),
  CreateOptionWithParameter({
    name: "dump-attachment",
    description:
      "Extract the matching attachment stream into a file named filename.",
    scope: "input",
    specifier: "per-stream",
    cli: "dump_attachment",
    parameter: { type: "url", name: "filename" },
  }),
];
