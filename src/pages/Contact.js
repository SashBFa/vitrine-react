import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>address</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>phone</h4>
              <CopyToClipboard text="084524565" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Phone number copy!")}
                >
                  084 52 45 65
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="test@gsashbfa.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copy!")}
                >
                  test@gsashbfa.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>SashBFa - 2022</p>
          </div>
        </div>
        <Buttons left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
