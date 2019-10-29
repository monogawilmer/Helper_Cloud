import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Grid } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PageTitle from "../../components/PageTitle/PageTitle";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

//imagenes cards
import administrador from "./administrador.jpg";
import docentes from "./docente.jpg";
import estudiante from "./estudiante.jpg";
import asignatura from "./asignaturas.jpg";
import grados from "./grados.jpg";
import grupos from "./grupos.jpg";

//rutas
import regDocentes from "../docentes/Docentes"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <PageTitle title="Registrar" />

      <Grid container spacing={5}>
        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/notifications"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={administrador}
                  title="Registro administradores"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Administradores
          </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >


        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/ui/docentes"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={docentes}
                  title="Registro docentes"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Docentes
          </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >



        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/ui/charts"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={estudiante}
                  title="Registro estudiantes"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Estudiantes
          </Typography>

                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >



        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/ui/grados"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={grados}
                  title="Registro grados"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Grados
          </Typography>

                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >



        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/ui/grupos"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={grupos}
                  title="Registo grupos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Grupos
          </Typography>

                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >



        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.card}>
            <Link to={"/app/ui/asignaturas"}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={asignatura}
                  title="Registro asignaturas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Asignaturas
          </Typography>

                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid >
      </Grid >
    </>
  );
}