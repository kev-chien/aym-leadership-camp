import React from "react";
import styled from "styled-components";

import {Header, WeeklyInstructions, LinkContainer, VerseBox, PrayerForm, AccomplishmentTable} from '../../components'

const PageContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 0;
`;

const StudentIndexView = () => {
  return (
    <PageContainer>
      <Header />
      <WeeklyInstructions />
    </PageContainer>
  );
};

export default StudentIndexView;
