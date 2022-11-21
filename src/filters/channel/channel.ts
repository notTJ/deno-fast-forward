export const enum Channel {
  frontLeft = "FL",
  frontRight = "FR",
  frontCenter = "FC",
  lowFrequency = "LFE",
  backLeft = "BL",
  backRight = "BR",
  frontLeftOfCenter = "FLC",
  frontRightOfCenter = "FRC",
  backCenter = "BC",
  sideLeft = "SL",
  sideRight = "SR",
  topCenter = "TC",
  topFrontLeft = "TFL",
  topFrontCenter = "TFC",
  topFrontRight = "TFR",
  topBackLeft = "TBL",
  topBackCenter = "TBC",
  topBackRight = "TBR",
  downmixLeft = "DL",
  downmixRight = "DR",
  wideLeft = "WL",
  wideRight = "WR",
  surroundDirectLeft = "SDL",
  surroundDirectRight = "SDR",
  lowFrequency2 = "LFE2",
  topSideLeft = "TSL",
  topSideRight = "TSR",
  bottomFrontCenter = "BFC",
  bottomFrontLeft = "BFL",
  bottomFrontRight = "BFR",
}

export type ChannelUnion = `${Channel}`;

// type ToUnion<T extends Record<string, string>> = keyof {
//   [Prop in keyof T as `${T[Prop]}`]: Prop
// }
// export type ChannelUnion = ToUnion<typeof Channel>
