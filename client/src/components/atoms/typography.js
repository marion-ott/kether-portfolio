import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from "../../theme";

const sizes = {
    h1: {
        fontSize: '64px',
        lineHeight: "auto",
        fontWeight: "bold",
        letterSpacing: "0",
    },
    h2: {
        fontSize: '32px',
        fontWeight: "bold",
        letterSpacing: "0",
    },
    h3: {
        fontSize: '24px',
        lineHeight: "auto",
        fontWeight: "bold",
        letterSpacing: "0",
    },
    h4: {
        fontSize: '18px',
        lineHeight: "auto",
        fontWeight: "bold",
        letterSpacing: "0",
    },
    bodyLarge: {
        fontSize: '24px',
        lineHeight: "150%",
        fontWeight: "regular",
        letterSpacing: "0",
    },
    body: {
        fontSize: '14px',
        lineHeight: "150%",
        fontWeight: "regular",
        letterSpacing: "0",
    },
    label: {
        fontSize: '14px',
        lineHeight: "auto",
        fontWeight: "semiBold",
        letterSpacing: "0",
    }
}

const colors = {
    primary: {
        color: theme.colors.main.primary,
    },
    secondary: {
        color: theme.colors.main.secondary,
    },
}

const StyledTypography = styled.label`
    font-family: Roboto;
    font-weight: 400;
    color: ${props => colors[props.color].color};
    font-size: ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    font-weight: ${props => sizes[props.size].fontWeight};
    letter-spacing: ${props => sizes[props.size].letterSpacing};
    text-transform: uppercase;
    padding-bottom: 8px;
`;

const Typography = ({ size, color, children, testid }) => {
    return <StyledTypography size={size} color={color} data-testid={testid}>{children}</StyledTypography>
}

Typography.displayName = 'Typography';
Typography.defaultProps = {
    size: 'body',
    testid: 'Typography',
    color: 'secondary'
};

Typography.propTypes = {
    size: PropTypes.oneOf(['h1', 'h2', 'h3', "h4", "bodyLarge", "body", "label"]),
    color: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.element.isRequired,
    testid: PropTypes.string
};

export default Typography;
