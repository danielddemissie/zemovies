/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

export default {
  signupSchema: Yup.object({
    name: Yup.string().required('name is required').min(3, 'name is too short'),
  }),
};
