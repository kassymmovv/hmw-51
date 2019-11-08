import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cardss from './Components/Films'
import Example from './Components/header'
import Cards from "./Components/body";
import {Row} from 'reactstrap';
import Sidebar from "./Components/Sidebar";
import Footer from './Components/footer'
function App() {
  return (

    <div className="App">
        <Example/>
        <Row>
            <Cardss name="The Dictator" date="2012" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7M0_uuRaKWmOdXf3hrIvB1frl5teHUpvBHbJezvrZl2FrYxRtw&s"/>
            <Cardss name="The wolf of wall street" date="2013" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAUy998btiCnnjJsTyalrNR_-NDqEqRLZnArSllPWAhFVimvt&s"/>
            <Cardss name="John Wick" date="2014" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77vuHL7Ontp6DvNVDuWxOladmBowS0hTK1_C2pfKtUg0oPjTuDw&s"/>
            <Sidebar/>
    </Row>
    <Footer/>
    </div>
  );
}

export default App;
