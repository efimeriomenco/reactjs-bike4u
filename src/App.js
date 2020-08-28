import React from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Information from "./pages/information/Information";
import Bikes from "./pages/bikes/Bikes";
import Admin from "./pages/admin/Admin";
import CreateBike from "./pages/createBike/CreateBike";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bikes" component={Bikes} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/information" component={Information} />
          <Route path="/admin" component={Admin}/>
          <Route path="/createoredit/:id?" component={CreateBike}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
