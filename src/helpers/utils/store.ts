import { createStore, applyMiddleware } from "redux";
import rootSaga from "saga";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "store";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
