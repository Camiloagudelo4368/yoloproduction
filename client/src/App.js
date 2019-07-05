import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {
  render() {
    const App = () => (
      <div className="appBody">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/mypage' component={Client} />
          <Route path='/mypage/:id' component={Client} />
          <Route path='/bycaloriessearch' component={Search} />
        </Switch>
        <Footer />
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
