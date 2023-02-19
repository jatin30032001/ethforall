import { ethers } from 'ethers';
import React from 'react'
import { useProvider, useSigner } from 'wagmi';
import pool from '../contract/Pool.json'
import charity from '../contract/Charity.json'
import reward from '../contract/Reward.json'

// Charity Contract On Polygon Mumbai: 0x7A0C26361dbd3538f1566203A42A2fb334E9E603
// Charity Contract on Goerli: 0xf0Bb2764556e537D210b9498D7120Da885392Be2 
// Aave: mumbai: Pool: 0x0516Deb093cf8A494D071fb5ec9017956e00a9EE
// Aave: goerli: pool: 0x2A498323aCaD2971a8b1936fD7540596dC9BBacD
const Aave = () => {
    const {data:signer} = useSigner();        
    // const {data: provider} = useProvider();
    const aave = new ethers.Contract('0x2A498323aCaD2971a8b1936fD7540596dC9BBacD', pool.abi, signer);
    const matic = new ethers.Contract('0x7A0C26361dbd3538f1566203A42A2fb334E9E603', charity, signer);
    const rewards = new ethers.Contract('0xcbce2891F86b69b3eF61dF8CE69e3522a0483FB3', reward, signer);
    console.log(aave);
    console.log(rewards);
    const transfer = async() => {
        const res = await aave.supply('0x7A0C26361dbd3538f1566203A42A2fb334E9E603', 10, '0x1d595281352F8897cd2Cf2ca454c91871593EfA1', 0, {gasLimit: 3000000});
        res.wait();
        console.log(res);
    }
    const approve = async() => {
        const res = await matic.approve('0x0516Deb093cf8A494D071fb5ec9017956e00a9EE', 1000);
        res.wait();
        console.log(res);
    }
    const claim = async() => {
        const res = await rewards.getRewardsByAsset('0x7A0C26361dbd3538f1566203A42A2fb334E9E603');
        res.wait();
        console.log(res);
    }
  return (
    <div>
        <button className='' onClick={() => approve()} >Approve</button>
        <button onClick={() => transfer()}>Transfer</button>    
        <button onClick={() => claim()}>Claim</button>    
    </div>
  )
}

export default Aave