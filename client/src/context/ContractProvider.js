import { ethers } from "ethers";
import { useState } from "react";
import { createContext } from "react";
import { useContract, useSigner } from "wagmi";
// import { useContract } from "wagmi";
import abi from '../contract/ABI.json'
// const signer = new ethers.providers
const DeployedContractContext = createContext({});

export const ContractProvider = ({children}) => {
  
  const [contract, setContract] = useState();
  return (
    <DeployedContractContext.Provider value={{contract, setContract}}>
      {children}
    </DeployedContractContext.Provider>
  )
}

export default DeployedContractContext;