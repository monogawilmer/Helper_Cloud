import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Grid } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PageTitle from "../../components/PageTitle/PageTitle";
import Typography from '@material-ui/core/Typography';

//imagenes cards
import administrador from "./administrador.jpg";
import docentes from "./docente.jpg";
import estudiante from "./estudiante.jpg";
import asignatura from "./asignaturas.jpg"

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
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={administrador}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Administradores
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >


      <Grid item xs={12} md={12} lg={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Docentes
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >



      <Grid item xs={12} md={12} lg={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={estudiante}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Estudiantes
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >



      <Grid item xs={12} md={12} lg={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Grados
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >



      <Grid item xs={12} md={12} lg={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Grupos
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >



      <Grid item xs={12} md={12} lg={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={asignatura}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Asignaturas
          </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >
    </Grid >
    </>
  );
}