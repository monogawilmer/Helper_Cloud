import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "@material-ui/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import MenuItem from '@material-ui/core/MenuItem';
import {
  TextField,

} from "@material-ui/core";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

const sexo = [
  {
    value: 'Masculino',
    label: 'M',
  },
  {
    value: 'Femenino',
    label: 'F',
  },
]


export default function Grados(props) {
  const classes = useStyles();
  var theme = useTheme();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // local
  var [activeIndex, setActiveIndexId] = useState(0);

  return (
    <>
      <PageTitle title="Grados" />
      <Grid container spacing={8}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
        <Grid item xs={12} md={12} lg={7}>
          <Widget title="Registro" disableWidgetMenu>
            <TextField
              id="nombre"
              margin="normal"
              label="Grado"
              type="text"
              variant="outlined"
              fullWidth
            />             
            

            <div className={classes.formButtons}>
              <Button className={classes.IniciarButton}
                variant="contained"
                color="primary"
                size="large"
              >
                Guardar
              </Button>

            </div>

          </Widget >
        </Grid>
      </Grid>
    </>
  );
}

function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
