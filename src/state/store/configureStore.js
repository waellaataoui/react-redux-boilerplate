import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk, promise))
  );

  return store;
};
