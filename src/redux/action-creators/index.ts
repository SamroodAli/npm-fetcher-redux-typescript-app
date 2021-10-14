import axios from "axios";
import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchRepositoris = (searchTerm: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SEARCH_REPOSITORIES });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: searchTerm,
          },
        }
      );

      const names = data.object.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
