import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollArrow from "./components/scrollarrow/ScrollArrow"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </>
  )
}