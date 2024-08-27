import styles from "./UAGenerator.module.css";
import useUA from "../../context/UAContext";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { debounce } from "lodash";
import { useCallback, useMemo, useRef, useState } from "react";
import ActionBtns from "../ActionBtns/ActionBtns";
import UAList from "../UAList/UAList";
import generateRealisticUA from "../../helpers/generateRealisticUA";

function UAGenerator() {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const { userAgents, setUserAgents, status, displayStatus } = useUA();

  const generateUserAgents = useCallback(async () => {
    const numUserAgents = parseInt(userInput, 10);

    if (isNaN(numUserAgents) || numUserAgents < 1 || numUserAgents > 20000) {
      displayStatus(`Enter a number between 1 and 20000`, "error");
      return;
    }

    try {
      const generatedUserAgents = Array.from(
        { length: numUserAgents },
        generateRealisticUA
      );

      // Remove duplicates
      const uniqueUserAgents = Array.from(new Set(generatedUserAgents));

      // Log duplicates removed
      const duplicatesRemoved =
        generatedUserAgents.length - uniqueUserAgents.length;

      // Set the user agents after generation and deduplication
      setUserAgents(uniqueUserAgents);

      // Display status message after data is added, adjusting the timeout for large data sets
      const statusMessage = duplicatesRemoved
        ? `Generated ${uniqueUserAgents.length} unique (Removed ${duplicatesRemoved} duplicates)`
        : `Generated ${uniqueUserAgents.length} unique user agents`;

      const displayDuration = numUserAgents > 8000 ? 8000 : 2000;

      displayStatus(statusMessage, "success", displayDuration);

      setUserInput("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (error) {
      const errorMsg = error.message || "Failed to generate user agents";
      displayStatus(errorMsg, "error");
    }
  }, [userInput, displayStatus, setUserAgents]);

  const copyTextToClipboard = useCallback(
    async (ua) => {
      try {
        // Check if userAgents is available
        if (!userAgents.length) {
          displayStatus("No Data to copy", "error");
          return;
        }

        const text = ua || userAgents.join("\n");

        await navigator.clipboard.writeText(text);

        const successMessage = !ua ? "All copied!" : "Copied!";
        displayStatus(successMessage, "success");
      } catch (error) {
        // Log the error and display a failure message
        console.error("Failed to copy text:", error);
        displayStatus("Copy failed! Please try again.", "error");
      }
    },
    [displayStatus, userAgents]
  );

  const downloadExcel = useCallback(() => {
    if (!userAgents.length) {
      displayStatus("No data to download", "error");
      return;
    }

    try {
      const ws = utils.json_to_sheet(
        userAgents.map((ua) => ({ UserAgent: ua }))
      );
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "UserAgents");

      const wbout = write(wb, { bookType: "xlsx", type: "array" });
      saveAs(
        new Blob([wbout], { type: "application/octet-stream" }),
        "user-agents.xlsx"
      );

      displayStatus("Download started!", "success");
    } catch (error) {
      console.error("Failed to download:", error);
      displayStatus("Download failed!", "error");
    }
  }, [userAgents, displayStatus]);

  const debouncedUAGenerator = useMemo(
    () => debounce(generateUserAgents, 300),
    [generateUserAgents]
  );

  return (
    <main className={`${styles.UAGenerator} col`}>
      <h1>Random User-Agent Generator</h1>

      <ActionBtns
        userInput={userInput}
        generateUserAgent={debouncedUAGenerator}
        downloadExcel={downloadExcel}
        copyAllToClipboard={copyTextToClipboard}
        handleInputChange={useCallback((e) => setUserInput(e.target.value), [])}
        inputRef={inputRef}
      />

      <UAList userAgents={userAgents} copyToClipboard={copyTextToClipboard} />

      {status.isVisible && (
        <div className={`${styles.flashStatus} ${styles[status.type]}`}>
          {status.message}
        </div>
      )}
    </main>
  );
}

export default UAGenerator;
