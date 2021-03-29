import produce from 'immer';
import { Action } from 'redux';

const FETCH_CATEGORIES_REQUEST = '@category/FETCH_CATEGORIES_REQUEST';
const FETCH_CATEGORIES_SUCCESS = '@category/FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = '@category/FETCH_CATEGORIES_FAILURE';

export interface ICategory {
  id: number;
  name: string;
}

export interface CategoryState {
  loading: boolean;
  categories?: ICategory[];
  error: string | null;
}

export interface FetchCategorySuccessPayload {
  categories: ICategory[];
}

export interface FetchCategoriesFailurePayload {
  error: string;
}

export interface FetchCategoriesRequest extends Action {
  type: typeof FETCH_CATEGORIES_REQUEST;
}

export interface FetchCategoriesSuccess extends Action {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategorySuccessPayload;
}

export interface FetchCategoriesFailure extends Action {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: FetchCategoriesFailurePayload;
}

export type CategoriesActions =
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;

const INITIAL_STATE = {
  error: null,
  loading: false,
  categories: [],
} as CategoryState;

export const reducer = (state = INITIAL_STATE, action: CategoriesActions) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        draft.loading = true;
        return draft;
      case FETCH_CATEGORIES_SUCCESS:
        draft.loading = false;
        draft.categories = action.payload.categories;
        draft.error = null;
        return draft;
      case FETCH_CATEGORIES_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      default:
        return draft;
    }
  });

function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
}

function fetchCategoriesFailure(data: FetchCategoriesFailurePayload) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: {
      error: data.error,
    },
  };
}

function fetchCategoriesSuccess(data: FetchCategorySuccessPayload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
      categories: data.categories,
    },
  };
}

const actions = {
  fetchCategoriesRequest,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
};

const types = {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
};

export { actions, types };
