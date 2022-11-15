import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  /* display: flex;
  justify-content: center; */
  /* width: 100vw; */
  /* background: linear-gradient(
    45deg,
    rgba(66, 27, 146, 0.7) 23%,
    rgba(156, 48, 58, 0.7)
  ); */
  background-color: #1abc9c;
  box-shadow: 11px 11px 14px 3px rgba(34, 60, 80, 0.31);
`;

export const NavMenu = styled.nav`
  /* display: flex;
  justify-content: baseline;
  align-items: center; */
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 30px;

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
