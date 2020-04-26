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
    blue: {
        color: theme.colors.project.blue,
    },
    yellow: {
        color: theme.colors.navigation.works,
    }
}

const StyledTypography = styled.p`
    color: ${props => colors[props.color].color};
    font-size: ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    font-weight: ${props => sizes[props.size].fontWeight};
    letter-spacing: ${props => sizes[props.size].letterSpacing};
    font-family: ${props => sizes[props.size].fontFamily};
    margin-bottom: ${props => props.margin ? ".75rem" : ""};
    width: ${props => `${props.width}px`};
    opacity: ${props => props.isActive? "1" : ".5"};
`;

const Typography = ({ isActive, width, size, color, children, testid, margin }) => {
    return <StyledTypography isActive={isActive} width={width} margin={margin} size={size} color={color} data-testid={testid}>{children}</StyledTypography>
}

Typography.displayName = 'Typography';
Typography.defaultProps = {
    size: 'body',
    testid: 'Typography',
    color: 'secondary',
    margin: false,
    width: "100%",
    isActive: true,
};

Typography.propTypes = {
    size: PropTypes.oneOf(['h1', 'h2', 'h3', "h4", "bodyLarge", "body", "label"]),
    color: PropTypes.oneOf(['primary', 'secondary', "blue", "yellow"]),
    children: PropTypes.element.isRequired,
    testid: PropTypes.string,
    margin: PropTypes.bool,
    width: PropTypes.number,
    isActive: PropTypes.bool,
};

export default Typography;
