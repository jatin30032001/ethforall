import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import "./App.css";
import io from "socket.io-client";

import SignUp from "./pages/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import useAddress from "./hooks/useUser";
import { useEffect, useState } from "react";
import Streamer from "./pages/Streamer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WatchStream from "./pages/WatchStream";

const socket = io.connect("http://localhost:4000");

function App() {
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
      
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}          
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"          
          onClick={() => navigate('/watch-stream', {state: {stream: {name:data?.streamName, playbackId: data?.playbackId}}})}
        />      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Individual />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-stream" element={<Streamer />} />
          <Route path="/watch-stream" element={<WatchStream />} />
          {/* <Finder/> */}
        </Routes>
      
    </div>
  );
}

export default App;
