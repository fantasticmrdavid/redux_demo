import styled from 'styled-components';
import { media } from 'styles/utils';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  padding: 2em 1em;

  ${media.tablet`
    grid-row-gap: 25px;
    grid-template-columns: 50% 50%;
  `}

  ${media.desktop`
    padding: 2em 0;
    grid-row-gap: 50px;
    grid-template-columns: 500px 500px;
  `}
`;

export const Note = styled.div`
  text-align: center;
  padding: 2em;
`;
