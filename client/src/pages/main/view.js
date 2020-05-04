import React from "react";
import styled from "styled-components";

import {
  Header,
  WeeklyInstructions,
  LinkContainer,
  VerseBox,
  PrayerForm,
  AccomplishmentTable,
} from "../../components";

const PageContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 30px;
`;

const FormContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const MainPageView = () => {
  return (
    <PageContainer>
      <Header />
      <WeeklyInstructions />
      <LinkContainer />
      <FormContainer>
        <VerseBox style={{ marginRight: "30px" }} />
        {/* replace the lower one with form when ready */}
        <VerseBox />
      </FormContainer>
    </PageContainer>
  );
};

export default MainPageView;
