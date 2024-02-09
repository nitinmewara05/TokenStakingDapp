import {ethers, Contract} from "ethers";
import StakeTokenAbi from "../ABI/StakeTokenAbi.json";
import StakingAbi from '../ABI/StakingAbi.json';


export const connectWallet = async()=>{
    try{
let [signer, provider, stakingContract, stakeTokenContract, chainId] = [null];
if(window.ethereum ===null){
throw new Error ("Metamask is not installed")
}
const accounts = await window.ethereum.request({
    method:'eth_requestAccounts'
})
let chainIdHex = await window.ethereum.request({
    method:'eth_chainId'
})

chainId = parseInt(chainIdHex,16)

let selectedAccount = accounts[0];
if(!selectedAccount){
    throw new Error("No ethereum Account Available")
}

provider = new ethers.BrowserProvider(window.ethereum);
signer = await provider.getSigner();

const stakingContractAddress ="0x0642ad6404ccaaaa2d52b8af7c46dd04fddc7fa0";
const stakingTokenContractAddress = "0x21fba7fd4185e93af8a5e2e0c7438701e60cba68";

stakingContract = new Contract(stakingContractAddress, StakingAbi,signer);
stakeTokenContract = new Contract(stakingTokenContractAddress, StakeTokenAbi, signer);

return {provider, selectedAccount, stakeTokenContract, stakingContract, chainId};
    }catch{
        console.rror(Error)
        throw new Error;
    }
}




// 0x21fba7fd4185e93af8a5e2e0c7438701e60cba68 stakeToken
// 0xbfdba5e99c0b9392b939d5d8e39ca5637a3f45cf rewardToken
// 0x0642ad6404ccaaaa2d52b8af7c46dd04fddc7fa0 Staking Contract