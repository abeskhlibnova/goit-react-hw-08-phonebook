import { NavMenu, StyledNavLink } from '../NavbarAuth/NavBarAuth.styled';

export const NavbarAuth = () => {
  return (
    <NavMenu>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </NavMenu>
  );
};
