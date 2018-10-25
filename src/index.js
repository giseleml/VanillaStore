import React from "react";
import ReactDOM from "react-dom";

import { NavBar } from "./navbar.js"
import { Header } from "./header.js"
import { Grid } from "./grid.js"

function MainPage(props){
  return(
    <section>
      <NavBar />
      <Header />
      <br />
      <Grid />
      <br/>
      <Grid />
      <br />
      <Grid />
    </section>
  )
}

const rootElement = document.getElementById("app");
ReactDOM.render(<MainPage />, rootElement);
