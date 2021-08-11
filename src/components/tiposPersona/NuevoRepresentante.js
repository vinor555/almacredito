import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "25ch",
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
}));

export default function NuevoRepresentante() {
  const classes = useStyles();

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  const [selectedDateFinal, setSelectedDateFinal] = useState(
    new Date("1985-06-15T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChangeFinal = (date) => {
    setSelectedDateFinal(date);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Rep. Legal"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Acta Notarial del Nombramiento</DividerWithText>
      <div className={classes.section1}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha Inicial"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha Final Acta/Nomb."
            format="dd/MM/yyyy"
            value={selectedDateFinal}
            onChange={handleDateChangeFinal}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Notario Autorizó"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="e-mail"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
    </form>
  );
}
