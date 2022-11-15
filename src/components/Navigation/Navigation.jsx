import { WrapperNav, NavMenu, StyledNavLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapperNav>
      <NavMenu>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </NavMenu>
    </WrapperNav>
  );
};
