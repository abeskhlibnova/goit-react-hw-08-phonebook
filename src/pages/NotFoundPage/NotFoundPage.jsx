import React from 'react';
import {
  NotFoundWrapper,
  NotfoundTitle,
  StyledLink,
} from './NotFoundPage.styled';
import notfoundpage from 'images/notfoundpage.png';

export default function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <div>
        <NotfoundTitle>404</NotfoundTitle>
        <NotfoundTitle>
          Page not found, try <StyledLink to="/">Home</StyledLink>
        </NotfoundTitle>
      </div>

      <img src={notfoundpage} alt="" width="250" />
    </NotFoundWrapper>
  );
}
