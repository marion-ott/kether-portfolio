import React from "react";
import Styled from "styled-components";
import Typography from "../../atoms/typography";

const StyledTitleGroup = Styled.div`
  width: 100%; 
  height: 250px;
`;

function TitleGroup({ title, titleSize, subtitle }) {
  return (
    <StyledTitleGroup>
      <Typography size={titleSize}>{title}</Typography>
      <Typography size="label">{subtitle}</Typography>
    </StyledTitleGroup>
  )
}

export default TitleGroup;