import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
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

export default function Pep() {
  const classes = useStyles();
  const [relacionDependencia, setRelacionDependencia] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeRelacionDependencia = (event) => {
    setRelacionDependencia({
      ...relacionDependencia,
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
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={relacionDependencia.checkedB}
              onChange={handleChangeRelacionDependencia}
              name="checkedB"
              color="primary"
            />
          }
          label="¿El solicitante es una Persona Expuesta Politicamente (PEP)?"
        />
      </div>
      <DividerWithText>
        Ingrese la información de los Familiares o Asociados que sean PEP
      </DividerWithText>
      <div className={classes.rootList}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Carlos Garcia Juarez Baldizon
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Mario Antonio Garcia Portillo
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Mario Antonio Garcia Portillo
          </TabPanel>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
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
