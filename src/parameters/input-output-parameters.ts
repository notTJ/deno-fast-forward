import { GlobalParameters } from "./global-parameters.ts";
import { InputOutputOptions } from "../options/input-output-options.ts";

export class InputOutputParameters extends GlobalParameters {
  #ffmpeg_input_output_options: Partial<InputOutputOptions> = {};
  // main
  f(value: string) {
    this.#ffmpeg_input_output_options.f = value;
  }
  c(value: string) {
    this.#ffmpeg_input_output_options.c = value;
  }
  t(value: string) {
    this.#ffmpeg_input_output_options.t = value;
  }
  to(value: string) {
    this.#ffmpeg_input_output_options.to = value;
  }
  ss(value: string) {
    this.#ffmpeg_input_output_options.ss = value;
  }
  dn(enable: boolean) {
    this.#ffmpeg_input_output_options.dn = enable;
  }
  // Audio
  ar(value: string) {
    this.#ffmpeg_input_output_options.ar = value;
  }
  ac(value: string) {
    this.#ffmpeg_input_output_options.ac = value;
  }
  an(enable: boolean) {
    this.#ffmpeg_input_output_options.an = enable;
  }
  acodec(value: string) {
    this.#ffmpeg_input_output_options.acodec = value;
  }
  // Video
  framerate(value: string) {
    this.#ffmpeg_input_output_options.framerate = value;
  }
  s(value: string) {
    this.#ffmpeg_input_output_options.s = value;
  } // frame size
  vn(value: string) {
    this.#ffmpeg_input_output_options.vn = value;
  }
  // Subtitle
  scodec(value: string) {
    this.#ffmpeg_input_output_options.scodec = value;
  }
  sn(value: string) {
    this.#ffmpeg_input_output_options.sn = value;
  } // ?
  // advanced
  bitexact(enable: boolean) {
    this.#ffmpeg_input_output_options.bitexact = enable;
  }
  tag(value: string) {
    this.#ffmpeg_input_output_options.tag = value;
  }
  thread_queue_size(size: number) {
    this.#ffmpeg_input_output_options.thread_queue_size = size;
  }
}
