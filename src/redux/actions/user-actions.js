import { SET_CURRENTUSER } from "../types/user-types";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENTUSER,
    payload: user
  };
};
