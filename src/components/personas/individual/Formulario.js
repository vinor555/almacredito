import React from "react";
import DatosPersonales from "./DatosPersonales";
import Huella from "./Huella";
import InformacionEconomica from "../../dashboard/InformacionEconomica";
import Sectores from "./Sectores";
import Pep from "./Pep";
import Direcciones from "../juridico/Direcciones";
import ReferenciasIndividual from "../../referencias/ReferenciasIndividual";
import TrabajoActual from "./TrabajoActual";

//material UI
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttons: {
    padding: "10px 60px",
    margin: "10px 0px",
  },
}));

function getSteps() {
  return [
    "Datos Personales",
    "Grabación Huella",
    "Sectores",
    "Direcciones",
    "Referencias",
    "Trabajo Actual",
    "PEP",
    "Información Económica",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <DatosPersonales />;
    case 1:
      return <Huella />;
    case 2:
      return <Sectores />;
    case 3:
      return <Direcciones />;
    case 4:
      return <ReferenciasIndividual />;
    case 5:
      return <TrabajoActual />;
    case 6:
      return <Pep />;
    case 7:
      return <InformacionEconomica />;
    default:
      return "Unknown stepIndex";
  }
}

export default function Formulario() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.buttons}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atras
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Actualizar" : "Siguiente"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
