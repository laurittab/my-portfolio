import React from "react";
//import features from Material UI libraries
import { Button, Grid, Stack, Typography } from "@mui/material";
import Item from "@mui/material/Stack";
import SocialMedia from "../components/socialMedia.jsx";
//main funtion for export
export default function CV() {
  return (
    <Grid
      container
      spacing={6}
      display="flex"
      direction="row"
      align="center"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={1}>
        <SocialMedia />
      </Grid>
      {/* sx={{ mx: "5%" }} sx={{ mb: 4 }}*/}
      <Grid item xs={12} md={7} sx={{ mt: 5 }}>
        <Typography variant="h1" className="title">
          Lauritta Burrows CV{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mt: 5 }}>
        <Button
          sx={{ mt: 4, mx: 3 }}
          color="secondary"
          variant="outlined"
          size="large"
          /*copy link address from download button in github*/
          href="https://github.com/laurittab/CV/raw/main/Lauritta%20Burrows%20CV%20-%20Software%20Developer.docx"
          className="download"
        >
          <Typography variant="h5" color="secondary">
            View CV
          </Typography>
        </Button>
      </Grid>
      <Grid item md={1} align="left">
        {"  "}
      </Grid>
      <Grid item sm={12} md={4} align="left">
        <Stack spacing={4}>
          <Item>
            <Typography variant="h4" className="title">
              Certifications
            </Typography>
            <Typography component={"ul"} variant="body1" className="darkFont">
              <li>Scrum Fundamentals Certified</li>
              <li>ITIL v4 Foundation</li>
            </Typography>
          </Item>
          <Item>
            <Typography variant="h4" className="title">
              Education
            </Typography>
            <Typography component={"ul"} variant="body1" className="darkFont">
              <li>BSc Computer Science (present) - Uni of West London</li>
              <li>PG Diploma in Legal Practice - Thames Valley Uni</li>
              <li>BA Law & Economics - Uni of Sussex</li>
              <li>Diploma in Arts & Science - Bermuda College</li>
            </Typography>
          </Item>
        </Stack>
      </Grid>
      <Grid item sm={12} md={3} align="left">
        <Typography variant="h4" className="title">
          Skills
        </Typography>
        <Typography component={"ul"} variant="body1" className="darkFont">
          <li>Linux, GitHub</li>
          <li>React, Node js </li>
          <li>Python, Java</li>
          <li>Researching trends</li>
          <li>Bootstrap, Material UI</li>
          <li>SQL</li>
          <li>HTML, CSS, SASS, Javascript</li>
          <li>Packet Tracer, Switching & Routing</li>
        </Typography>
      </Grid>
      <Grid item sm={12} md={4} align="left">
        <Typography variant="h4" className="title">
          Courses
        </Typography>
        <Typography component={"ul"} variant="body1" className="darkFont">
          <li>2022 Microsoft Azure Fundamentals</li>
          <li>2022 SQLite3 & Node js</li>
          <li>2021 React & Material UI</li>
          <li>2020 Web Programming & Javascript</li>
          <li>2019 Level 2 IT User & Java</li>
          <li>2019 Level 2 Lean Organisational Management Techniques</li>
          <li>2018 Linux & Python</li>
          <li>2017 HTML</li>
        </Typography>
      </Grid>
    </Grid>
  );
}
