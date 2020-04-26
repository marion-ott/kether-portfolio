import React from "react";
import Theme from "../../Theme";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const white = Theme.colors.main.secondary;

const positions = {
  topLeft: {
    borderTop: `2px solid ${white}`,
    borderBottom: `2px solid ${white}`,
    borderLeft: `2px solid ${white}`,
  },

  topRight: {
    borderTop: `2px solid ${white}`,
    borderBottom: `2px solid ${white}`,
    borderLeft: `2px solid ${white}`,
    borderRight: `2px solid ${white}`,
  },

  bottomRight: {
    borderBottom: `2px solid ${white}`,
    borderLeft: `2px solid ${white}`,
    borderRight: `2px solid ${white}`,
  },
  bottomLeft: {
    borderBottom: `unset`,
    borderLeft: `unset`,
    borderRight: `unset`,
    borderTop: `unset`,
  }
}

const StyledNavbutton = styled.div`
    border-top: ${props => positions[props.position].borderTop};
    border-bottom: ${props => positions[props.position].borderBottom};
    border-left: ${props => positions[props.position].borderLeft};
    border-right: ${props => positions[props.position].borderRight};
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 180px;
    min-height: 100px;
    cursor: pointer;
`;

const NavButton = ({ position, children }) => {
  return <StyledNavbutton position={position} >{children}</StyledNavbutton>
}

NavButton.displayName = "NavButton";
NavButton.defaultProps = {
  position: "topRight",
}

NavButton.prototype = {
  position: PropTypes.oneOf(["topLeft", "topRight", "bottomRight", "bottomLeft"])
}

export default NavButton;