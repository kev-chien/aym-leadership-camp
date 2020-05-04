import React from "react";
import styled from "styled-components";

import {
  Header,
  WeeklyInstructions,
  LinkContainer,
  AccomplishmentTable,
  VerseBox,
  PrayerForm,
  FormContainer,
} from "../../components";

import { useBreakpoint } from "../../providers/BreakpointProvider";

const PageContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 30px;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
`;

const MainPageView = () => {
  const { breakpoint } = useBreakpoint();

  return (
    <PageContainer breakpoint={breakpoint}>
      {(breakpoint === "md" || breakpoint === "lg") && (
        <>
          <Header />
          <WeeklyInstructions />
          <LinkContainer />
          <FormContainer />
        </>
      )}
      {breakpoint === "sm" && (
        <>
          <Header />
          <WeeklyInstructions />
          <VerseBox />
          {/* replace the lower one with form when ready */}
          <VerseBox />
          <LinkContainer />
        </>
      )}
    </PageContainer>
  );
};

export default MainPageView;
