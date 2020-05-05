import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
`;

const Goal = styled.div`
  width: calc(33% - 40px);
  min-width: 200px;
  font-size: 12px;
  height: auto;
  margin: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${(props) => (props.highlighted ? "orange" : "#c1c1c1")};

  div {
    color: blue;
    cursor: pointer;
  }
`;

const AdminPageView = ({ accomplishments, editGoal }) => {
  const filteredGoals = accomplishments.filter(
    (goal) => goal.name && goal.note
  );

  return (
    <DisplayContainer>
      {filteredGoals.map((goal, index) => (
        <Goal key={index} highlighted={goal.highlighted}>
          <h3>Type: {goal.type}</h3>
          <p>Name: {goal.name}</p>
          <p>Note: {goal.note}</p>
          <p>Initials: {goal.initials}</p>
          <div onClick={() => editGoal(goal._id)}>edit goal</div>
        </Goal>
      ))}
    </DisplayContainer>
  );
};

export default AdminPageView;
