import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      { <Header />}
      <main>
        {<About /> }
        {<Projects /> }
        { <Resume />}
        {<Contact />}
      </main>
      {<Footer />}
    </div>
  );
}

export default App;
