import * as Yup from 'yup';
import i18n from '~/i18n';

export const CreateProductSchema = Yup.object().shape({
  title: Yup.string().required(i18n.t('default.errors.input.required')),
  price: Yup.number()
    .min(1, i18n.t('default.errors.input.price.minimum'))
    .required(i18n.t('default.errors.input.required')),
  category: Yup.string().required(i18n.t('default.errors.input.required')),
  tag: Yup.string(),
});
