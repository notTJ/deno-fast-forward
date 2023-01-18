import { GenericOptions } from "../generic-options.ts";
import { OptionsBuilder, OptionsBuilderType } from "./options-builder.ts";

export class GenericOptionsBuilder extends OptionsBuilder<GenericOptions> {
  override options: Partial<GenericOptions> = {};
  override type: OptionsBuilderType = "generic";
  private assignValue(optionName: keyof GenericOptions, value: any) {
    this.options[optionName] = value;
  }
  license(enable: boolean = true): this {
    this.assignValue("L", enable);
    return this;
  }
  help(enable: boolean = true): this {
    this.assignValue("help", enable);
    return this;
  }
  version(enable: boolean = true): this {
    this.assignValue("version", enable);
    return this;
  }
  buildconf(enable: boolean = true): this {
    this.assignValue("buildconf", enable);
    return this;
  }
  format(format: string): this {
    this.assignValue("format", format);
    return this;
  }
  demuxers(enable: boolean = true): this {
    this.assignValue("demuxers", enable);
    return this;
  }
  muxers(enable: boolean = true): this {
    this.assignValue("muxers", enable);
    return this;
  }
  devices(enable: boolean = true): this {
    this.assignValue("devices", enable);
    return this;
  }
  codecs(enable: boolean = true): this {
    this.assignValue("codecs", enable);
    return this;
  }
  decoders(enable: boolean = true): this {
    this.assignValue("decoders", enable);
    return this;
  }
  encoders(enable: boolean = true): this {
    this.assignValue("encoders", enable);
    return this;
  }
  bsfs(enable: boolean = true): this {
    this.assignValue("bsfs", enable);
    return this;
  }
  filters(enable: boolean = true): this {
    this.assignValue("filters", enable);
    return this;
  }
  protocols(enable: boolean = true): this {
    this.assignValue("protocols", enable);
    return this;
  }
  pix_fmts(enable: boolean = true): this {
    this.assignValue("pix_fmts", enable);
    return this;
  }
  sample_fmts(enable: boolean = true): this {
    this.assignValue("sample_fmts", enable);
    return this;
  }
  layouts(enable: boolean = true): this {
    this.assignValue("layouts", enable);
    return this;
  }
  dispositions(enable: boolean = true): this {
    this.assignValue("dispositions", enable);
    return this;
  }
  colors(enable: boolean = true): this {
    this.assignValue("colors", enable);
    return this;
  }
  sources(enable: boolean = true): this {
    this.assignValue("sources", enable);
    return this;
  }
  sinks(enable: boolean = true): this {
    this.assignValue("sinks", enable);
    return this;
  }
  loglevel(loglevel: string): this {
    this.assignValue("loglevel", loglevel);
    return this;
  }
  report(enable: boolean = true): this {
    this.assignValue("report", enable);
    return this;
  }
  level(enable: boolean = true): this {
    this.assignValue("level", enable);
    return this;
  }
  cpuflags(cpuflags: string): this {
    this.assignValue("cpuflags", cpuflags);
    return this;
  }
  cpucount(cpucount: number): this {
    this.assignValue("cpucount", cpucount);
    return this;
  }
  max_alloc(max_alloc: number): this {
    this.assignValue("max_alloc", max_alloc);
    return this;
  }
}
