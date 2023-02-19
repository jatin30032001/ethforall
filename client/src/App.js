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
import Aave from "./pages/Aave";
import { Auth, useAuth } from "@arcana/auth-react";

const socket = io.connect("http://localhost:4000");

function App() {
  const contract = GetContract();

  const navigate = useNavigate();
  const { address, setAddress } = useUser();
  const [data, setData] = useState();
  console.log(contract);
  const [loggedin, setLoggedin] = useState(false);
  const onLogin = () => {
    setLoggedin(true);
    navigate("/home");
    setAddress(auth);
  };
  const auth = useAuth();
  useEffect(() => {
    socket.on("streaming", (dataa) => {
      toast(`${dataa.streamName} is streaming live!`);
      setData(dataa);
    });
    // async function getTotal() {
    //   console.log(contract);
    //   const res = await contract.getAccessTime(
    //     "0x1d595281352F8897cd2Cf2ca454c91871593EfA1"
    //   );
    //   console.log(res);
    // }
    // getTotal();
    return () => {};
  }, [socket]);
  return (
    <div className="w-screen">
      <Navbar />
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
        onClick={() => navigate("/watch-stream")}
      />
      <Routes>
        {auth.loading
          ? "Loading"
          : !auth.isLoggedIn && (
              <Route
                path="/"
                element={
                  <Auth
                    externalWallet={true}
                    theme={"light"}
                    onLogin={onLogin}
                  />
                }
              />
            )}
        {/* <Route path="/" element={<Aave />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Individual />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="watch-stream" element={<WatchStream />} />
        <Route path="/create-stream" element={<Streamer />} />
        {/* <Finder/> */}
      </Routes>
      {
        <div className="flex absolute right-10 bottom-28 items-center justify-center">
          <button
            className="p-2 text-white rounded bg-indigo-600"
            onClick={() => {navigate("/home"); setLoggedin(false)}}
          >
            Go Home
          </button>
        </div>
      }
    </div>
  );
}

export default App;
