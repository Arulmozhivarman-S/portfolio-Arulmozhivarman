import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Homepage/>
    </div>
  );
}

export default App;
