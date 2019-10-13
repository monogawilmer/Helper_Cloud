import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components

import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";



export default function Dashboard(props) {


  return (
    <>
      <PageTitle title="Inicio" />
      
      <Grid container spacing={10} >
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar Administradores"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar Docentes"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar Estudiantes"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar Asignaturas"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar Gradosss"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Button>
            <Widget
              title="Registrar   Gruposss"
              disableWidgetMenu
            >
            </Widget>
          </Button>
        </Grid>

       
      </Grid>

      
    </>
  );
}