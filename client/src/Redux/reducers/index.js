import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../constants";

const initState = {
  loading: "",
  error: "",
  users: [],
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, users: action.payload };
    case FETCH_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
