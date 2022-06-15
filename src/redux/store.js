import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddlware from "redux-promise-middleware";
import budgetReducer from "./budgetReducer";
import reducer from './userReducer'


const rootReducer = combineReducers({
  budget: budgetReducer,
  user: reducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddlware));
