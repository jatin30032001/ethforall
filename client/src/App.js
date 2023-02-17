import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import "./App.css";
import Finder from "./components/Finder";
import Stream from "./pages/Stream";
import io from "socket.io-client";
import { useState, useEffect } from 'react';

import { Auth, useAuth } from "@arcana/auth-react";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import SignUp from "./pages/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import useAddress from "./hooks/useUser";
import Streamer from "./pages/Streamer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WatchStream from "./pages/WatchStream";

const socket = io.connect("http://localhost:4000");

function App() {
  const auth = useAuth();

  useEffect(() => {
    if (window !== undefined && auth !== undefined)
      console.log(auth?.user);


  }, [auth]);

  const { address } = useAddress();
  const [data, setData] = useState();
  useEffect(() => {    
    socket.on("streaming", (dataa) => {
      toast(`${dataa.streamName} is streaming live!`);
      setData(dataa);
    });
    return () => {};
  }, [socket]);
  const navigate = useNavigate();
  return (
    <div className="w-screen">
        <Navbar />
        <Routes>          
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Individual/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          {/* <Finder/> */}
        </Routes>
      
    </div>
  );
}

export default App;
