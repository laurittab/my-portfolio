import React from "react";
//import features from Material UI libraries
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Item from "@mui/material/Stack";
import SocialMedia from "../components/socialMedia.jsx";

//main funtion for export
export default function About() {
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      direction="row"
      align="left"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={3}>
        <SocialMedia/>
      </Grid>
      <Grid item sm={12} md={9}>
        <Stack spacing={4}>
          <Item>
            <Typography variant="h4" color="secondary">
              hi, I'm{" "}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h1" className="darkFont">
              Lauritta Burrows{" "}
            </Typography>
            <div className="title">
              <Typography id="title" variant="h1">
                Software Developer
              </Typography>
            </div>
          </Item>
          <Item>
            <Typography variant="h4" color="secondary">
              Let's work together.
            </Typography>
          </Item>
        </Stack>
      </Grid>
    </Grid>
  );
}
//sx={{ mx: "30%" }}
