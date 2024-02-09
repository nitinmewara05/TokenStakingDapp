import { useState, useEffect, useContext } from "react";
import Web3Context from '../../Context/web3Context';
import {ethers} from "ethers";
import {toast} from "react-hot-toast";
import "./DisplayPanel.css";

const EarnedReward =()=>{
    const {stakingContract,selectedAccount}=useContext(Web3Context);
    const [rewardVal,setRewardVal]=useState("0");
  
    useEffect(()=>{
      const fetchStakeRewardInfo =async()=>{
          try{
            //fetching earned amount of a user
             const rewardValueWei = await stakingContract.earned(selectedAccount);
             const rewardValueEth = ethers.formatUnits(rewardValueWei,18).toString();
             const roundedReward = parseFloat(rewardValueEth).toFixed(2)
             setRewardVal(roundedReward)
          }catch(error){
            toast.error("Error fetching the reward:");
            console.error(error.message)
          }
        }
          const interval = setInterval(()=>{
            stakingContract && fetchStakeRewardInfo();
          },20000)
          return ()=> clearInterval(interval)
    },[stakingContract,selectedAccount])
  
    return(
      <div className="earned-reward">
        <p>Earned Reward:</p>
        <span>{rewardVal}</span>
    </div>
    )
  }
  export default EarnedReward;