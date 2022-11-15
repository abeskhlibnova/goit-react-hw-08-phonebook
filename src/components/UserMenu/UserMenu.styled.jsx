import styled from 'styled-components';

export const WrapperUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
`;
export const LogOutButton = styled.div`
  padding: 10px;

  border-radius: 10px;
  font-size: 20px;
  background-color: #fff;
  cursor: pointer;
  color: #1abc9c;

  &:hover {
    background-color: #187f6b;
    color: #fff;
    border: 2px solid #fff;
  }
`;
