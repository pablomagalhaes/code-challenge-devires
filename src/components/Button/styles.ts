import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  background-color: #c5db5f;
  font-weight: 500;
  color: #312e38;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a1a850;
  }

  svg {
    margin-right: 16px;
  }
`;
