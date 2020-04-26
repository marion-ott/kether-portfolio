import styled from 'styled-components';
import theme from "../../../theme";

const NavWrapper = styled.nav`
    padding: 50px 150px;
    background-color: ${theme.colors.main.primary};
    width: 100%; 
    display: flex;
    justify-content: space-between;
`;

export default NavWrapper;