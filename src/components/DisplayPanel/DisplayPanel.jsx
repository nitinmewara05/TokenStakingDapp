import EarnedReward from "./EarnedReward";
import RewardRate from "./RewardRate";
import StakedAmount from "./StakedAmount";
import "./DisplayPanel.css";

const DisplayPannel = ()=>{
    return(   
    <div className="top-wrapper">
      <StakedAmount/>
      <RewardRate/>
      <EarnedReward/>
    </div>
    )
  }
  export default DisplayPannel;