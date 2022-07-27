import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import CheckBoxWithL from '../CheckBoxWithL';

afterEach(cleanup); //done default

//test code
it('CheckBoxWithL change the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckBoxWithL labelOn={'one Lable'} labelOff="off" />,
  );
  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
