import styles from "./styles.module.scss";

import { Demo } from "./demo";
import { useApp } from "../../context/app";
import { SoundIcon } from "./sound-icon";
import { Logo } from "../../components/logo";
import { Toggle, ToggleGroup } from "../../components/toggle";
import { useWebHaptics } from "web-haptics/react";

export default function MobileView({ disabled }: { disabled?: boolean }) {
  const { debug, setDebug } = useApp();
  const { trigger } = useWebHaptics();

  return (
    <div className={styles.page}>
      <div className={styles.debug}>
        <button
          onClick={() => {
            trigger();
            setDebug(!debug);
          }}
        >
          <SoundIcon enabled={debug} />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo />
          <p>Haptic feedback for the mobile web</p>
        </div>

        <ToggleGroup disabled={disabled}>
          <Toggle active>Play</Toggle>
          <Toggle>Install</Toggle>
        </ToggleGroup>

        <Demo />
      </div>
    </div>
  );
}
