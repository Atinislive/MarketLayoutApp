import React from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
// import Footer from "./components/footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
// import contacts from "./components/contacts";
import Home from "./components/Home";

import Services from "./components/Services";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
        
          {/* <Route path="/contacts" component={contacts} /> */}
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
