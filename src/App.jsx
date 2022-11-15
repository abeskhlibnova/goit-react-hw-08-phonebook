import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { UserRoutes } from 'UserRoutes';
import { PhonebookBox } from './components/PhonebookTheme.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <PhonebookBox>
        <UserRoutes />
      </PhonebookBox>
      <ToastContainer autoClose={1500} theme="light" />
    </>
  );
};
