import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageTitle from "../../components/PageTitle/PageTitle";
import {TextField} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Widget from "../../components/Widget/Widget";
import {Button } from "../../components/Wrappers/Wrappers";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <PageTitle title="Registros" />
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Administradores</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item xs={12} md={12} lg={5}
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <Widget  disableWidgetMenu>
            <TextField
              id="nombre"
              margin="normal"
              placeholder="Nombres"
              type="text"
              fullWidth
            />

            <TextField
              id="apellido"
              margin="normal"
              placeholder="Apellidos"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Cedula"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Sexo"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Telefono"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Email"
              type="text"
              fullWidth
            />


            <TextField
              id="cedula"
              margin="normal"
              placeholder="Eps"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Rh"
              type="text"
              fullWidth
            />

            <TextField
              id="cedula"
              margin="normal"
              placeholder="Telefono de emergencia"
              type="text"
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </>
  );
}