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

const docente = [

]

const grado = [
]

const grupo = [
]

export default function Asignaturas(props) {
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
      <PageTitle title="Docentes" />
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
              label="Nombre"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="standard-select-currency"
              select
              label="Docente"
              className={classes.textField}
              value={values.currency}
              onChange={handleChange('currency')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
              fullWidth
            >
              {docente.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Grado"
              className={classes.textField}
              value={values.currency}
              onChange={handleChange('currency')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
              fullWidth
            >
              {grado.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Grupo"
              className={classes.textField}
              value={values.currency}
              onChange={handleChange('currency')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
              fullWidth
            >
              {grupo.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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
