import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Modal from "react-modal";
const app = document.getElementById("root");

ReactDOM.render(<App />, app);
Modal.setAppElement(app);
