import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import React from "react";
import Companies from "./componnets/Companies";
import Portfolio from "./componnets/Portfolio";
import Services from "./componnets/Services";
import About from "./componnets/About";
import Review from "./componnets/Review";

function App() {
  return (
    <>
      <Header />
      <main>
        <About/>
        <Companies />
        <Services />
        <Portfolio />
        <Review />
      </main>
      <Footer />
    </>
  );
}

export default App;
