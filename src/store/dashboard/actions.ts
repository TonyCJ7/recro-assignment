import { ActionWithPayload } from "types";
import {
  GET_DETAIL_LIST,
  GET_DETAIL_LIST_FAILED,
  GET_DETAIL_LIST_SUCCESS
} from "./constants";
import { ItemType } from "./reducer";

type PaginationType = {
  offset: number;
  limit: number;
};

export type GetDetailsListActionType = ActionWithPayload<
  typeof GET_DETAIL_LIST,
  PaginationType
>;

export type GetDetailsListSuccessActionType = ActionWithPayload<
  typeof GET_DETAIL_LIST_SUCCESS,
  ItemType[]
>;

export type GetDetailsListFailedActionType = ActionWithPayload<
  typeof GET_DETAIL_LIST_FAILED,
  string
>;

export const getDetailsListAction = (
  offset: number,
  limit: number
): GetDetailsListActionType => ({
  type: GET_DETAIL_LIST,
  payload: { offset, limit }
});

export const getDetailsListSuccessAction = (
  details: ItemType[]
): GetDetailsListSuccessActionType => ({
  type: GET_DETAIL_LIST_SUCCESS,
  payload: details
});
export const getDetailsListFailedAction = (
  error: string
): GetDetailsListFailedActionType => ({
  type: GET_DETAIL_LIST_FAILED,
  payload: error
});

export type DashboardActionType =
  | GetDetailsListActionType
  | GetDetailsListSuccessActionType
  | GetDetailsListFailedActionType;
