import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";
// import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
);
