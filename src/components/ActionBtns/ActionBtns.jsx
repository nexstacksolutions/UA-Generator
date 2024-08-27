import React, { memo, useState, useEffect } from "react";

const ActionBtns = memo((props) => {
  const [buttonText, setButtonText] = useState("Generate User Agent");

  const updateButtonText = () => {
    if (window.innerWidth < 480) {
      setButtonText("Generate UA");
    } else {
      setButtonText("Generate User Agent");
    }
  };

  useEffect(() => {
    // Initial check
    updateButtonText();

    // Event listener for window resize
    window.addEventListener("resize", updateButtonText);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);

  return (
    <div className="action-btns row">
      <div className="generate-btns row">
        <input
          type="text"
          name="ua-generator"
          id="ua-generator"
          placeholder="No of UA to generate"
          value={props.userInput}
          onChange={props.handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && props.generateUserAgent()}
          ref={props.inputRef}
        />
        <button onClick={props.generateUserAgent}>{buttonText}</button>
      </div>

      <button className="download-btn" onClick={props.downloadExcel}>
        Download as Excel
      </button>
      <button
        className="copy-all-btn"
        onClick={() => props.copyAllToClipboard(null)}
      >
        Copy All
      </button>
    </div>
  );
});

ActionBtns.displayName = "ActionBtns";

export default ActionBtns;
