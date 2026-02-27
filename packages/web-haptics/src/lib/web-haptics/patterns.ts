import type { HapticPreset } from "./types";

export const defaultPatterns = {
  lightTap: {
    pattern: [10],
    description: "A quick, light tap.",
    intensity: 0.5,
  },
  success: {
    pattern: [50, 50, 50, 50, 50],
    description: "A series of taps indicating success.",
    intensity: 0.5,
  },
  warning: {
    pattern: [50, 50, 50],
    description: "A series of taps indicating a warning.",
    intensity: 0.5,
  },
  error: {
    pattern: [50, 50, 50, 50, 50],
    description: "A series of taps indicating an error.",
    intensity: 0.5,
  },
  impactMedium: {
    pattern: [50],
    description: "A single medium impact tap.",
    intensity: 0.75,
  },
  long: {
    pattern: [2000],
    description: "A long vibration.",
    intensity: 1,
  },
} as const satisfies Record<string, HapticPreset>;
