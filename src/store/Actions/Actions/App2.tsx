import { FormDataType } from "../../../Routes/Application2";
import { db } from "../../firebase";
import { BaseThunkType, InferActionTypes } from "../../Reducers/rootReducers";

//_______________________________________________________
export type App2_ActionTypes = InferActionTypes<typeof actions>;

export const actions = {
  addDataAction: (state: FormDataType) =>
    ({
      type: "APP2_ADD_DATA",
      state,
    } as const),
  getDataTableActions: (dataTable: Array<FormDataType>) =>
    ({
      type: "GET_DATA_TABLE",
      dataTable,
    } as const),
};

export type ThunkType = BaseThunkType<App2_ActionTypes>;
export function getDataTable(): ThunkType {
  return async (dispatch) => {
    try {
      let dataTable: Array<any> = await db
        .collection("dataTable")
        .get()
        .then((response) =>
          response.docs.map((doc) => {
            return {
              ...doc.data(),
            };
          })
        );

      dispatch(actions.getDataTableActions(dataTable));
    } catch (e) {
      console.log(e);
    }
  };
}

export function addRow(collection: string, formObj: FormDataType): ThunkType {
  return async (dispatch) => {
    try {
      //Получаем текущее кол-во тестов
      const count = await db
        .collection("dataTable")
        .get()
        .then((resp) => resp.docs.length);

      await db
        .collection(collection)
        .doc(`${count + 1}`)
        .set(formObj)
        .then(() => console.log("Документ добавлен под ID: ", count + 1));

      // dispatch(actions.getDataTableActions(dataTable));
    } catch (e) {
      console.log(e);
    }
  };
}
// На будущее Типизация Санки
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, App2_ActionTypes>
// export function name(state: any): ThunkType {
//   return (dispatch) => {
//     return { type: APP2_ADD_DATA, state };
//   };
// }
