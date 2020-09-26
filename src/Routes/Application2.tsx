import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import cls from "../Styles/Application2.module.scss";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Drawer,
  IconButton,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  actions,
  addRow,
  ThunkType,
  getDataTable,
} from "../store/Actions/Actions/App2";
import { AppStateType } from "../store/Reducers/rootReducers";
import PeopleChart from "../Components/Charts/People";
import { SchoolChurch } from "../Components/Charts/School_Church";
import { VvpChart } from "../Components/Charts/VVP";
import { SalaryChart } from "../Components/Charts/Salary";
import DehazeIcon from "@material-ui/icons/Dehaze";
import EnhancedTable from "../Components/Table";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

//Types========================================
//Тип для Стейта формы
export type FormDataType = {
  year: number | null;
  vvp: number | null;
  naselenie: number | null;
  schools: number | null;
  church: number | null;
  citizens: number | null;
  deputy: number | null;
};

//Тип из Материал Юай
type Anchor = "top" | "left" | "bottom" | "right";

//Типизация Компоненты________
type OwnPropsType = {};

//Стили для кнопки Назад
const useStyles = makeStyles((theme: Theme) => ({
  goToBack: {
    color: "red",
    position: "fixed",
    left: "0",
    padding: "25px",
  },
}));

//Контекст для Строк
export const RowsContext = React.createContext<Array<FormDataType | null>>([]);

export const Application2: React.FC<OwnPropsType> = () => {
  //Props______________________________________________________________________________
  const rows = useSelector((state: AppStateType) => state.app2.rows);

  const dispatch = useDispatch();
  const addDataAction = (row: FormDataType) =>
    dispatch(actions.addDataAction(row));
  const getDataTables = useCallback((): ThunkType => dispatch(getDataTable()), [
    dispatch,
  ]);
  const addRowinDB = (collection: string, formObj: FormDataType): ThunkType =>
    dispatch(addRow(collection, formObj));
  //_____________________________________________________________________________________

  useEffect(() => {
    getDataTables();
  }, [getDataTables]);

  //Стейт Формы
  const [formData, setFormData] = useState<FormDataType>({
    year: null,
    vvp: null,
    naselenie: null,
    schools: null,
    church: null,
    citizens: null,
    deputy: null,
  });

  //Очистка формы
  const clearFormData = () => {
    setFormData({
      year: null,
      vvp: null,
      naselenie: null,
      schools: null,
      church: null,
      citizens: null,
      deputy: null,
    });
  };

  //Изменение формы
  const setValue = (e: ChangeEvent<HTMLInputElement>, target: string) => {
    e.persist(); //Без этого почему то рушится страница после 3 ввода...
    const val = +e.target.value;
    val &&
      setFormData((prev) => {
        return {
          ...prev,
          [target]: val,
        };
      });
  };

  //Кастомная валидация
  const validate = () => {
    let isError = true;
    let formDataValue = Object.values(formData);
    const countError = formDataValue.filter((t) => t === null);
    if (
      countError.length === 0 &&
      formData.year !== null &&
      formData.year > 2019
    ) {
      isError = false;
    }

    return isError;
  };

  //Отправить форму на сервер
  const addData = () => {
    const er = validate();

    if (!er) {
      addDataAction(formData);
      addRowinDB("dataTable", formData);
      clearFormData();
    }
  };

  //Чтото из Материал Юай
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const classes = useStyles();

  //Доступ к адресной строке
  let history = useHistory();

  return (
    <Grid container xs={12} justify="center" className={cls.Application2}>
      <IconButton
        aria-label="delete"
        className={classes.goToBack}
        onClick={() => history.push("/")}
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
      <div className={cls.FormConteiner}>
        {(["right"] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <DehazeIcon style={{ color: "red", padding: "20px" }} />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <form className={cls.Form} noValidate autoComplete="on">
                <div
                  style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                >
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Год"
                    type="search"
                    variant="outlined"
                    value={formData.year ? formData.year : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "year")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="ВВП"
                    type="search"
                    variant="outlined"
                    value={formData.vvp ? formData.vvp : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "vvp")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Население"
                    type="search"
                    variant="outlined"
                    value={formData.naselenie ? formData.naselenie : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "naselenie")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Кол-во школ"
                    type="search"
                    variant="outlined"
                    value={formData.schools ? formData.schools : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "schools")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Кол-во храмов"
                    type="search"
                    variant="outlined"
                    value={formData.church ? formData.church : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "church")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Средняя з/п граждан"
                    type="search"
                    variant="outlined"
                    value={formData.citizens ? formData.citizens : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "citizens")
                    }
                  />
                  <TextField
                    className={cls.FieldRow}
                    id={`${Math.random()}`}
                    label="Средняя з/п депутатов"
                    type="search"
                    variant="outlined"
                    value={formData.deputy ? formData.deputy : ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setValue(e, "deputy")
                    }
                  />
                </div>
                <div className={cls.ButtonRow}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addData()}
                  >
                    Добавить
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => clearFormData()}
                  >
                    Очистить
                  </Button>
                </div>
              </form>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Grid container xs={12} justify="center" style={{ padding: "60px" }}>
        <RowsContext.Provider value={rows}>
          <div className={cls.ChartBox}>
            <VvpChart />
          </div>
          <div className={cls.ChartBox}>
            <SchoolChurch />
          </div>
          <div className={cls.ChartBox}>
            <PeopleChart />
          </div>
          <div
            className={cls.ChartBox}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <SalaryChart />
          </div>
        </RowsContext.Provider>
      </Grid>
      <Grid container xs={12} justify="center" style={{ padding: "60px" }}>
        <EnhancedTable data={rows} />
      </Grid>
    </Grid>
  );
};
