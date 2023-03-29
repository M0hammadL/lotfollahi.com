import React from "react";
import Style from "./Home.module.css";
import me from "../../img/lotfollahi.jpg";
import classNames from "classnames";
import ListItem from "./ListItem";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Landing() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 3.75rem)"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
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
        <h2 style={{opacity: '50%'}}>{info.position}</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <ListItem key={index} logo={bio.logo} text={bio.text} link={bio.link} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {/* Twitter */}
          <a
            target='_blank'
            aria-label={"twitter"}
            rel='noopener noreferrer'
            href={"https://twitter.com/Mohlotf"}
          >
            <FaTwitter />
          </a>
          {/* Linkedin */}
          <a
            target='_blank'
            aria-label={"linkedin"}
            rel='noopener noreferrer'
            href={"https://www.linkedin.com/in/mlotfollahi/"}
          >
            <FaLinkedin />
          </a>
         {/* Github */}
          <a
            target='_blank'
            aria-label={"github"}
            rel='noopener noreferrer'
            href={"https://github.com/M0hammadL"}
          >
            <FaGithub />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
