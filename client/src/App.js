import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import "./App.css";
import Finder from "./components/Finder";
import Stream from "./pages/Stream";
import { useState, useEffect } from 'react';

import { Auth, useAuth } from "@arcana/auth-react";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.REACT_APP_LIVEPEER }),
});

const onLogin = () => {
  // Route to authenticated page
  <Home />
}


function App() {
  const auth = useAuth();

  useEffect(() => {
    if (window !== undefined && auth !== undefined)
      console.log(auth?.user);


  }, [auth]);

  return (
    <div className="w-screen">


      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
        </div>
      )}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Individual />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Finder/> */}
          {/* <LivepeerConfig client={client}>
          <Stream />
        </LivepeerConfig> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
