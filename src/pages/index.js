import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { interiorTheme } from "common/theme/interior";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Interior/Navbar";
import Banner from "containers/Interior/Banner";
import Feature from "containers/Interior/Feature";
import AboutUs from "containers/Interior/AboutUs";
import Project from "containers/Interior/Project";
import Team from "containers/Interior/Team";
import News from "containers/Interior/News";
import Testimonial from "containers/Interior/Testimonial";
import Gallery from "containers/Interior/Gallery";
import Footer from "containers/Interior/Footer";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from "containers/Interior/interior.style";
import { backgroundColor } from "styled-system";

const Interior = () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>EC Painting</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="EC Panting landing page" />
          <meta name="keywords" content="EC Panting" />

          {/* open graph tags for social media sharing */}
          <meta property="og:image" content="/kitchen2.jpg" />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar navbarStyle={{ backgroundColor: "#4A4A4A" }} />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Feature />
            <AboutUs />
            <Project />
            <Testimonial />
            <Gallery />
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Interior;
