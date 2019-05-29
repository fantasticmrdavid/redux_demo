import styled from 'styled-components';
import { media } from 'styles/utils';

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: ${props => `${props.location.y}px`};
  left: ${props => `${props.location.x}px`};
  z-index: 12;

  ${media.desktop`
    width: 275px;
  `};
`;

export const Input = styled.input`
  background: white;
  border: 1px solid #ccc;
  padding: 0.5em;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: white;
  background: #444;
  border-radius: 50%;
  cursor: pointer;
`;
