import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import "./App.css";
import Finder from "./components/Finder";
import Stream from "./pages/Stream";
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
function App() {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>          
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Individual/>}/>
          <Route path='/signup' element={<SignUp/>}/>
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
