import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: ${props => `${props.location.y}px`};
  left: ${props => `${props.location.x}px`};
  display: flex;
`;

export const Content = styled.div`
  background: white;
  border: 1px solid #ccc;
`;

export const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  font-weight: 500;
  background: tomato;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;
