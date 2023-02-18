import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import "./App.css";
import Finder from "./components/Finder";
import Stream from "./pages/Stream";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Streamer from "./pages/Streamer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WatchStream from "./pages/WatchStream";
import { useContract, useProvider, useSigner } from "wagmi";
import abi from "./contract//ABI.json";
import useUser from "./hooks/useUser";
import GetContract from "./hooks/GetContract";
import { ethers } from "ethers";

const socket = io.connect("http://localhost:4000");
function App() {
  const contract = GetContract();

  const { address, setAddress } = useUser();
  const [data, setData] = useState();
  console.log(contract);
  useEffect(() => {
    socket.on("streaming", (dataa) => {
      toast(`${dataa.streamName} is streaming live!`);
      setData(dataa);
    });
    async function getTotal() {
      console.log(contract);
      const res = await contract.getAccessTime(
        "0x1d595281352F8897cd2Cf2ca454c91871593EfA1"        
      );
      console.log(res);
    }
    // getTotal();
    return () => {};
  }, [socket]);
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Individual />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='watch-stream' element={<WatchStream />}/>
        <Route path='/create-stream' element={<Streamer />}/>
        {/* <Finder/> */}
      </Routes>
    </div>
  );
}

export default App;
