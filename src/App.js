import "./App.css";
import React, { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import Header from "./components/Header";
import SignIn from "features/Auth/pages/SignIn";
import { useEffect } from "react";
import firebase from "firebase";

// Lazy load
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyB3WuNdd3jGFGoTXcT7O3qQgr1EEQO-9sI",
      authDomain: "plan-web-6853e.firebaseapp.com",
      // ...
    };
    firebase.initializeApp(config);
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // User logs out
          console.log("user is not logged in");
          setIsSignedIn(false);
          return;
        }
        setIsSignedIn(true);
        console.log("Logged in user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("token: ", token);
      });
    return () => {
      unregisterAuthObserver();
    };
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/signin" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
