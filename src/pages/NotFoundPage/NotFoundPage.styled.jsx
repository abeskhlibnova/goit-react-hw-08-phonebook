import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const NotfoundTitle = styled.p`
  color: #1abc9c;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: #1abc9c;
`;
