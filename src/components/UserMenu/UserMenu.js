import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  toast('vi vishli');

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())} />
    </div>
  );
};

// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
//     </div>
//   );
// };
