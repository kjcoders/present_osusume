import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/main" exact={true} component={Main} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
