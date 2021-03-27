import produce from 'immer';

export type ProductsReducerProps = {
  error?: {
    statusCode?: number;
    message?: string;
  } | null;
  loading?: boolean;
  data?:
    | {
        id: number;
        title: string;
        price: number;
        category: string;
        tags: string[];
      }[]
    | null
    | undefined;
};

export class Action {
  static setAllProducts = '@products/SET_ALL_PRODUCTS';
}

export interface setAllProductsPayload {
  type: typeof Action.setAllProducts;
  payload: {
    data?:
      | {
          id: number;
          title: string;
          price: number;
          category: string;
          tags: string[];
        }[]
      | null
      | undefined;
    error?: ProductsReducerProps['error'] | null;
    loading?: ProductsReducerProps['loading'];
  };
}

type actionType = setAllProductsPayload;

const INITIAL_STATE = ({
  error: null,
  loading: false,
  data: null,
} as unknown) as ProductsReducerProps;

export default (state = INITIAL_STATE, action: actionType) =>
  produce(state, draft => {
    switch (action.type) {
      case '@products/SET_ALL_PRODUCTS': {
        Object.assign(draft, {
          ...action.payload,
        });
        return draft;
      }
      default:
        return draft;
    }
  });
