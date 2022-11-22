import { FFmpeg } from "../mod.ts";
export type FFmpegAction = (ffmpeg: FFmpeg) => FFmpeg;

export abstract class ComplexFilter {
  protected readonly filter: string;
  protected readonly actions: FFmpegAction[] = [];

  protected constructor(filter: string) {
    this.filter = filter;
  }

  apply(ffmpeg: FFmpeg): FFmpeg {
    this.actions.forEach((action) => ffmpeg = action(ffmpeg));
    return ffmpeg;
  }

  abstract buildFilterString(): string;

  // getStreamSelection(index: number, type: 'audio' | 'video') {
  //   // first audio stream: [0:a]
  //   return `[${index}}:${type === 'audio' ? 'a' : 'v'}]`;
  // }
}
