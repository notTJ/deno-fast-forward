import { FFmpeg } from "../mod.ts";
import { MappedOutput } from "./mapped-output.ts";
export type FFmpegAction = (ffmpeg: FFmpeg) => FFmpeg;

export abstract class ComplexFilter {
  protected readonly filter: string;
  protected readonly actions: FFmpegAction[] = [];
  protected filterStr?: string;
  protected mappedOutputs?: MappedOutput[];
  protected fileExt?: string;

  protected constructor(filter: string) {
    this.filter = filter;
  }

  apply(ffmpeg: FFmpeg): FFmpeg {
    if (!this.filterStr) throw Error("no filter string created");
    this.actions.forEach((action) => ffmpeg = action(ffmpeg));
    let ext: string = this.fileExt ? this.fileExt : ".ac3";

    const outputsWithFileExt = this.mappedOutputs!.map((output) => {
      output.filename = `${output.filename}${ext}`;
      return output;
    });

    ffmpeg.mappedOutputs(outputsWithFileExt);
    ffmpeg.encoding.complexFilter = this.filterStr;
    return ffmpeg;
  }

  abstract buildFilter(): this;

  // getStreamSelection(index: number, type: 'audio' | 'video') {
  //   // first audio stream: [0:a]
  //   return `[${index}}:${type === 'audio' ? 'a' : 'v'}]`;
  // }
}
