import React, { Component } from 'react';
import "./resources/styles.css";
import { Element } from 'react-scroll';

import Header from "./components/header_footer/Header";
import Footer from './components/header_footer/Footer'
import Featured from './components/featured';
import LocationInfo from './components/location';
import AboutUs from './components/about_us';
import Pricing from './components/pricing';
import Map from './components/map';

class App extends Component {
  render() {
    return <div className="App" style={{ height: "1500px", background: "cornflowerblue" }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="LocationInfo">
        <LocationInfo />
      </Element>
      <Element name="AboutUs">
        <AboutUs />
      </Element>

      <Element name="Pricing">
        <Pricing />
      </Element>

      <Element name="Map">
        <Map />
      </Element>
      <Footer />
      </div>;
  }
}

export default App;
