import { useContext } from "react";
import ContractContext from "../context/ContractProvider";
const useContract = () => {
  return useContext(ContractContext);
}

export default useContract;