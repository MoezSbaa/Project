import React from 'react';
import useAuth from "./hooks/contexts/useAuth";
import {BrowserRouter} from "react-router-dom";
import Router from "./navigation/Router";
import Splash from "./components/Splash";

function App() {
  const { isInitialized } = useAuth();

  return <BrowserRouter>{isInitialized ? <Splash /> : <Router />}</BrowserRouter>;
}

export default App;
