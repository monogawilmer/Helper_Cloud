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
      <PageTitle title="Administrador" />
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
              label="Cedula"
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
              className={classes.textField}
              label="Email"
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

            <TextField
              id="cedula"
              margin="normal"
              className={classes.textField}
              onChange={handleChange('name')}
              label="Email"
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
