import React, { useState } from "react";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
} from "@material-ui/core";

import MUIDataTable from "mui-datatables";

// styles
import useStyles from "./styles";

// components



// icons sets
import "font-awesome/css/font-awesome.min.css";

export default function IconsPage() {
  var classes = useStyles();

  // local
  var [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <Paper className={classes.iconsContainer}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={activeTabId}
          onChange={(e, id) => setActiveTabId(id)}
          className={classes.iconsBar}
        >
          <Tab label="Administradores" classes={{ root: classes.tab }} />
          <Tab label="Docentes" classes={{ root: classes.tab }} />
          <Tab label="Estudiantes" classes={{ root: classes.tab }} />
          <Tab label="Asignarutas" classes={{ root: classes.tab }} />
          <Tab label="Grados" classes={{ root: classes.tab }} />
          <Tab label="Grupos" classes={{ root: classes.tab }} />
        </Tabs>
        {activeTabId === 0 && (
          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de administradores"
                columns={["Name", "Company", "City", "State"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}

        {activeTabId === 1 && (

          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de docentes"
                columns={["Name", "Company", "City", "State"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}

        {activeTabId === 2 && (

          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de estudiantes"
                columns={["Name", "Company", "City", "State"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}

        {activeTabId === 3 && (

          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de asignaturas"
                columns={["Nombre", "Grado", "Grupo", "Docente"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}

        {activeTabId === 4 && (

          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de grados"
                columns={["Nombre"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}

        {activeTabId === 5 && (

          <div>
            <Grid item xs={12}>
              <MUIDataTable
                title="Lista de grupos"
                columns={["Nombre", "Grado"]}
                options={{
                  filterType: "checkbox",
                }}
              />
            </Grid>
          </div>
        )}
      </Paper>
    </>
  );
}
