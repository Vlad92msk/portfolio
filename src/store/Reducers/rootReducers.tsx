import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import app2 from "./AllReducers/App2";

export const rootReducers = combineReducers({
  app2: app2,
});

type RootReducersType = typeof rootReducers; //Тип rootReducers
export type AppStateType = ReturnType<RootReducersType>; // Тип того, что внутри rootReducers

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;
