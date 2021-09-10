import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
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
    case ADD_CONTACT:
      return {
        ...state,
        loading: "",
        error: "",
        users: state.users.concat(action.payload),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ), loading:"", error:""
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        users: state.users.filter((u) => u._id !== action.payload),
        loading: "",
        error: "",
      };
    default:
      return state;
  }
};
