import React, { useState } from "react";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "30ch",
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

  table: {
    minWidth: 650,
  },
}));

export default function RangoServicios() {
  const classes = useStyles();
  const [depoEfectivoQ, setDepoEfectivoQ] = useState("");
  const [depoEfectivoD, setDepoEfectivoD] = useState("");
  const [retirosEfectivoQ, setRetirosEfectivoQ] = useState("");
  const [retirosEfectivoD, setRetirosEfectivoD] = useState("");
  const [envioTransferenciasQ, setEnvioTransferenciasQ] = useState("");
  const [envioTransferenciasD, setEnvioTransferenciasD] = useState("");
  const [recepcionTransferenciasQ, setRecepcionTransferenciasQ] = useState("");
  const [recepcionTransferenciasD, setRecepcionTransferenciasD] = useState("");
  const [compraChequesQ, setCompraChequesQ] = useState("");
  const [compraChequesD, setCompraChequesD] = useState("");
  const [depositosMonetariosQ, setDepositosMonetariosQ] = useState("");
  const [depositosMonetariosD, setDepositosMonetariosD] = useState("");
  const [depositosAhorroQ, setDepositosAhorroQ] = useState("");
  const [depositosAhorroD, setDepositosAhorroD] = useState("");
  const [depositosPlazoQ, setDepositosPlazoQ] = useState("");
  const [depositosPlazoD, setDepositosPlazoD] = useState("");
  const [cajaSeguridadQ, setCajaSeguridadQ] = useState("");
  const [cajaSeguridadD, setCajaSeguridadD] = useState("");
  const [tarjetaDebitoQ, setTarjetaDebitoQ] = useState("");
  const [tarjetaDebitoD, setTarjetaDebitoD] = useState("");
  const [tarjetaCreditoQ, setTarjetaCreditoQ] = useState("");
  const [tarjetaCreditoD, setTarjetaCreditoD] = useState("");

  const handleChangeDepoEfectivoQ = (event) => {
    setDepoEfectivoQ(event.target.value);
  };

  const handleChangeDepoEfectivoD = (event) => {
    setDepoEfectivoD(event.target.value);
  };

  const handleChangeRetirosEfectivoQ = (event) => {
    setRetirosEfectivoQ(event.target.value);
  };

  const handleChangeRetirosEfectivoD = (event) => {
    setRetirosEfectivoD(event.target.value);
  };

  const handleChangeEnvioTransferenciasQ = (event) => {
    setEnvioTransferenciasQ(event.target.value);
  };

  const handleChangeEnvioTransferenciasD = (event) => {
    setEnvioTransferenciasD(event.target.value);
  };

  const handleChangeRecepcionTransferenciasQ = (event) => {
    setRecepcionTransferenciasQ(event.target.value);
  };

  const handleChangeRecepcionTransferenciasD = (event) => {
    setRecepcionTransferenciasD(event.target.value);
  };

  const handleChangeCompraChequesQ = (event) => {
    setCompraChequesQ(event.target.value);
  };

  const handleChangeCompraChequesD = (event) => {
    setCompraChequesD(event.target.value);
  };

  const handleChangeDepositosMonetariosQ = (event) => {
    setDepositosMonetariosQ(event.target.value);
  };

  const handleChangeDepositosMonetariosD = (event) => {
    setDepositosMonetariosD(event.target.value);
  };

  const handleChangeDepositosAhorroQ = (event) => {
    setDepositosAhorroQ(event.target.value);
  };

  const handleChangeDepositosAhorroD = (event) => {
    setDepositosAhorroD(event.target.value);
  };

  const handleChangeDepositosPlazoQ = (event) => {
    setDepositosPlazoQ(event.target.value);
  };

  const handleChangeDepositosPlazoD = (event) => {
    setDepositosPlazoD(event.target.value);
  };

  const handleChangeCajaSeguridadQ = (event) => {
    setCajaSeguridadQ(event.target.value);
  };

  const handleChangeCajaSeguridadD = (event) => {
    setCajaSeguridadD(event.target.value);
  };

  const handleChangeTarjetaDebitoQ = (event) => {
    setTarjetaDebitoQ(event.target.value);
  };

  const handleChangeTarjetaDebitoD = (event) => {
    setTarjetaDebitoD(event.target.value);
  };

  const handleChangeTarjetaCreditoQ = (event) => {
    setTarjetaCreditoQ(event.target.value);
  };

  const handleChangeTarjetaCreditoD = (event) => {
    setTarjetaCreditoD(event.target.value);
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
      <DividerWithText>
        Servicios a utilizar con mayor frecuencia
      </DividerWithText>
      <div className={classes.section1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h5">Descripción</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Quetzales(GTQ)</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Dolares(USD)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Depositos en Efectivo</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depoEfectivoQ}
                      onChange={handleChangeDepoEfectivoQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depoEfectivoD}
                      onChange={handleChangeDepoEfectivoD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Retiros en Efectivo</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={retirosEfectivoQ}
                      onChange={handleChangeRetirosEfectivoQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={retirosEfectivoD}
                      onChange={handleChangeRetirosEfectivoD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Envio de Transferencias</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={envioTransferenciasQ}
                      onChange={handleChangeEnvioTransferenciasQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={envioTransferenciasD}
                      onChange={handleChangeEnvioTransferenciasD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    Recepción de Transferencias
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={recepcionTransferenciasQ}
                      onChange={handleChangeRecepcionTransferenciasQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={recepcionTransferenciasD}
                      onChange={handleChangeRecepcionTransferenciasD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    Compra Cheques de Gerencia
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={compraChequesQ}
                      onChange={handleChangeCompraChequesQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={compraChequesD}
                      onChange={handleChangeCompraChequesD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Depositos Monetarios</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosMonetariosQ}
                      onChange={handleChangeDepositosMonetariosQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosMonetariosD}
                      onChange={handleChangeDepositosMonetariosD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Depositos de Ahorro</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosAhorroQ}
                      onChange={handleChangeDepositosAhorroQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosAhorroD}
                      onChange={handleChangeDepositosAhorroD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Depositos a Plazo</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosPlazoQ}
                      onChange={handleChangeDepositosPlazoQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={depositosPlazoD}
                      onChange={handleChangeDepositosPlazoD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Cajilla de Seguridad</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={cajaSeguridadQ}
                      onChange={handleChangeCajaSeguridadQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={cajaSeguridadD}
                      onChange={handleChangeCajaSeguridadD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Tarjeta de Debito</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={tarjetaDebitoQ}
                      onChange={handleChangeTarjetaDebitoQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={tarjetaDebitoD}
                      onChange={handleChangeTarjetaDebitoD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow key="tabla">
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Tarjeta de Credito</Typography>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      GTQ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={tarjetaCreditoQ}
                      onChange={handleChangeTarjetaCreditoQ}
                      label="GTQ"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    required
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      USD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={tarjetaCreditoD}
                      onChange={handleChangeTarjetaCreditoD}
                      label="USD"
                    >
                      <MenuItem key="A" value="A">
                        .01 - 3,000.00
                      </MenuItem>
                      <MenuItem key="B" value="B">
                        3,000.01 - 10,000.00
                      </MenuItem>
                      <MenuItem key="C" value="C">
                        10,000.01 - 50,000.00
                      </MenuItem>
                      <MenuItem key="D" value="D">
                        50,000.01 - 100,000.00
                      </MenuItem>
                      <MenuItem key="E" value="E">
                        100,000.01 - 200,000.00
                      </MenuItem>
                      <MenuItem key="F" value="F">
                        200,000.01 - 100,000,000.00
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.section1}></div>
    </form>
  );
}
