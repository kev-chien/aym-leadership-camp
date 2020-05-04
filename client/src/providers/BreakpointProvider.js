import React, { useState, useEffect, createContext, useContext } from "react";

import theme from "../components/theme";

const BreakpointContext = createContext({ breakpoint: null });

const BreakpointProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth < theme.breakpoints.sm) {
        setBreakpoint("sm");
      } else if (innerWidth < theme.breakpoints.md) {
        setBreakpoint("md");
      } else {
        setBreakpoint("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return <BreakpointContext.Provider value={{breakpoint}}>{children}</BreakpointContext.Provider>;
};

const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (context.breakpoint === null) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
};
export { useBreakpoint, BreakpointProvider };
