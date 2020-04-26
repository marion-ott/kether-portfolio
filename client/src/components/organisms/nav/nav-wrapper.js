import styled from 'styled-components';
import Theme from "../../../Theme";

const NavWrapper = styled.nav`
    padding: 50px 150px;
    background-color: ${Theme.colors.main.primary};
    width: 100%; 
    display: flex;
    justify-content: space-between;
`;

export default NavWrapper;