import {
  GetDetailsListActionType,
  getDetailsListFailedAction,
  getDetailsListSuccessAction
} from "store/dashboard/actions";
import { getDetailsListApi } from "endpoints/dashboard";
import { put } from "@redux-saga/core/effects";

export function* getDetailsListSaga(action: GetDetailsListActionType) {
  try {
    const { offset, limit } = action.payload;

    const response = yield getDetailsListApi(offset, limit);
    yield put(getDetailsListSuccessAction(response));
  } catch (e) {
    yield put(getDetailsListFailedAction(e.message || "Error"));
  }
}
