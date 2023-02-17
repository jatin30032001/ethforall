import { useState } from "react";
import { createContext } from "react";
import { useContract } from "wagmi";

const ContractContext = createContext({});
export const ContractProvider = ({children}) => {
  const contract = useContract('');
  return (
    <ContractContext.Provider value={{contract}}>
      {children}
    </ContractContext.Provider>
  )
}

export default ContractContext;