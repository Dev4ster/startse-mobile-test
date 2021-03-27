import * as Yup from 'yup';

export const CreateProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().min(1).required(),
  category: Yup.string().required(),
  tag: Yup.string(),
});
