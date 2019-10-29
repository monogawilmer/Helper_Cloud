import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
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

const rh = [
  {
    value: 'O+',
    label: 'O+',
  },
  {
    value: 'O-',
    label: 'O-',
  },
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'B-',
    label: 'B-',
  },
  {
    value: 'AB-',
    label: 'AB-',
  },
  {
    value: 'AB+',
    label: 'AB+',
  },
]

export default function Docentes(props) {
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
              label="Nombres"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="apellido"
              margin="normal"
              label="Apellidos"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              label="Documento identidad"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="standard-select-currency"
              select
              label="Sexo"
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
              {sexo.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="cedula"
              margin="normal"
              label="Telefono"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              label="Eps"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="standard-select-currency"
              select
              label="G.S. RH"
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
              {rh.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>


            <TextField
              id="cedula"
              margin="normal"
              label="Telefono de emergencia"
              type="text"
              variant="outlined"
              fullWidth
            />

            <form method="post" action="upload" enctype="multipart/form-data" >
              <fieldset>
                <legend>Subir Foto</legend>
                <input type="file" name="files" id="files" multiple />
              </fieldset>
            </form>

            <br>
            
            </br>


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
        <Grid item xs={12} md={12} lg={7}>
          
        </Grid>
      </Grid>
    </>
  );
}

function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
