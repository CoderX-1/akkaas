import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import React from "react";
import Companies from "./componnets/Companies";
import Portfolio from "./componnets/Portfolio";
import Services from "./componnets/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Companies />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
