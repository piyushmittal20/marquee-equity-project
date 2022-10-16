import {
  SET_COMPANY_LOADER,
  SET_COMPANY_FAIL,
  COMPANY_LIST_SUCCESS,
  COMPANY_ADD_SUCCESS,
  SET_COMPANY_RESET,
  COMPANY_SEARCH,
} from "../constants/company";

const initialState = {
  loading: null,
  error: null,
  success: null,
  companies: [],
  company: null,
  searchList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COMPANY_LOADER:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case COMPANY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: payload.list,
      };
    case COMPANY_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case COMPANY_SEARCH:
      return {
        ...state,
        loading: false,
        searchList: payload.list,
      };
    case SET_COMPANY_RESET:
      return {
        ...state,
        loading: null,
        success: null,
        company: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
