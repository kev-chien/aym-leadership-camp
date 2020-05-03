import React, { useEffect, useState } from "react";

import theme from "../../components/theme";

import MainPageView from "./view";

const MainPageContainer = () => {
  const [breakpoint, setBreakpoint] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      console.log(innerWidth);

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

  // fetch data from database here
  return <MainPageView breakpoint={breakpoint} />;
};

export default MainPageContainer;
