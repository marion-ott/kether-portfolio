import React from 'react';
import NavButton from "../components/atoms/navButton";
import Styled from "styled-components";
import Typography from "../components/atoms/typography";

const Wrapper = Styled.section`
  background-color: black;
  height: 450px;
  widht: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'Navigation',
  component: NavButton,
};

export const BottomLeftButton = () => <Wrapper><NavButton position="bottomLeft"><Typography size="label">BottomLeft</Typography></NavButton></Wrapper>

export const BottomRightButton = () => <Wrapper><NavButton position="bottomRight"><Typography size="label">BottomRight</Typography></NavButton></Wrapper>

export const TopLeftButton = () => <Wrapper><NavButton position="topLeft"><Typography size="label">TopLeft</Typography></NavButton></Wrapper>

export const TopRightButton = () => <Wrapper><NavButton position="topRight"><Typography size="label">TopRight</Typography></NavButton></Wrapper>

export const Menu = () => (
  <Wrapper>
    <div>
      <div style={{ minWidth: "calc(180px * 2)", width: "calc(180px * 2)", display: "flex", flexWrap: "wrap" }}>
        <NavButton position="topLeft">
          <Typography size="label">TopLeft</Typography>
        </NavButton>

        <NavButton position="topRight">
          <Typography size="label">TopRight</Typography>
        </NavButton>

        <NavButton position="bottomLeft">
          <Typography size="label">BottomLeft</Typography>
        </NavButton>

        <NavButton position="bottomRight">
          <Typography size="label">BottomRight</Typography>
        </NavButton>
      </div>
    </div>
  </Wrapper>
)
