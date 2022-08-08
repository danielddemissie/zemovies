import * as Yup from 'yup';
export const todoValidation = Yup.object({
  todo: Yup.string()
    .required('todo is required')
    .min(3, 'minimum 3 characters needed'),
});
