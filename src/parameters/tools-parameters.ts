import { ToolsGenericOptions } from "../options/tools-generic-options.ts";
import { ParameterValidator } from "./parameter-validator.ts";

export class ToolsParameters {
  #fftools_options: Partial<ToolsGenericOptions> = {};
  #parameterValidator: ParameterValidator = new ParameterValidator();
  private assignValue(optionName: keyof ToolsGenericOptions, value: any) {
    this.#parameterValidator.validateParameter(optionName, value);
    this.#fftools_options[optionName] = value;
  }
  license(enable: boolean = true) {
    this.assignValue("L", enable);
  }

  help(enable: boolean = true) {
    this.assignValue("help", enable); //help = enable;
  }

  version(enable: boolean = true) {
    this.assignValue("version", enable); //version = enable;
  }
  buildconf(enable: boolean = true) {
    this.assignValue("buildconf", enable); //buildconf = enable;
  }
  format(format: string) {
    this.assignValue("format", format); //format = format;
  }
  demuxers(enable: boolean = true) {
    this.assignValue("demuxers", enable); //demuxers = enable;
  }
  muxers(enable: boolean = true) {
    this.assignValue("muxers", enable); //muxers = enable;
  }
  devices(enable: boolean = true) {
    this.assignValue("devices", enable); //devices = enable;
  }
  codecs(enable: boolean = true) {
    this.assignValue("codecs", enable); //codecs = enable;
  }
  decoders(enable: boolean = true) {
    this.assignValue("decoders", enable); // = enable;
  }
  encoders(enable: boolean = true) {
    this.assignValue("encoders", enable); // = enable;
  }
  bsfs(enable: boolean = true) {
    this.assignValue("bsfs", enable); // = enable;
  }
  filters(enable: boolean = true) {
    this.assignValue("filters", enable); // = enable;
  }
  protocols(enable: boolean = true) {
    this.assignValue("protocols", enable); //protocols = enable;
  }
  pix_fmts(enable: boolean = true) {
    this.assignValue("pix_fmts", enable); // = enable;
  }
  sample_fmts(enable: boolean = true) {
    this.assignValue("sample_fmts", enable); // = enable;
  }
  layouts(enable: boolean = true) {
    this.assignValue("layouts", enable); // = enable;
  }
  dispositions(enable: boolean = true) {
    this.assignValue("dispositions", enable); // = enable;
  }
  colors(enable: boolean = true) {
    this.assignValue("colors", enable); // = enable;
  }
  sources(enable: boolean = true) {
    this.assignValue("sources", enable); // = enable;
  }
  sinks(enable: boolean = true) {
    this.assignValue("sinks", enable); // = enable;
  }
  loglevel(loglevel: string) {
    this.assignValue("loglevel", loglevel); // = loglevel;
  }
  report(enable: boolean = true) {
    this.assignValue("report", enable); // = enable;
  }
  level(enable: boolean = true) {
    this.assignValue("level", enable); // = enable;
  }
  cpuflags(cpuflags: string) {
    this.assignValue("cpuflags", cpuflags); // = cpuflags;
  }
  cpucount(cpucount: number) {
    this.assignValue("cpucount", cpucount); // = cpucount;
  }
  max_alloc(max_alloc: number) {
    this.assignValue("max_alloc", max_alloc); // = max_alloc;
  }
}
