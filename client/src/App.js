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

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.REACT_APP_LIVEPEER }),
});
function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <div>
        <SignUp/>
        {/* <Individual /> */}
        {/* <Finder/> */}
        {/* <LivepeerConfig client={client}>
          <Stream />
        </LivepeerConfig> */}
      </div>
    </div>
  );
}

export default App;
