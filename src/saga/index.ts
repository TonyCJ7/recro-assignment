import { all, takeLatest } from "redux-saga/effects";
import { GET_DETAIL_LIST } from "store/dashboard/constants";
import { getDetailsListSaga } from "./dashboardSaga";

export default function* rootSaga() {
  yield all([yield takeLatest(GET_DETAIL_LIST, getDetailsListSaga)]);
}
