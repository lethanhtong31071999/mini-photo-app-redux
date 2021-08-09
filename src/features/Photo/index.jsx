import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./pages/Main/";

// const AddEdit = React.lazy(() => import("./pages/AddEdit"));
import AddEdit from "./pages/AddEdit";

function Photo() {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url} component={MainPage} />

        <Route path={`${match.url}/add`} component={AddEdit} />
        <Route exact path={`${match.url}/:photoId`} component={AddEdit} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Photo;
