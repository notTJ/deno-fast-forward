import { MainOptions } from "./main-options.ts";
import { GenericOptions } from "./generic-options.ts";
import { VideoOptions } from "./video-options.ts";
import { AudioOptions } from "./audio-options.ts";
import { SubtitleOptions } from "./subtitle-options.ts";
import { AdvancedOptions } from "./advanced-options.ts";
import { Option } from "./option.ts";

function createOptionsMap() {
  const map = new Map<string, Option>();
  GenericOptions
    .concat(MainOptions)
    .concat(VideoOptions)
    .concat(AudioOptions)
    .concat(SubtitleOptions)
    .concat(AdvancedOptions)
    .forEach((o) => map.set(o.cli, o));
  return map;
}
export const OptionsMap = createOptionsMap();
