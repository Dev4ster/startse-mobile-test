export type FormValues = {
  title: string;
  category: string;
  price: number;
  tag: string;
};

export type FormProps = {
  update?: boolean;
  formData?: Omit<FormValues, 'tag'> & { tags: string[]; id: number };
};

export type RegisterRouterProps = {
  params: {
    update?: boolean;
    formData?: Omit<FormValues, 'tag'> & { tags: string[] };
  };
};
