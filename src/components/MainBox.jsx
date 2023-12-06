import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import features from Material UI libraries
import { Box, Tab, Tabs } from "@mui/material";
/**
 *A component which returns tab panels and thier content
 *@param {object} properties are tab contents, a number and an index position
 *@return {object} page contents for a tab

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h4>{children}</h4>}</div>;
}
*/
//main funtion for export
export default function MainBox() {
  const [value, setValue] = useState(0);
  const routes = ["/about", "/projects", "/cv", "contact"];
  console.log(value);
  return (
    <div>
      <nav>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={(event, value) => setValue(value)}
          centered
        >
          <Tab
            component={Link}
            to={routes[0]}
            sx={{ fontSize: "medium" }}
            value={0}
            label="about"
          />
          <Tab
            component={Link}
            to={routes[1]}
            sx={{ fontSize: "medium" }}
            value={1}
            label="my projects"
          />
          <Tab
            component={Link}
            to={routes[2]}
            sx={{ fontSize: "medium" }}
            value={2}
            label="cv"
          />
          <Tab
            component={Link}
            to={routes[3]}
            sx={{ fontSize: "medium" }}
            value={3}
            label="contact"
          />
        </Tabs>
      </nav>
      <Box sx={{mt:4}}>
        <Outlet />
      </Box>
    </div>
  );
}

//sx={{ mt: "1%" }}

/*
<Grid container spacing={2} justify="centre">
      <Grid item xs={11} style={{ textAlign: "center" }}>
      */
