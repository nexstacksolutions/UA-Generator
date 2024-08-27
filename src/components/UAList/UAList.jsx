import { memo } from "react";

const UAList = memo(({ userAgents, copyToClipboard }) => {
  return (
    <ul className="user-agent-list row">
      {userAgents.map((ua, index) => (
        <li className="row" key={index}>
          <p>{ua}</p>
          <button className="copy-btn" onClick={() => copyToClipboard(ua)}>
            Copy
          </button>
        </li>
      ))}
    </ul>
  );
});

UAList.displayName = "UAList";

export default UAList;
