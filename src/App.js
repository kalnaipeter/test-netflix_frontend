import React from 'react';
import Main from "./Components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideoDetail from "./Components/VideoDetail";

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/video/:id" component={VideoDetail}/>
        </Router>
    </div>
  );
}

export default App;
