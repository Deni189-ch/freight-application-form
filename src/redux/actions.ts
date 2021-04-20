import {
  TOGGLE_IS_ERROR,
  TOGGLE_IS_LOADING,
  ADD_REQUEST_TRANSPORTATION,
} from "./types";

export const setToggleErrorAC = (value: boolean) => ({
  type: TOGGLE_IS_ERROR,
  value,
});
export const setToggleLoadingAC = (value: boolean) => ({
  type: TOGGLE_IS_LOADING,
  value,
});
export const setAddRequestTransportationAC = (value: any) => ({
  type: ADD_REQUEST_TRANSPORTATION,
  value,
});
