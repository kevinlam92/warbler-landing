import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import { useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";

import Container from "components/Container";
import Main from "layouts/Main";

import {
  Contact,
  Curology,
  Goby,
  Larq,
  Nike,
  Nike2,
  Process,
  Reviews,
  Trek,
  Welcome,
} from "./components";

import bgVideo from "../../assets/piano_practice.mp4";

const Agency = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: "smooth" });
    });
  };

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: "absolute",
    objectFit: "cover",
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: "object-fit: cover;",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
  });

  return (
    <Main>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          src={bgVideo}
          sx={{
            filter: "contrast(33%) brightness(133%)",
            position: "absolute",
          }}
        />
        <Container>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Welcome />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo("agency__portfolio-item--js-scroll")}
                  sx={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      {/*
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://assets.maccarianagency.com/backgrounds/img44.jpg"
          )}
        />
        <Container>
          <Larq />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Process />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://assets.maccarianagency.com/backgrounds/img45.jpg"
          )}
        />
        <Container>
          <Nike />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://assets.maccarianagency.com/backgrounds/img43.jpg"
          )}
        />
        <Container>
          <Trek />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://assets.maccarianagency.com/backgrounds/img47.jpg"
          )}
        />
        <Container>
          <Curology />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://assets.maccarianagency.com/backgrounds/img46.jpg"
          )}
        />
        <Container>
          <Nike2 />
        </Container>
      </Box>{" "}
      */}
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
        id="agency__portfolio-item--js-scroll"
      >
        <Container>
          <Contact />
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
