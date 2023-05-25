import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import "./scss/main.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
