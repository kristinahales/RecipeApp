import React from 'react';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import MainCourse from './Components/MainCourse';
import Dessert from './Components/Dessert';
import Appetizer from './Components/Appetizer';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Routes>
            <Route className="menu-item" path="/" element={<Home />} />
            <Route className="menu-item" path="/Appetizer" element={<Appetizer />} />
            <Route className="menu-item" path="/MainCourse" element={<MainCourse />} />
            <Route className="menu-item" path="/Dessert" element={<Dessert />} />
          </Routes>
    </div>
    );
  }
  
}

export default App;

