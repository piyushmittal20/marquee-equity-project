import axios from "axios";
import {
  SET_COMPANY_LOADER,
  SET_COMPANY_FAIL,
  COMPANY_LIST_SUCCESS,
  COMPANY_ADD_SUCCESS,
  COMPANY_SEARCH,
} from "../constants/company";
import { service } from "../service";

export const getList = () => async (dispatch) => {
  dispatch({
    type: SET_COMPANY_LOADER,
  });

  try {
    const { data } = await axios.get(`${service.list}`);

    console.log(data);

    dispatch({
      type: COMPANY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_COMPANY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCompany = (body) => async (dispatch) => {
  dispatch({
    type: SET_COMPANY_LOADER,
  });

  try {
    const { data } = await axios.post(`${service.add}`, body);

    console.log(data);

    dispatch({
      type: COMPANY_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_COMPANY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchCompany = (body) => async (dispatch) => {
  dispatch({
    type: SET_COMPANY_LOADER,
  });

  const query = {
    search: body,
    filter: "company",
  };

  try {
    const { data } = await axios.post(`${service.search}`, query);

    dispatch({
      type: COMPANY_SEARCH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_COMPANY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
