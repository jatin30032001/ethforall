import { ethers } from "ethers";
import React from "react";
import { useContract, useSigner } from "wagmi";
import abi from "../contract/ABI.json";

const GetContract = () => {
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract('0x15a372b1aEF859D6fdCCD5300c0e20D368E8Cb5d', abi, signer);
  return contract;
};
export default GetContract;
