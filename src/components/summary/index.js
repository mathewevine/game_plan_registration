import React, {useContext} from 'react';
import { detailsContext } from '../../App'

const Summary = () => {
  const {plan, setPlan, planperiod, setPlanPeriod, nextpage, goBack} = useContext(detailsContext);

  let planPrice = null;
  
  if (plan === "Arcade") {
    if (planperiod === "Monthly") {
      planPrice = '$9/mo'
    } else {
      planPrice = '$90/yr'
    }
  } else if (plan === "Advanced") {
    if (planperiod === "Monthly") {
      planPrice = '$12/mo'
    } else {
      planPrice = '$120/yr'
    }
  } else {
    if (planperiod === "Monthly") {
      planPrice = '$15/mo'
    } else {
      planPrice = '$150/yr'
    }
  }

  const pageForward = (no) => {
    nextpage(no)
  }

  const pageBackward = (no) => {
    goBack(no)
  }

  return (
    <div>
      <h1 className='personal-head'>Finishing up</h1>
      <p className='personal-desc'>Double-check everything looks OK before confirming.</p>
      <div>
        <div>
        <p>{`${plan} (${planperiod})`}</p>
        <p>Change</p>
        </div>
        <p>{planPrice}</p>
      </div>
      <div className='buttons'>
      <button onClick={() => pageBackward(3)} className='backControl'>Go Back</button>  
      <button className='forwardControl'>Confirm</button>
      </div>
    </div>
  )
}

export default Summary