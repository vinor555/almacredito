import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "25ch",
  },
  formControlSM: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "15ch",
  },
  formControlLG: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "58ch",
  },

  section1: {
    margin: theme.spacing(1, 1),
  },

  container: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 20,
    color: "black",
  },
}));

export default function Patentes() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>Patente de Sociedad</DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <TextField
          id="outlined-required"
          label="Folio:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="Libro:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="No. Exp:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <DividerWithText>Patente de Empresa</DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <TextField
          id="outlined-required"
          label="Folio:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="Libro:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="No. Exp:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <DividerWithText>
        Si no es una empresa o Sociedad Mercantil, deberá indicar la información
        siguiente del Acuerdo Gubernativo o documento similar
      </DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Autoridad:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <DividerWithText>Datos del Registro</DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Nombre:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <TextField
          id="outlined-required"
          label="Folio:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="Libro:"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
      </div>
    </form>
  );
}
