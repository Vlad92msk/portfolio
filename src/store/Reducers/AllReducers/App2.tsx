import { FormDataType } from "../../../Routes/Application2";
import { App2_ActionTypes } from "../../Actions/Actions/App2";

const initialState = {
  rows: [] as Array<FormDataType>,
};

export type InitialStateType = typeof initialState;

//InitialStateType после скобочек будет говорить о том, какой объект должна вернуть функция, но иногда это может быть избыточно
export default function app2(
  state = initialState,
  action: App2_ActionTypes
): InitialStateType {
  switch (action.type) {
    case "APP2_ADD_DATA":
      return {
        ...state,
        rows: [...state.rows, { ...action.state }],
      };
    case "GET_DATA_TABLE":
      return {
        ...state,
        rows: [...action.dataTable],
      };

    default:
      return state;
  }
}
