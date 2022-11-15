import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth-operations';
import { toast } from 'react-toastify';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Successfully registered!');
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        toast.error('Please, check inputs. User already register!');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Welcome to Numberbook!');
      })
      .addCase(logIn.rejected)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.info('Successfully log out!');
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';
// import { toast } from 'react-toastify';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(register.pending, (state, action) => state)
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         toast.success('Successfully registered!');
//       })
//       .addCase(register.rejected, (state, action) => state)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         toast.success('Successfully registered!');
//       })
//       .addCase(logIn.rejected)
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       }),
// });

// export const authReducer = authSlice.reducer;
