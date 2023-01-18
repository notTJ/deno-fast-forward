import { InputOutputOptions } from "../input-output-options.ts";
import { OptionsBuilder, OptionsBuilderType } from "./options-builder.ts";

export class InputOutputOptionsBuilder<T extends InputOutputOptions>
  extends OptionsBuilder<InputOutputOptions> {
  override options: InputOutputOptions = {};
  override type: OptionsBuilderType = "input-output";
  constructor() {
    super();
    throw new Error("Not implemented");
  }

  // main
  f(value: string): this {
    this.options.f = value;
    return this;
  }
  c(value: string): this {
    this.options.c = value;
    return this;
  }
  t(value: string): this {
    this.options.t = value;
    return this;
  }
  to(value: string): this {
    this.options.to = value;
    return this;
  }
  ss(value: string): this {
    this.options.ss = value;
    return this;
  }
  dn(enable: boolean): this {
    this.options.dn = enable;
    return this;
  }
  // Audio
  ar(value: string): this {
    this.options.ar = value;
    return this;
  }
  ac(value: string): this {
    this.options.ac = value;
    return this;
  }
  an(enable: boolean): this {
    this.options.an = enable;
    return this;
  }
  acodec(value: string): this {
    this.options.acodec = value;
    return this;
  }
  // Video
  framerate(value: string): this {
    this.options.framerate = value;
    return this;
  }
  s(value: string): this {
    this.options.s = value;
    return this;
  } // frame size
  vn(value: string): this {
    this.options.vn = value;
    return this;
  }
  // Subtitle
  scodec(value: string): this {
    this.options.scodec = value;
    return this;
  }
  sn(value: string): this {
    this.options.sn = value;
    return this;
  } // ?
  // advanced
  bitexact(enable: boolean): this {
    this.options.bitexact = enable;
    return this;
  }
  tag(value: string): this {
    this.options.tag = value;
    return this;
  }
  thread_queue_size(size: number): this {
    this.options.thread_queue_size = size;
    return this;
  }
}
