import './App.css'
import Wallet  from './components/Wallet/Wallet'
import Navigation from './components/Navigation/Navigation'
import DisplayPanel from './components/DisplayPanel/DisplayPanel'
import TokenApproval from './components/StakeToken/TokenApproval'
import StakeAmount from './components/StakeToken/StakeAmount'
import WithdrawStakeAmount from './components/Withdraw/Withdraw'
import ClaimReward from './components/ClaimedReward/ClaimedReward'
import StakingContext  from './Context/StakingContext'
function App() {

  return (
    <>
      <Wallet>
      <Navigation/>
      <StakingContext.Provider value={{}}>
        <DisplayPanel/>
        <StakeAmount/>
        <WithdrawStakeAmount/>
      </StakingContext.Provider>
      <TokenApproval/>
      <ClaimReward/>
      </Wallet>
      
    </>
  )
}

export default App
