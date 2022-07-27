import {
  space,
  color,
  fontSize,
  fontFamily,
  border,
  background,
  borderRadius,
  position,
  compose,
  fontWeight,
  boxShadow,
} from 'styled-system';
import styled from 'styled-components';
import { Field } from 'formik';
import { InputProps } from './types';
import React from 'react';

const StyledInput = styled(Field)<InputProps>`
  name: ${props => props.name},
    ${compose(
      space,
      color,
      fontSize,
      fontFamily,
      border,
      background,
      borderRadius,
      position,
      fontWeight,
      boxShadow,
    )};
`;

export const Input = (props: InputProps) => (
  <div>
    <StyledInput {...props} />
  </div>
);
