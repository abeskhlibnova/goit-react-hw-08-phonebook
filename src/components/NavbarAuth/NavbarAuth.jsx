// import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from '../NavbarAuth/NavBarAuth.styled';

export const NavbarAuth = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register // </StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};
