import React, {useState} from 'react'
import './App.css';
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Topbar from './components/topbar/topbar'
import Works from './components/works/works'

function App() {
  const [components, setComponents] = useState(
    [<Intro />,
    <Portfolio />,
    <Testimonials />,
    <Contact />])
  const [component, setComponent] = useState(
  components [0]

  )
  return (
    <div className="app">
      <Topbar components = {components}
      setComponent = {setComponent}/>
    {component}
    </div>
  );
}

export default App;
