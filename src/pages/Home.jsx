import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Products from "../components/products/Products";
import Services from "../components/Services";
import ImageGrid from "../components/ImageGrid";
import VideoGallery from "../components/VideoGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Header />
    <Hero />
    <AboutUs />
    <Products />
    <Services />
    <ImageGrid />
    <VideoGallery />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default Home;
