import About from "./components/About";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "boxicons/css/boxicons.min.css";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Services />
    <Contact />
    </>
  )
}
