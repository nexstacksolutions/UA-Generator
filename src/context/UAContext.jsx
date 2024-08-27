import React from "react";

const UAContext = React.createContext();

export const UAProvider = ({ children }) => {
  const [userAgents, setUserAgents] = React.useState([]);
  const [status, setStatus] = React.useState({
    message: "",
    isVisible: false,
    type: "",
  });
  const timeoutRef = React.useRef(null);

  const displayStatus = React.useCallback((message, type, duration = 2000) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setStatus({ message, isVisible: true, type });
    timeoutRef.current = setTimeout(() => {
      setStatus({ message: "", isVisible: false, type: "" });
    }, duration);
  }, []);

  const toggleGenerator = React.useCallback(() => {
    displayStatus("this option remove from admin", "success");
  }, [displayStatus]);

  const values = React.useMemo(
    () => ({
      status,
      displayStatus,
      userAgents,
      setUserAgents,
      toggleGenerator,
    }),
    [userAgents, setUserAgents, status, displayStatus, toggleGenerator]
  );

  return <UAContext.Provider value={values}>{children}</UAContext.Provider>;
};

const useUA = () => {
  const context = React.useContext(UAContext);
  if (context === undefined) {
    throw new Error("useUA must be used within a UAProvider");
  }
  return context;
};

export default useUA;
