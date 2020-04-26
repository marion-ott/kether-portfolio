import React from "react";
import Styled from "styled-components";
import Typography from "../../atoms/typography";

const StyledTab = Styled.div`
  margin-bottom: 1rem; 
  cursor: pointer;
`;

function AboutTab({ isActive, type, date, name, place }) {
  return (
    <StyledTab>
      {type === "work"
        ? <Typography isActive={isActive} color="blue" size="body">{date}</Typography>
        : <Typography isActive={isActive} color="yellow" size="body">{date}</Typography>}
      <Typography isActive={isActive} size="h4">{name}</Typography>
      <Typography isActive={isActive} size="h4">- {place}</Typography>
    </StyledTab>
  )
}

export default AboutTab;