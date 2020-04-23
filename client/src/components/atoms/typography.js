import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
    small: {
        fontSize: '12px',
        lineHeight: '16px',
    },
    medium: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '20px',
    },
    extraLarge: {
        fontSize: '32px',
        lineHeight: '36px',
    }
}

const colors = {
    primary: {
        color: "white"
    },
    secondary: {
        color: "black"
    },
}

const StyledTypography = styled.label`
    font-family: Roboto;
    font-weight: 400;
    color: ${props => colors[props.color].color};
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    text-transform: uppercase;
    padding-bottom: 8px;
`;

const Typography = ({ size, color, children, testid }) => {
    return <StyledTypography size={size} color={color} data-testid={testid}>{children}</StyledTypography>
}

/* Will show the right 'tag' within documentation */
Typography.displayName = 'Typography';
Typography.defaultProps = {
    size: 'medium',
    testid: 'Typography',
    color: 'primary'
};

Typography.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', "extraLarge"]),
    color: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.element.isRequired,
    testid: PropTypes.string
};

export default Typography;