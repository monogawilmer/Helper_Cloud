import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import List from "../../pages/list";
import Charts from "../../pages/charts";
import Docentes from "../../pages/docentes";
import Asignaturas from "../../pages/asignaturas";
import Grados from "../../pages/grados";
import Grupos from "../../pages/grupos";


// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/list" />}
              />              
              <Route path="/app/ui/list" component={List} />
              <Route path="/app/ui/docentes" component={Docentes} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/ui/asignaturas" component={Asignaturas} />
              <Route path="/app/ui/grados" component={Grados} />
              <Route path="/app/ui/grupos" component={Grupos} />
              
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
