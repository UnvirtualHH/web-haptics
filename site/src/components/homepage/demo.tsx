import styles from "./styles.module.scss";

import { useWebHaptics } from "web-haptics/react";
import { defaultPatterns } from "web-haptics";
import { useState } from "react";
import { Button } from "../button";

export const Demo = () => {
  const { trigger } = useWebHaptics({ debug: true });
  const [intensity, setIntensity] = useState<number | undefined>(undefined);

  return (
    <div className={styles.demo}>
      <div className={styles.buttons}>
        {Object.entries(defaultPatterns).map(([name, pattern]) => (
          <button
            key={name}
            aria-description={pattern.description}
            onClick={() =>
              trigger(pattern, {
                intensity,
              })
            }
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.intensityControl}>
        <label htmlFor="intensity">
          Intensity:{" "}
          {intensity !== undefined ? `${Math.round(intensity * 100)}%` : "Auto"}
        </label>
        <input
          id="intensity"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
        />
        <Button onClick={() => setIntensity(undefined)}>Reset</Button>
      </div>
    </div>
  );
};
