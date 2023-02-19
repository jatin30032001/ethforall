import { ethers } from "ethers";
import React from "react";
import { useSigner } from "wagmi";
import abi from "../contract/ABI.json";
// Goerli Contract Charitable at: 0xe74bAB79A4dea428435e26A776803B8B5521F5Cc.
const GetContract = () => {
  const { data: signer, isError, isLoading } = useSigner();
  const contract = new ethers.Contract('0xe74bAB79A4dea428435e26A776803B8B5521F5Cc', abi, signer);
  return contract;
};
export default GetContract;
