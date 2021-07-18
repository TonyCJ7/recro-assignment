import { DashboardActionType } from "./actions";
import {
  GET_DETAIL_LIST,
  GET_DETAIL_LIST_FAILED,
  GET_DETAIL_LIST_SUCCESS
} from "./constants";

export type ItemType = {
  id: number;
  userid: number;
  title: string;
  body: string;
};

export type DashboardState = {
  detailList: ItemType[];
  loading: boolean;
  error: string;
};

export const initialState = {
  detailList: [],
  loading: false,
  error: ""
};

export default function (
  state = initialState,
  action: DashboardActionType
): DashboardState {
  switch (action.type) {
    case GET_DETAIL_LIST: {
      return { ...state, loading: true, error: "" };
    }
    case GET_DETAIL_LIST_SUCCESS:
      return {
        loading: false,
        error: "",
        detailList: [...state.detailList, ...action.payload]
      };
    case GET_DETAIL_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: ""
      };
    default:
      return state;
  }
}
