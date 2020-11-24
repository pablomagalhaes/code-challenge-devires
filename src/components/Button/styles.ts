import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  font-weight: 500;
  color: #312e38;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff9000;
  }

  svg {
    margin-right: 16px;
  }
`;
