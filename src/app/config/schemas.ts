/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

export default {
  signupSchema: Yup.object({
    username: Yup.string()
      .required('name is required')
      .min(3, 'name is too short'),
    password: Yup.string()
      .required('password is required')
      .min(3, 'password is too short'),
  }),
};
