import React from "react";

import { BreakpointProvider } from "../../providers/BreakpointProvider";

import MainPageView from "./view";

const MainPageContainer = () => {
  // fetch data from database here

  return (
    <BreakpointProvider>
      <MainPageView />
    </BreakpointProvider>
  );
};

export default MainPageContainer;
