import React from "react";
import Footer from "./Footer";

const FootTest = () => {
  return (
    <footer className="footer pt-20">
      <div className="footer__parralax">
        <div className="footer__parralax-trees"></div>
        <div className="footer__parralax-moto"></div>
        <div className="footer__parralax-secondplan"></div>
        <div className="footer__parralax-premierplan"></div>
        <div className="footer__parralax-voiture"></div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </footer>
  );
};

export default FootTest;
