import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BoxPage } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { Footer, Span } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <BoxPage>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>
        <Span>Copyright 2022 &copy;</Span>
      </Footer>
    </BoxPage>
  );
};
