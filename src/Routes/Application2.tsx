import React, { ChangeEvent, useEffect, useState } from "react";
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
import { connect } from "react-redux";
import { actions, addRow, getDataTable } from "../store/Actions/Actions/App2";
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
export type FormDataType = {
  year: number | null;
  vvp: number | null;
  naselenie: number | null;
  schools: number | null;
  church: number | null;
  citizens: number | null;
  deputy: number | null;
};

//=============================================
type MapStatePropsType = {
  rows: Array<FormDataType | null>;
};
type Anchor = "top" | "left" | "bottom" | "right";

type MapDispatchPropsType = {
  addDataAction: (state: FormDataType) => void;
  getDataTable: () => void;
  addRowinDB: (collection: string, formObj: FormDataType) => void;
};
type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;
//=============================================

const useStyles = makeStyles((theme: Theme) => ({
  goToBack: {
    color: "red",
    position: "fixed",
    left: "0",
    padding: "25px",
  },
}));

const Application2: React.FC<PropsType> = ({
  addDataAction,
  rows,
  getDataTable,
  addRowinDB,
}) => {
  useEffect(() => {
    getDataTable();
  }, [getDataTable]);

  const [formData, setFormData] = useState<FormDataType>({
    year: null,
    vvp: null,
    naselenie: null,
    schools: null,
    church: null,
    citizens: null,
    deputy: null,
  });

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

    console.log(formData);
  };
  const validate = () => {
    let isError = true;
    if (formData.year !== null && formData.year > 0) {
      isError = false;
    } else if (formData.year !== null && formData.vvp === 0) {
      isError = false;
    } else if (formData.naselenie !== null && formData.naselenie === 0) {
      isError = false;
    } else if (formData.schools !== null && formData.schools === 0) {
      isError = false;
    } else if (formData.church !== null && formData.church === 0) {
      isError = false;
    } else if (formData.citizens !== null && formData.citizens === 0) {
      isError = false;
    } else if (formData.deputy !== null && formData.deputy === 0) {
      isError = false;
    }

    return isError;
  };

  const addData = () => {
    const er = validate();

    if (!er) {
      addDataAction(formData);
      addRowinDB("dataTable", formData);
      clearFormData();
    }
  };

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
        <div className={cls.ChartBox}>
          <VvpChart dataChart={rows} />
        </div>
        <div className={cls.ChartBox}>
          <SchoolChurch dataChart={rows} />
        </div>
        <div className={cls.ChartBox}>
          <PeopleChart dataChart={rows} />
        </div>
        <div
          className={cls.ChartBox}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SalaryChart dataChart={rows} />
        </div>
      </Grid>
      <Grid container xs={12} justify="center" style={{ padding: "60px" }}>
        <EnhancedTable data={rows} />
      </Grid>
    </Grid>
  );
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(
  (state) => ({
    rows: state.app2.rows,
  }),
  (dispatch: any) => ({
    addDataAction: (row) => dispatch(actions.addDataAction(row)),
    getDataTable: () => dispatch(getDataTable()),
    addRowinDB: (collection: string, formObj: FormDataType) =>
      dispatch(addRow(collection, formObj)),
  })
)(Application2);
