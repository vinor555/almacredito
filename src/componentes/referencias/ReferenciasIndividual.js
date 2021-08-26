import React from "react";
import ReferenciasPersonales from "./ReferenciasPersonales";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ReferenciasIndividual() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReferenciasPersonales />
    </div>
  );
}
