import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classnames from "classnames";
import MenuItem from '@material-ui/core/MenuItem';

import {
  CircularProgress,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";

// logo
import image from "./image.jpg";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

const currencies = [
  {
    value: 'Masculino',
    label: 'M',
  },
  {
    value: 'Femenino',
    label: 'F',
  },
]



export default function NotificationsPage(props) {
  const classes = useStyles();
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
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle title="Notifications" />
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
              placeholder="Nombres"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="apellido"
              margin="normal"
              placeholder="Apellidos"
              type="text"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Cedula"
              type="text"
              variant="outlined"
              fullWidth
            />
          
            <TextField
              id="standard-select-currency"
              select
              label="Seleccione"
              className={classes.textField}
              value={values.currency}
              onChange={handleChange('currency')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por favor seleccione su sexo"
              margin="normal"
              variant="outlined"
              fullWidth
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          <TextField
            id="cedula"
            margin="normal"
            placeholder="Telefono"
            type="text"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="cedula"
            margin="normal"
            placeholder="Email"
            type="text"
            variant="outlined"
            fullWidth
          />


          <TextField
            id="cedula"
            margin="normal"
            placeholder="Eps"
            type="text"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="cedula"
            margin="normal"
            placeholder="Rh"
            type="text"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="cedula"
            margin="normal"
            placeholder="Telefono de emergencia"
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

          </Widget>
      </Grid>

      <Grid item xs={12} md={12} lg={4} >
        <Widget disableWidgetMenu>
          <img src={image} alt="image" className={classes.logotypeImage} />
        </Widget>
      </Grid>

    </Grid>
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The item was shipped",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
