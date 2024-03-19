import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Main from "./Main";
import About from "./About"
import Services from "./Services"
import Blog from "./Blog"
import Contact from './Contact';
import "./style.css"

function Home() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Main />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/services" element={<Services />}></Route>
<Route path="/blog" element={<Blog/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>

</Routes>
</BrowserRouter>

</>
  )
}

export default Home
