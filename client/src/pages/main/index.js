import React, { useState, useEffect } from "react";
import axios from "axios";

import { BreakpointProvider } from "../../providers/BreakpointProvider";

import MainPageView from "./view";

const MainPageContainer = () => {
  const [accomplishments, setAccomplishments] = useState([]);

  const fetchAccomplishments = async () => {
    const res = await axios.get("/api/goals");
    setAccomplishments(res.data);
  };

  const submitAccomplishment = async (inputs) => {
    const res = await axios.post("/api/goals", inputs);
    setAccomplishments(res.data);
  };

  useEffect(() => fetchAccomplishments(), []);

  return (
    <BreakpointProvider>
      <MainPageView
        accomplishments={accomplishments}
        submitAccomplishment={submitAccomplishment}
      />
    </BreakpointProvider>
  );
};

export default MainPageContainer;
