import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import Header from "./components/Header";
// Lazy load
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
