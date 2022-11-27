import {
  ChannelLayout,
  ChannelLayoutMap,
  // Channel,
  // ChannelUnion,
  ChannelLayoutUnion,
  ComplexFilter,
  DefaultChannelOutputName,
  FFmpeg,
} from "../../mod.ts";

export class ChannelSplitFilter extends ComplexFilter {
  #layout?: ChannelLayoutUnion;
  // #channel?: Channel | ChannelUnion;
  // #channels?: Channel[] | ChannelUnion[];
  // options
  #splitAllIntoOutput: boolean = false;
  constructor() {
    super("channelsplit");
  }

  // setChannel(channel: Channel | ChannelUnion): this {
  //   this.#channel = channel;
  //   return this;
  // }

  setLayout(channelLayout: ChannelLayoutUnion | ChannelLayout): this {
    if (this.#layout) throw Error("layout already defined");
    this.#layout = channelLayout;
    return this;
  }

  audioOnly(): this {
    this.actions.push((ffmpeg: FFmpeg) => ffmpeg.noVideo().noSubtitles());
    return this;
  }

  splitAllChannelsIntoOutputs(
    channelLayout?: ChannelLayoutUnion | ChannelLayout,
  ): this {
    if (channelLayout && this.#layout) throw Error("layout already defined");
    if (!channelLayout && !this.#layout) throw Error("need layout");
    if (channelLayout) this.#layout = channelLayout;
    this.#splitAllIntoOutput = true;
    return this;
  }

  // set the filter string and output map
  buildFilter() {
    let filterString = this.filter;
    if (this.#layout) {
      filterString += "=channel_layout=" + this.#layout;
      if (this.#splitAllIntoOutput) {
        const layout = ChannelLayoutMap[this.#layout];
        filterString += `[${layout.join("\]\[")}]`;
        //filterString += `[${layout.join("][")}]`;
        this.mappedOutputs = layout.map((channel) => {
          return {
            identifier: `[${channel}]`,
            filename: DefaultChannelOutputName[channel],
          };
        });
      }
      // else if (this.#channels)
      //   filterString += `:channels=` + this.#channels.map(channel => `${channel}[${channel}]`)
    }

    this.filterStr = `${filterString}`;
    // this.filterStr = `"\[0:a:0\]${filterString}"`;
    return this;
  }

  // this put into the base class causes an error
  // probably because "this" is returning complex filter not channel-split
  // generic typing of some sort may alleviate (return this as T somehow)
  setMappedOutputFileExt(fileExt: string): this {
    if (!fileExt) throw Error("file ext must be specified");
    this.fileExt = fileExt;
    return this;
  }
}
