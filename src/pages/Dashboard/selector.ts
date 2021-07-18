import { createSelector } from "reselect";
import { initialState } from "store/dashboard/reducer";
import { RootState } from "types";

const selectDashboard = (state: RootState) => {
  return state.dashboard || initialState;
};

const makeSelectList = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.detailList
  );

const makeSelectError = () =>
  createSelector(selectDashboard, (dashboardState) => dashboardState.error);
const makeSelectLoading = () =>
  createSelector(selectDashboard, (dashboardState) => dashboardState.loading);

export { makeSelectList, makeSelectError, makeSelectLoading };
