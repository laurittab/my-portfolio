import React from "react";
//import features from Material UI libraries
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MuiAlert,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Item from "@mui/material/Stack";
//import React Hooks
import { useState } from "react";
//import features from email service
import { send, init } from "emailjs-com";

import SocialMedia from "../components/socialMedia.jsx";

//constant declared as a component passed as a reference to the main function's child to create an alert warning
const AlertMessage = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});
//main funtion for export
export default function Contact() {
  init("4IMjpF4P37Aco0LkW");

  const [open, setOpen] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Lauritta",
    reply_to: "",
    phone: "",
    message: "",
  });

  function resetParams() {
    setToSend({
      from_name: "",
      to_name: "Lauritta",
      reply_to: "",
      phone: "",
      message: "",
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    send("service_fx84vcd", "template_7spsrqg", toSend)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      })
      .then(resetParams)
      .then(setOpen(true));
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={6}
      display="flex"
      direction="row"
      align="center"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={3} alignItems="flex-start">
        <SocialMedia />
      </Grid>
      <Grid item xs={12} md={9}>
        <Stack>
          <Item>
            <Typography variant="h5" color="secondary" align="left">
              If you'd like to collaborate on a piece of work, or send
              feedback...
            </Typography>
          </Item>
          <Item>
            {/*backgroundColor is the same as className "greyBG"*/}
            <Card
              className="greyBG"
              sx={{
                mt: 4,
                maxWidth: 900,
                padding: "20px 5px",
                backgroundColor: "rgb(212, 214, 217)",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ mt: -2, mb: 2 }}
                  variant="h3"
                  align="center"
                  className="darkFont"
                >
                  Contact me
                </Typography>
                <Typography
                  gutterBottom
                  color="textSecondary"
                  variant="body1"
                  component="p"
                >
                  It's early days, so no job is too small!
                </Typography>
                <form onSubmit={onSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ backgroundColor: "rgb(255, 255, 230)" }}
                        label="Name"
                        name="from_name"
                        placeholder="Enter your name"
                        variant="outlined"
                        fullWidth
                        required
                        value={toSend.from_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ backgroundColor: "rgb(255, 255, 230)" }}
                        type="email"
                        label="Email"
                        name="reply_to"
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        required
                        value={toSend.reply_to}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ backgroundColor: "rgb(255, 255, 230)" }}
                        type="number"
                        label="Phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        variant="outlined"
                        fullWidth
                        value={toSend.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        sx={{ backgroundColor: "rgb(255, 255, 230)" }}
                        label="Message"
                        name="message"
                        placeholder="Type your message here"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={6}
                        value={toSend.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Snackbar
                        open={open}
                        autoHideDuration={2500}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          Your message has been sent.
                        </Alert>
                      </Snackbar>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Item>
        </Stack>
      </Grid>
    </Grid>
  );
}
