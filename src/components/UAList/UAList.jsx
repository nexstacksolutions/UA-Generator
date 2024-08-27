import styles from "./UAList.module.css";
import { memo } from "react";

const UAList = memo(({ userAgents, copyToClipboard }) => {
  return (
    <ul className={`${styles.UAList} row`}>
      {userAgents.map((ua, index) => (
        <li className="row" key={index}>
          <p>{ua}</p>
          <button
            className={styles.copyBtn}
            onClick={() => copyToClipboard(ua)}
          >
            Copy
          </button>
        </li>
      ))}
    </ul>
  );
});

UAList.displayName = "UAList";

export default UAList;
