import React, { useState } from "react";
import NuevaPersonaJuridica from "./NuevaPersonaJuridica";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";

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
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "50ch",
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
  rootList: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function PersonaJuridica() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
  ];
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Nombres y Apellidos completos"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <NuevaPersonaJuridica />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <DividerWithText>Registro de miembros del Consejo de Admon., Junta Directiva, Administrador Único o Similar (Persona Jurídica)</DividerWithText>
      <div className={classes.rootList}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Andrea Sofia Ramirez Hernandez" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            onClick={handleClickOpen}
            style={{
              transitionDelay: `${
                value === index ? transitionDuration.exit : 0
              }ms`,
            }}
            unmountOnExit
          >
            <Fab
              aria-label={fab.label}
              className={fab.className}
              color={fab.color}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    </form>
  );
}
