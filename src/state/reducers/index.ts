import { combineReducers } from "redux";
import repositoriesReducer from "./respositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
