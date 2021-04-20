import {
  FTL_NEWS,
  TOGGLE_IS_ERROR,
  TOGGLE_IS_LOADING,
  ADD_REQUEST_TRANSPORTATION,
} from "./types";

export interface Itransportation {
  id: number;
  bootMethod: string;
  checkbox: boolean;
  datePicker: string;
  from: string;
  hazardClass: string;
  liftingСapacity: string;
  price: string;
  to: string;
  typeOfCargo: string;
}

export interface IRootState {
  FTL: string | null;
  transportationRequest: Itransportation[] | null;
  isError: boolean;
  isLoading: boolean;
}



const initialState: IRootState = {
  FTL: "Прямая машина",
  transportationRequest: [],
  isError: false,
  isLoading: false,
};

export const stateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_REQUEST_TRANSPORTATION:
      return {
        ...state,
        transportationRequest: [state.transportationRequest, action.value],
      };

    case FTL_NEWS:
      return { ...state, FTL: action.payload };

    case TOGGLE_IS_ERROR:
      return { ...state, isError: action.value };

    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.value };

    default:
      return state;
  }
};
