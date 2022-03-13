/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <Box>
      <Typography fontWeight={700} variant={"h3"} gutterBottom align={"center"}>
        Ready to find out more?
      </Typography>
      <Typography
        variant={"h6"}
        component={"p"}
        color={"text.secondary"}
        align={"center"}
      >
        Join our newsletter today.
      </Typography>
      <Box marginTop={3} display={"flex"} justifyContent={"center"}>
        <Button
          component={"a"}
          href={
            "https://omniform1.com/signup/v1/622da9dd2241be81f89a21e3_622dad9eaadb345f9d931eab.html"
          }
          target={"_blank"}
          variant="contained"
          color="primary"
          size="large"
        >
          Join Newsletter
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
