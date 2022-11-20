export const enum Channel {
  frontLeft = 'FL',
  frontRight = 'FR',
  frontCenter = 'FC',
  lowFrequency = 'LFE',
  backLeft = 'BL',
  backRight = 'BR',
  frontLeftOfCenter = 'FLC',
  frontRightOfCenter = 'FRC',
  backCenter = 'BC',
  sideLeft = 'SL',
  sideRight = 'SR',
  topCenter = 'TC',
  topFrontLeft = 'TFL',
  topFrontCenter = 'TFC',
  topFrontRight = 'TFR',
  topBackLeft = 'TBL',
  topBackCenter = 'TBC',
  topBackRight = 'TBR',
  downmixLeft = 'DL',
  downmixRight = 'DR',
  wideLeft = 'WL',
  wideRight = 'WR',
  surroundDirectLeft = 'SDL',
  surroundDirectRight = 'SDR',
  lowFrequency2 = 'LFE2',
  topSideLeft = 'TSL',
  topSideRight = 'TSR',
  bottomFrontCenter = 'BFC',
  bottomFrontLeft = 'BFL',
  bottomFrontRight = 'BFR',
}

export type ChannelUnion = `${Channel}`;

// type ToUnion<T extends Record<string, string>> = keyof {
//   [Prop in keyof T as `${T[Prop]}`]: Prop
// }
// export type ChannelUnion = ToUnion<typeof Channel>

export const enum Layout {
  'mono' = 'mono',
'stereo' = 'stereo',
'c2.1' = '2.1',
'c3.0' = '3.0',
'c3.0(back)' = '3.0(back)',
'4.0' = '4.0',
'quad' = 'quad',
'quad(side)' = 'quad(side)',
'c3.1' = '3.1',
'c5.0' = '5.0',
'5.0(side)' = '5.0(side)',
'c4.1' = '4.1',
'c5.1' = '5.1',
'5.1(side)' = '5.1(side)',
'6.0' = '6.0',
'6.0(front)' = '6.0(front)',
'hexagonal' = 'hexagonal' ,
'c6.1' = '6.1',
'6.1(back)' = '6.1(back)',
'6.1(front)' = '6.1(front)',
'7.0' =  '7.0',
'7.0(front)' = '7.0(front)',
'c7.1' =  '7.1',
'7.1(wide)' = '7.1(wide)',
'7.1(wide-side)' = '7.1(wide-side)',
'octagonal' = 'octagonal',
'hexadecagonal' = 'hexadecagonal',
'downmix' = 'downmix',
'c22.2' = '22.2',
}

export type ChannelLayout =
  | 'mono'
  | 'stereo'
  | '2.1'
  | '3.0'
  | '3.0(back)'
  | '4.0'
  | 'quad'
  | 'quad(side)'
  | '3.1'
  | '5.0'
  | '5.0(side)'
  | '4.1'
  | '5.1'
  | '5.1(side)'
  | '6.0'
  | '6.0(front)'
  | 'hexagonal'
  | '6.1'
  | '6.1(back)'
  | '6.1(front)'
  | '7.0'
  | '7.0(front)'
  | '7.1'
  | '7.1(wide)'
  | '7.1(wide-side)'
  | 'octagonal'
  | 'hexadecagonal'
  | 'downmix'
  | '22.2';
export const ChannelLayouts = {
  'mono': ['FC'],
  'stereo': ['FL', 'FR'],
  '2.1': ['FL', 'FR', 'LFE'],
  '3.0': ['FL', 'FR', 'FC'],
  '3.0(back)': ['FL', 'FR', 'BC'],
  '4.0': ['FL', 'FR', 'FC', 'BC'],
  'quad': ['FL', 'FR', 'BL', 'BR'],
  'quad(side)': ['FL', 'FR', 'SL', 'SR'],
  '3.1': ['FL', 'FR', 'FC', 'LFE'],
  '5.0': ['FL', 'FR', 'FC', 'BL', 'BR'],
  '5.0(side)': ['FL', 'FR', 'FC', 'SL', 'SR'],
  '4.1': ['FL', 'FR', 'FC', 'LFE', 'BC'],
  '5.1': ['FL', 'FR', 'FC', 'LFE', 'BL', 'BR'],
  '5.1(side)': ['FL', 'FR', 'FC', 'LFE', 'SL', 'SR'],
  '6.0': ['FL', 'FR', 'FC', 'BC', 'SL', 'SR'],
  '6.0(front)': ['FL', 'FR', 'FLC', 'FRC', 'SL', 'SR'],
  'hexagonal': ['FL', 'FR', 'FC', 'BL', 'BR', 'BC'],
  '6.1': ['FL', 'FR', 'FC', 'LFE', 'BC', 'SL', 'SR'],
  '6.1(back)': ['FL, FR, FC, LFE, BL, BR, BC'],
  '6.1(front)': ['FL', 'FR', 'LFE', 'FLC', 'FRC', 'SL', 'SR'],
  '7.0': ['FL', 'FR', 'FC', 'BL', 'BR', 'SL', 'SR'],
  '7.0(front)': ['FL', 'FR', 'FC', 'FLC', 'FRC', 'SL', 'SR'],
  '7.1': ['FL', 'FR', 'FC', 'LFE', 'BL', 'BR', 'SL', 'SR'],
  '7.1(wide)': ['FL', 'FR', 'FC', 'LFE', 'BL', 'BR', 'FLC', 'FRC'],
  '7.1(wide-side)': ['FL', 'FR', 'FC', 'LFE', 'FLC', 'FRC', 'SL', 'SR'],
  'octagonal': ['FL', 'FR', 'FC', 'BL', 'BR', 'BC', 'SL', 'SR'],
  'hexadecagonal': [
    'FL',
    'FR',
    'FC',
    'BL',
    'BR',
    'BC',
    'SL',
    'SR',
    'TFL',
    'TFC',
    'TFR',
    'TBL',
    'TBC',
    'TBR',
    'WL',
    'WR',
  ],
  'downmix': ['DL', 'DR'],
  '22.2': [
    'FL',
    'FR',
    'FC',
    'LFE',
    'BL',
    'BR',
    'FLC',
    'FRC',
    'BC',
    'SL',
    'SR',
    'TC',
    'TFL',
    'TFC',
    'TFR',
    'TBL',
    'TBC',
    'TBR',
    'LFE2',
    'TSL',
    'TSR',
    'BFC',
    'BFL',
    'BFR',
  ],
};
