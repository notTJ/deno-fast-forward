import { assertInstanceOf } from "./_assertions.ts";
import { dirname, ensureDir, fromFileUrl } from "./dev_deps.ts";
import { GenericOptionDefinitions } from "../src/options/definitions/generic-option-definitions.ts";
import { Option } from "../src/options/option.ts";
import { MainOptionDefinitions } from "../src/options/definitions/main-option-definitions.ts";
import { AudioOptionDefinitions } from "../src/options/definitions/audio-option-definitions.ts";
import { SubtitleOptionDefinitions } from "../src/options/definitions/subtitle-option-definitions.ts";
import { AdvancedOptionDefinitions } from "../src/options/definitions/advanced-option-definitions.ts";

const rootDir: string = dirname(fromFileUrl(import.meta.url));
const inputPath = `${rootDir}/fixtures/sample.mp4`;

Deno.test({
  name: "generic options",
  async fn() {
    // const outputPath = `${rootDir}/.tmp/ffmpeg encode.mp4`;
    // await ensureDir(`${rootDir}/.tmp`);

    const genericOptions = GenericOptionDefinitions;
    const mainOptions = MainOptionDefinitions;
    const audioOptions = AudioOptionDefinitions;
    const subtitleOptions = SubtitleOptionDefinitions;
    const advancedOptions = AdvancedOptionDefinitions;
    // genericOptions.forEach(option => console.log(option.name))
    // mainOptions.forEach(option => console.log(option.name));
    audioOptions.forEach((option) => console.log(option.name));
    // subtitleOptions.forEach(option => console.log(option.name));
    advancedOptions.forEach((option) => console.log(option.name));
  },
});
