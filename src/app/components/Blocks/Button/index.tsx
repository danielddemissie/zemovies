import styled from 'styled-components';
import {
  space,
  color,
  position,
  border,
  borderRadius,
  boxShadow,
  background,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  flexbox,
  compose,
  size,
  variant,
} from 'styled-system';
import { ButtonProp } from './types';

export const Button = styled.button<ButtonProp>`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  ${compose(
    space,
    size,
    background,
    position,
    border,
    borderRadius,
    boxShadow,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    flexbox,
    color,
    variant({
      variants: {
        primary: {
          color: '#fff',
          bg: 'primary.0',
          '& :hover': {
            bg: 'blue',
          },
        },
        secondary: {
          color: '#fff',
          bg: 'primary.3',
        },
        error: {
          color: '#fff',
          bg: 'error.0',
        },
        disabled: {
          color: 'black.4',
          bg: 'black.8',
        },
        tertiary: {
          color: 'secondary.2',
          bg: 'white.0',
          border: '1px solid #FF8058',
          '&:hover': {
            bg: 'white.1',
          },
        },
        quaternary: {
          color: 'white.0',
          bg: 'success.0',
          '&:hover': {
            bg: 'success.1',
          },
        },
      },
    }),
  )}
`;
