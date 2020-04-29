import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Konami from "./Konami";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

function App() {
  const [konami, setKonami] = useState(false);
  const konamiSecret = useRef(null);
  const typedSecret = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    konamiSecret.current = "3838394037";
    typedSecret.current = "";
    const konamiListener = (event) => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
      timeout.current = window.setTimeout(() => {
        typedSecret.current = "";
      }, 3000);
      typedSecret.current =
        typedSecret.current.toString() + event.keyCode.toString();
      checkKonami();
    };
    window.addEventListener("keyup", konamiListener);
    return () => window.removeEventListener("keyup", konamiListener);
  });

  const checkKonami = () => {
    if (typedSecret.current === konamiSecret.current) {
      typedSecret.current = "";
      setKonami(true);
    }
  };

  if (konami) {
    return <Konami onClick={() => setKonami(false)} />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/work/:projectId">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
