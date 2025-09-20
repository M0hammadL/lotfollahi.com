// src/components/Landing/index.js
import React from "react";
import Style from "./Home.module.css";
import me from "../../img/lotfollahi.jpg";
import ListItem from "./ListItem";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

// Only what we use, with correct package casing
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Landing() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      paddingTop={"15vh"}
    >
      <Box
        alt={"Image of Mohammad Lotfollahi"}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.0rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          {info.firstName} {info.lastName}
        </h1>
        <h5 style={{ opacity: "100%" }}>{info.position}</h5>

        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <ListItem key={index} logo={bio.logo} text={bio.text} link={bio.link} />
          ))}
        </Box>

        {/* Socials */}
        <Box
          className={Style.heroSocials}
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          <a
            target="_blank"
            aria-label="twitter"
            rel="noopener noreferrer"
            href="https://twitter.com/mo_lotfollahi"
          >
            <FaTwitter />
          </a>

          <a
            target="_blank"
            aria-label="linkedin"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mlotfollahi/"
          >
            <FaLinkedin />
          </a>

          <a
            target="_blank"
            aria-label="google scholar"
            rel="noopener noreferrer"
            href="https://scholar.google.com/citations?user=NXhouUcAAAAJ&hl=en"
          >
            <SiGooglescholar />
          </a>

          <a
            target="_blank"
            aria-label="email"
            rel="noopener noreferrer"
            href="mailto:ml19@sanger.ac.uk"
          >
            <MdEmail />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
