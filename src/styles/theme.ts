import { CSSObject } from 'styled-components';

export type Theme = {
  breakePoints: string[];
  space: string[] | CSSObject;
  color: {
    primary: string[] | CSSObject;
    black: string[] | CSSObject;
    white: string[] | CSSObject;
  };
};

export const theme: Theme = {
  breakePoints: ['400px', '700px', '1000px', '1440px', '1920px'],
  space: ['5px', '10px', '15px', '20px', '30px', '35px'],
  color: {
    primary: [
      '#000',
      '#030229',
      '#230B34',
      '#c4c4c4',
      '#282E34',
      '#656A71', //5
      '#9DA7BC',
      '#485C75', //7
      '#F6F6F9',
      '#566176', //9
      '#C7C7C7',
      '#374659',
      '#444444', //12
    ],
    black: [
      '#000',
      '#030229',
      '#230B34',
      '#c4c4c4',
      '#282E34',
      '#656A71', //5
      '#9DA7BC',
      '#485C75', //7
      '#F6F6F9',
      '#566176', //9
      '#C7C7C7',
      '#374659',
      '#444444', //12
    ],
    white: [
      '#000',
      '#030229',
      '#230B34',
      '#c4c4c4',
      '#282E34',
      '#656A71', //5
      '#9DA7BC',
      '#485C75', //7
      '#F6F6F9',
      '#566176', //9
      '#C7C7C7',
      '#374659',
      '#444444', //12
    ],
  },
};
