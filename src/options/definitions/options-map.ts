import { MainOptionDefinitions } from "./main-option-definitions.ts";
import { GenericOptionDefinitions } from "./generic-option-definitions.ts";
import { VideoOptionDefinitions } from "./video-option-definitions.ts";
import { AudioOptionDefinitions } from "./audio-option-definitions.ts";
import { SubtitleOptionDefinitions } from "./subtitle-option-definitions.ts";
import { AdvancedOptionDefinitions } from "./advanced-option-definitions.ts";
import { Option } from "../option.ts";

function createOptionsMap(): Map<string, Option> {
  const map = new Map<string, Option>();
  GenericOptionDefinitions
    .concat(MainOptionDefinitions)
    .concat(VideoOptionDefinitions)
    .concat(AudioOptionDefinitions)
    .concat(SubtitleOptionDefinitions)
    .concat(AdvancedOptionDefinitions)
    .forEach((o) => map.set(o.cli, o));
  return map;
}
export const OptionsMap = createOptionsMap();
