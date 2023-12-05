/*
    
    
    
    Header
      -Logo
      -Nav Items(right side)
      -cart
    Body 
      -search bar
      -Restraunt List
        -RestrauntCard
          -Image
          -Name
          -Cusines
    Footer
      -Links



    */

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
// const heading = (
//   <h1 id="h1" key="h1">
//     This is JSX
//   </h1>
// );

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component

// Title component is functional component

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
