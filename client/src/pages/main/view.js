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

const MainPageView = ({ accomplishments, submitAccomplishment }) => {
  const { breakpoint } = useBreakpoint();

  return (
    <PageContainer breakpoint={breakpoint}>
      {(breakpoint === "md" || breakpoint === "lg") && (
        <>
          <Header />
          <WeeklyInstructions />
          <LinkContainer />
          <FormContainer submitAccomplishment={submitAccomplishment} />
          <AccomplishmentTable accomplishments={accomplishments} />
        </>
      )}
      {breakpoint === "sm" && (
        <>
          <Header />
          <WeeklyInstructions />
          <LinkContainer />
          <VerseBox />
          <PrayerForm submitAccomplishment={submitAccomplishment} />
        </>
      )}
    </PageContainer>
  );
};

export default MainPageView;
