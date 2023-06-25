import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #36454F;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  font-size: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #95CE59;
  }
`;
