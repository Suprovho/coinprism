import React from "react";
import Button from "../common/Button";
import "./landingPage.css";
import gradient from "../../assets/gradient.png";
import iphone from "../../assets/iphone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
const LandingPage = () => {
  return (
    <div className="main-flex mt-4">
      <div className="info-landing">
        <motion.h1
          className="heading1 font-bold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2 font-bold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Stay Updated!
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Link to="/Dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("Dashboard clicked")}
            />
          </Link>
          <RWebShare
            data={{
              text: "Coin prism",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "Coin prism",
            }}
            sites={[
              "facebook",
              "whatsapp",
              "twitter",
              "mail",
              "copy",
              "linkedin",
              "reddit",
              "telegram",
            ]}
          >
            <Button text={"Share"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img src={gradient} alt="grd" className="gradient" />
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
