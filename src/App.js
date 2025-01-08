
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, {useState}from 'react'
import Alertt from './components/Alertt';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=> {
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("DarkMode has been enabled","success")
      document.title = 'TextUtils - Dark mode'
      setInterval(() =>{
        document.title = 'TextUtils is amazing'
      },2000)
      setInterval(() =>{
        document.title = 'Inatall TextUtils Now'
      },1500)
    }     
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("lightMode has been enabled","success")
      document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alertt alert={alert} ></Alertt>
        <div className="container">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextFrom heading = "This is heading" mode={mode} showAlert={showAlert}/>
            {/* </Route>
            </Switch> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
