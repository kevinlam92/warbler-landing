import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

/* eslint-disable react/no-unescaped-entities */
import React from "react";

import iphoneScreen from "../../../../assets/iphone_screen.png";

const Welcome = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => (
    <Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} md={6} data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
              Set goals
            </Typography>
            <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
              Improve discipline
            </Typography>
            <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
              Get feedback
            </Typography>
            <Typography variant={"h1"} sx={{ fontWeight: 700 }}>
              Meet Warbler.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            component="img"
            height={1}
            width="auto"
            maxHeight="50vh"
            src={iphoneScreen}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={"center"}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
