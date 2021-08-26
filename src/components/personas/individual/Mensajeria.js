import React from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
    width: "52ch",
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

export default function Mensajeria() {
  const classes = useStyles();

  const [envioEmail, setEnvioEmail] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [envioNotificaciones, setEnvioNotificaciones] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [envioSms, setEnvioSms] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [envioNotificacionesSms, setEnvioNotificacionesSms] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [avisoCobro, setAvisoCobro] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [avisoDebito, setAvisoDebito] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [avisoCredito, setAvisoCredito] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [consumoDebito, setConsumoDebito] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [consumoCredito, setConsumoCredito] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeEnvioEmail = (event) => {
    setEnvioEmail({ ...envioEmail, [event.target.name]: event.target.checked });
  };

  const handleChangeEnvioNotificaciones = (event) => {
    setEnvioNotificaciones({
      ...envioEmail,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeEnvioSms = (event) => {
    setEnvioSms({
      ...envioSms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeEnvioNotificacionesSms = (event) => {
    setEnvioNotificacionesSms({
      ...envioNotificacionesSms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAvisoCobro = (event) => {
    setAvisoCobro({
      ...avisoCobro,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAvisoDebito = (event) => {
    setAvisoDebito({
      ...avisoDebito,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAvisoCredito = (event) => {
    setAvisoCredito({
      ...avisoCredito,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeConsumoDebito = (event) => {
    setConsumoDebito({
      ...consumoDebito,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeConsumoCredito = (event) => {
    setConsumoCredito({
      ...consumoCredito,
      [event.target.name]: event.target.checked,
    });
  };

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>Envío de Mensajería por Cliente</DividerWithText>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={envioEmail.checkedB}
              onChange={handleChangeEnvioEmail}
              name="checkedB"
              color="primary"
            />
          }
          label="Envío de Estados de Cuenta por e-mail"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={envioNotificaciones.checkedB}
              onChange={handleChangeEnvioNotificaciones}
              name="checkedB"
              color="primary"
            />
          }
          label="Envío de Notificaciones por e-mail"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Correo Electrónico"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={envioSms.checkedB}
              onChange={handleChangeEnvioSms}
              name="checkedB"
              color="primary"
            />
          }
          label="Envío de SMS"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No. Tel Celular"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={envioNotificacionesSms.checkedB}
              onChange={handleChangeEnvioNotificacionesSms}
              name="checkedB"
              color="primary"
            />
          }
          label="Notificaciones"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={avisoCobro.checkedB}
              onChange={handleChangeAvisoCobro}
              name="checkedB"
              color="primary"
            />
          }
          label="Avisos de Cobro"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={avisoDebito.checkedB}
              onChange={handleChangeAvisoDebito}
              name="checkedB"
              color="primary"
            />
          }
          label="Avisos de Débitos"
        />
        <TextField
          id="outlined-required"
          label="Mayor o igual a"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={avisoCredito.checkedB}
              onChange={handleChangeAvisoCredito}
              name="checkedB"
              color="primary"
            />
          }
          label="Avisos de Créditos"
        />
        <TextField
          id="outlined-required"
          label="Mayor o igual a"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={consumoDebito.checkedB}
              onChange={handleChangeConsumoDebito}
              name="checkedB"
              color="primary"
            />
          }
          label="Consumos/Retiros Tarj. Débito"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={consumoCredito.checkedB}
              onChange={handleChangeConsumoCredito}
              name="checkedB"
              color="primary"
            />
          }
          label="Consumos/Retiros Tarj. Crédito"
        />
      </div>
    </form>
  );
}
