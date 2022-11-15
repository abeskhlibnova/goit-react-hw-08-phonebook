import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { WrapperUserMenu, Title, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperUserMenu>
      <Title>Welcome, {user.name} !</Title>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutButton>
    </WrapperUserMenu>
  );
};
