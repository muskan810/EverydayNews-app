// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  m = "Muskan";
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general"/>}></Route>
              <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="general"/>}></Route>
              <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health"/>}></Route>
              <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science"/>}></Route>
              <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports"/>}></Route>
              <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
