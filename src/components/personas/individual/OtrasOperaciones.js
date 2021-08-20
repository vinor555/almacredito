import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
  section1: {
    margin: theme.spacing(1, 1),
  },
}));

export default function OtrasOperaciones() {
  const classes = useStyles();
  const [sociedadFinanciera, setSociedadFinanciera] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [empresaSeguros, setEmpresaSeguros] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [factoraje, setFactoraje] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [casaCambio, setCasaCambio] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [empresaFianzas, setEmpresaFianzas] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [offShore, setOffShore] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [almacenDeposito, setAlmacenDeposito] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [casaBolsa, setCasaBolsa] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [tarjetaCredito, setTarjetaCredito] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [otros, setOtros] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChangeSociedadFinanciera = (event) => {
    setSociedadFinanciera({
      ...sociedadFinanciera,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeEmpresaSeguros = (event) => {
    setEmpresaSeguros({
      ...empresaSeguros,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeFactoraje = (event) => {
    setFactoraje({
      ...factoraje,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeCasaCambio = (event) => {
    setCasaCambio({
      ...casaCambio,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeEmpresaFianzas = (event) => {
    setEmpresaFianzas({
      ...empresaFianzas,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeOffShore = (event) => {
    setOffShore({
      ...offShore,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAlmacenDeposito = (event) => {
    setAlmacenDeposito({
      ...almacenDeposito,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeCasaBolsa = (event) => {
    setCasaBolsa({
      ...casaBolsa,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeTarjetaCredito = (event) => {
    setTarjetaCredito({
      ...tarjetaCredito,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeOtros = (event) => {
    setOtros({
      ...otros,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={sociedadFinanciera.checkedB}
              onChange={handleChangeSociedadFinanciera}
              name="checkedB"
              color="primary"
            />
          }
          label="Sociedad Financiera"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={empresaSeguros.checkedB}
              onChange={handleChangeEmpresaSeguros}
              name="checkedB"
              color="primary"
            />
          }
          label="Empresa de Seguros"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={factoraje.checkedB}
              onChange={handleChangeFactoraje}
              name="checkedB"
              color="primary"
            />
          }
          label="Factoraje"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={casaCambio.checkedB}
              onChange={handleChangeCasaCambio}
              name="checkedB"
              color="primary"
            />
          }
          label="Casa de Cambio"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={empresaFianzas.checkedB}
              onChange={handleChangeEmpresaFianzas}
              name="checkedB"
              color="primary"
            />
          }
          label="Empresa de Fianzas"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={offShore.checkedB}
              onChange={handleChangeOffShore}
              name="checkedB"
              color="primary"
            />
          }
          label="Off-Shore"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={almacenDeposito.checkedB}
              onChange={handleChangeAlmacenDeposito}
              name="checkedB"
              color="primary"
            />
          }
          label="Almacen de Deposito"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={casaBolsa.checkedB}
              onChange={handleChangeCasaBolsa}
              name="checkedB"
              color="primary"
            />
          }
          label="Casa de Bolsa"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={tarjetaCredito.checkedB}
              onChange={handleChangeTarjetaCredito}
              name="checkedB"
              color="primary"
            />
          }
          label="Tarjeta de Credito"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={otros.checkedB}
              onChange={handleChangeOtros}
              name="checkedB"
              color="primary"
            />
          }
          label="Otros"
        />
      </div>
    </form>
  );
}
