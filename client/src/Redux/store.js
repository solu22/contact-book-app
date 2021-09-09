import { createStore, combineReducers, applyMiddleWare } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";

const reducers = combineReducers({
  userList: userReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleWare(...middleWare))
);

export default store;