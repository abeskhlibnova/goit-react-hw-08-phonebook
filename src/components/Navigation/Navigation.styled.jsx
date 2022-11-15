import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperNav = styled.div`
  background-color: #1abc9c;
`;

export const NavMenu = styled.nav`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  margin-right: 20px;

  &:hover {
    color: yellow;
  }

  &.active {
    color: #1abc9c;
    border: 1px solid white;
    padding: 5px;
    background-color: #fff;
    border-radius: 10px;
  }
`;
