import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import 'remixicon/fonts/remixicon.css';

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";


import SafeComponent from "./SafeComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="my-10">
        <Routes>
          <Route path="/products/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
