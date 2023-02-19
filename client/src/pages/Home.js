import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Aave from "./Aave";
import Superfluid from "../components/Superfluid";
import GetContract from "../hooks/GetContract";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
const Home = () => {
  const navigate = useNavigate();
  const contract = GetContract();
  const [recepients, setRecepients] = useState([]);
  const [bal, setBal] = useState();
  const [donation, setDonation] = useState("");
  const donateToPool = async () => {
    const donate = await contract.donate(
      "0xe74bAB79A4dea428435e26A776803B8B5521F5Cc",
      { value: ethers.utils.formatUnits(donation, "wei") }
    );
    donate.wait();
    console.log(donate);
  };
  useEffect(() => {
    async function fetch() {      
      console.log(contract);
      const res = await contract.getRecepients();
      console.log(res);
      const balance = await contract.getPoolBal();
      console.log(balance);
      setRecepients(res);
      setBal(JSON.parse(balance));
    }
    // if (!fetched && contract !== null)
    // fetch();
  }, [contract]);
  // useEffect(() => {
  //   const poolBal = await
  // }, [])
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <div className="m-5">
        <ConnectButton />
      </div> */}
      <div className="p-3 items-center justify-center flex w-full">
        <div className="border-t-4 w-10/12 border-indigo-600 overflow-hidden rounded shadow-lg">
          <h3 className="text-xl text-center mt-8 mb-8">
            We thrive on <span className="font-bold text-amber-300">TRUST</span>
          </h3>
          <div className="px-4 mb-4 mx-auto w-fit">
            <div className="text-3xl text-center w-full m-2">RECEPIENTS</div>
            <div className="border border-gray rounded w-full p-3 text-center space-x-3 justify-center items-center">
              <p className="">Don't know where to donate. Donate directly to the pool.</p>
              <p>Pool Balance: {bal?bal:0}</p>
              <input
                id="donation"
                type="number"
                onChange={(e) => setDonation(e.target.value)}
                className="border border-gray rounded w-1/2 p-3 text-center"
                placeholder="Donate in WEI"
                autoComplete="off"
                value={donation}
              />
              <button
                onClick={() => donateToPool()}
                className="p-2 text-white rounded bg-indigo-600"
              >
                Donate
              </button>
            </div>
            {recepients?.map((recepient, idx) => {
              return (
                <div
                  onClick={() =>
                    navigate("/user", { state: { recepient: recepient } })
                  }
                  key={idx}
                  className="border border-gray rounded w-full p-3 text-center flex space-x-3 flex-wrap justify-center items-center"
                >
                  <div className="p-1 ">Name: {recepient[2]}</div>
                  <div className="p-1 ">
                    Needs: {JSON.parse(recepient[8])} wei
                  </div>
                  <div className="p-1 ">
                    Received: {JSON.parse(recepient[9])}
                  </div>
                  <div className="p-1 ">
                    Affiliation:{" "}
                    {JSON.parse(recepient[10]) === 1 ? "Individual" : "Agency"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div><Superfluid /></div> */}
    </div>
  );
};

export default Home;
