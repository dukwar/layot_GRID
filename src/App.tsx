import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import LatestWorks from "./Components/LatestWorks/LatestWorks";
import Sentence from "./Components/Sentence/Sentence";
import Recent from "./Components/Recent/Recent";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";





function App() {
  return (
      <>
     <Header />
     <Intro />
     <Services title={"Services"}
               text={"We offer ipsum dolor sit amet, consetetur sadipscing elitr amet"}
     />
     <Works />
     <div className={"team__container"}>
         <Services title={"LatestWorks Us"}
                   text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"}/>
         <About />
         <Team />
     </div>
          <Services title={"Latest Recent"}
                    text={"We offer ipsum dolor sit amet, consetetur sadipscing elitr amet"}
          />
          <LatestWorks />
          <Sentence />
          <Services title={"Recent blog posts"}
                    text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"}
          />
          <Recent />
          <Clients />
          <Footer />


      </>
  );
}

export default App;
