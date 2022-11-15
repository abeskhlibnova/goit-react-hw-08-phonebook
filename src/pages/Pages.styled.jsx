import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #1abc9c;
  font-size: 34px;
`;
export const Text = styled.span`
  color: #1abc9c;
  font-size: 20px;
`;
