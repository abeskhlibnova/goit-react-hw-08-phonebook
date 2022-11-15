import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const NavbarMenuUl = styled.ul`
//   display: flex;
//   flex-wrap: nowrap;
//   margin-left: 40px;
// `;

// export const NavbarItems = styled.li`
//   padding-right: 30px;
// `;

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
