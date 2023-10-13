import { useState } from 'react'
import './css/stylesheet.css'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Dices from './assets/würfel';
import Char from './assets/char';


function App() {

  return (
<div className="tabs-container">

  <div className="tab">
    <section id="tab1-content" className="tab-content">
      <h2>Character</h2>
        <Char/>
    </section> 
  </div>

  <div className="tab">
    <section id="tab2-content" className="tab-content">
      <h2>Dice Results</h2>
        <Dices/>
    </section> 
  </div>
  
</div>
)
}

export default App
