import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
});

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export type RootState = ReturnType<typeof reducers>

export default store;
