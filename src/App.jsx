import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Nav from "./components/Nav";
import ProjectList from "./components/ProjectList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Nav />
      <ProjectList />
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default App;
