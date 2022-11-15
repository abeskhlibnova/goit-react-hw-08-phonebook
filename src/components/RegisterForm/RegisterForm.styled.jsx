import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  outline: none;
  border: 2px solid #1abc9c;
  background: none;
  padding: 10px 20px;
  color: #1abc9c;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  border-radius: 25px;

  &:hover {
    background-color: #d7fff8;
  }
`;
export const Label = styled.label`
  padding: 8px 8px;
  color: #1abc9c;
  font-size: 16px;
  font-weight: 600;
  pointer-events: none;
  z-index: 1000;
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 20px;
  background-color: #1abc9c;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #187f6b;
  }
`;
