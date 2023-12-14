
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }
  
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='grey'; 
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - DarkMode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
      document.title='TextUtils - LightMode';
    }

  }
  return (
  <>
      <Router>
      {/* <Navbar title="textutils2" aboutText="aboutTextutils" /> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
  
  </>
  );
}

export default App;
