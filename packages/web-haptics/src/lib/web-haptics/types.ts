export type HapticPattern = number[];

export interface HapticPreset {
  pattern: HapticPattern;
  description: string;
  intensity: number;
}

export type HapticInput = number | HapticPattern | HapticPreset;

export interface TriggerOptions {
  intensity?: number;
}

export interface WebHapticsOptions {
  debug?: boolean;
}
