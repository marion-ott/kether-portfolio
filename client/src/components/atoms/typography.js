import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from "../../theme";


const sizes = {
    h1: {
        fontSize: '64px',
        lineHeight: "normal",
        fontWeight: "bold",
        letterSpacing: "normal",
        fontFamily: "Syne-Bold",
    },
    h2: {
        fontSize: '32px',
        fontWeight: "bold",
        letterSpacing: "normal",
        fontFamily: "Syne-Bold",
    },
    h3: {
        fontSize: '24px',
        lineHeight: "normal",
        fontWeight: "bold",
        letterSpacing: "normal",
        fontFamily: "Syne-Bold",
    },
    h4: {
        fontSize: '18px',
        lineHeight: "normal",
        fontWeight: "bold",
        letterSpacing: "normal",
        fontFamily: "Syne-Bold",
    },
    bodyLarge: {
        fontSize: '24px',
        lineHeight: "150%",
        fontWeight: "regular",
        letterSpacing: "normal",
        fontFamily: "SpaceGrotesk-Regular",
    },
    body: {
        fontSize: '14px',
        lineHeight: "150%",
        fontWeight: "regular",
        letterSpacing: "normal",
        fontFamily: "SpaceGrotesk-Regular",
    },
    label: {
        fontSize: '14px',
        lineHeight: "normal",
        fontWeight: "semiBold",
        letterSpacing: "normal",
        fontFamily: "SpaceGrotesk-SemiBold",
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

const StyledTypography = styled.p`
    color: ${props => colors[props.color].color};
    font-size: ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    font-weight: ${props => sizes[props.size].fontWeight};
    letter-spacing: ${props => sizes[props.size].letterSpacing};
    font-family: ${props => sizes[props.size].fontFamily};
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
