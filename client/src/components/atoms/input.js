import React from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';
import theme from "../../theme";

const sizes = {
  fullWidth: {
    width: "100%",
    height: "40px",
  },
  halfWidth: {
    width: "50%",
    height: "40px",
  },
  textArea: {
    width: "100%",
    height: "160px"
  }
}

const StyledInput = Styled.input`
  border: 2px solid ${theme.colors.main.secondary}; 
  background-color: unset;
  margin-bottom: 2.5rem;
  height: ${props => sizes[props.size].height};
  width: ${props => sizes[props.size].width};
  color: ${theme.colors.main.secondary};
  font-family: SpaceGrotesk-Regular;
  font-size: 14px;
  padding-left: .5rem;
  outline: none;
`;

const Input = ({ size, name, defaultValue, ref }) => {
  return <StyledInput size={size} name={name} defaultValue={defaultValue} ref={ref} />
}

Input.displayName = "Input";
Input.defaultProps = {
  size: 'fullWidth',
};

Input.propTypes = {
  size: PropTypes.oneOf(['fullWidth', 'halfWidth', "textArea"]),
};

export default Input;