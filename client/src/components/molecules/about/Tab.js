import React from "react";
import Styled from "styled-components";
import Typography from "../../atoms/typography";

const StyledTab = Styled.div`
  margin-bottom: 1rem; 
  cursor: pointer;
`;

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function AboutTab({ isActive, category, startDate, endDate, role, company }) {
  const [start, end] = [new Date(startDate), new Date(endDate)];
  return (
    <StyledTab>
      <Typography
        isActive={isActive}
        color={category === "JOB" ? "blue" : "yellow"}
        size="body"
      >
        {`${months[start.getMonth()]} ${start.getFullYear()}
          -
          ${months[end.getMonth()]} ${end.getFullYear()}
        `}
      </Typography>
      <Typography isActive={isActive} size="h4">
        {role}
      </Typography>
      <Typography isActive={isActive} size="h4">
        - {company}
      </Typography>
    </StyledTab>
  );
}

export default AboutTab;
