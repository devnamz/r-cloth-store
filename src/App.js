import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const HomePageNew = (props) => {
  console.log(props); 
  return ( 
      <div>
        <h1>HATS PAGE</h1>
        <Link to="/topics">Topic</Link>
        <button onClick= {() => props.history.push('topics')}>Topics</button>
      </div>
    );
  }
function App() {
  return (
    <div>
        <Route exact path="/" component={HomePage}/>
    </div>
  );
}
export default App;
