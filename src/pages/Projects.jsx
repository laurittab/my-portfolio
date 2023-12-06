import React from "react";
//import features from Material UI libraries
import { Box, Grid, Typography } from "@mui/material";
//import components
import ProjectCard from "../components/projectCard.jsx";
import SocialMedia from "../components/socialMedia.jsx";
//main funtion for export
export default function Projects() {
  //style={{ minHeight: '100vh' }}
  return (
    <Grid
      container
      spacing={6}
      display="flex"
      direction="row"
      align="center"
      justify="center"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={1}>
        <SocialMedia />
      </Grid>
      <Grid item xs={12} md={3}>
        <ProjectCard
          title="Full Stack Web App"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fwebapp.PNG?1647100068219"
          alt="web application"
          text="A web application for medical staff using React, Express, SQLite3
              and Node js. Admin staff can search, create and update client records, whilst managers can use it to review client and treatment data. The app allows practitioners to enter clinical information and procress, as well as monitor costs."
          href="https://1-a-web-app-for-medical-records.glitch.me"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="eCommerce Site"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fshop.PNG?1647100533749"
          alt="online shop"
          text="gadgets4geeks UK drop shipping site developed using WordPress and
              WooCommerce. The site is fully mananged and uses NameCheap hosting services. The theme is based on a commercial template, edited to offer interesting items for sale. The banner displays it's dummy status, however it is set up ready for sales and shipping."
          href="https://gadgets4geeks.shop/"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="React Web App"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fclock.PNG?1647100877168"
          alt="clock application"
          text="Clock-Watcher, ideal for working from home. This is a React App with useState, useEffect and useRef hooks to implement a Material UI portal feature and make axios calls to keep time with world clocks."
          href="https://clock-watcher-for-all-time-zones.glitch.me/"
        />
      </Grid>
      <Grid item md={1}>
        {"  "}
      </Grid>
      <Grid item xs={12} md={3}>
        <ProjectCard
          title="React API using Express Server"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fclients.PNG?1647101600081"
          alt="records API"
          text="An API for collecting sample client records. Axios get requests are used to fetch data from an Epress server using Node js. The app is available for developers seeking summary information to use for their own applications."
          href="https://sample-client-records-api.glitch.me/"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="React Developer App"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fspecial.PNG?1647101740424"
          alt="developer's app"
          text="Tool for getting React codes for special character symbols. This tool saves developers the time taken to research the correct format for implementing special characters whilst coding"
          href="https://codes-for-react-special-characters.glitch.me"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="Text-based game written in JAVA"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fgandor.PNG?1647102075490"
          alt="java game"
          text="Play Glandor online now. Click 'RUN' to start the game, which is powered by a 'while' loop and 'switch' statement. A number of hints and tools are provided for progressing through the game."
          href="https://replit.com/@ReetzOnline/Glandor#Main.java"
        />
      </Grid>
      <Grid item md={1}>
        {"  "}
      </Grid>
      <Grid item xs={12} md={3}>
        <ProjectCard
          title="React Website and Contact form"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fsubmit.PNG?1647102552402"
          alt="react website"
          text="Full feature website using React Routing, Material UI library and EmailJS service. Styling for the site is primaryly completed using MUI's powerful tools. Visitors recieve an auto reply to their contact email address after submitting the contact form."
          href="https://laurittaburrows.tech/"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="Entity Relationship Diagram for SQL"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2FSemi-Independent%20Provision.png?1645014317336"
          alt="ERD design"
          text="Tables are designed for seamless retrievale of resident information. The design is based on a my years working in social care and could be used to implement a residential care application. "
          href="https://github.com/laurittab/erd_semi_independent_provision/blob/main/Semi-Independent%20Provision.png?raw=true"
        />
      </Grid>
      <Grid item xs={12} md={3} lg={4}>
        <ProjectCard
          title="Material UI Buttons"
          asset="https://cdn.glitch.global/02995824-9536-4918-8e4f-00dcb083b1bd/thumbnails%2Fbuttons.PNG?1647102952180"
          alt="MUI buttons"
          text="Selection of buttons designed using material UI Library. This inclues a number MUI button variations to display wide variety of options."
          href="https://mui-button-selection.glitch.me/"
        />
      </Grid>
    </Grid>
  );
}
