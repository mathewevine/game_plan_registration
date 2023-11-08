import React, { useContext, Switch } from 'react'
import { detailsContext } from '../../App'
import "./index.css"

const Plans = () => {
  const {plan, setPlan, planperiod, setPlanPeriod, nextpage, goBack} = useContext(detailsContext);

  const pageForward = (no) => {
    nextpage(no)
  }

  const pageBackward = (no) => {
    goBack(no)
  }

  const arcadePrice = planperiod === 'Monthly' ? '$9/mo' : '$90/yr';
  const advancedPrice = planperiod === 'Monthly' ? '$12/mo' : '$120/yr';
  const proPrice = planperiod === 'Monthly' ? '$15/mo' : '$150/yr';

  const yearlyText = planperiod === 'Yearly' ? '2 months free' : '';


  return (
    <div>
      <h1 className='personal-head'>Select your plan</h1>
      <p className='personal-desc'>You have the option of monthly or yearly billing.</p>
      <div className='plans'>
        <div className='plan'>
          <img src="" alt='arcade'/>
          <div>
            <p>Arcade</p>
            <p>{arcadePrice}</p>
            <p>{yearlyText}</p>
            </div>
        </div>
        <div className='plan'>
          <img src="" alt='arcade'/>
          <div>
          <p>Advanced</p>
          <p>{advancedPrice}</p>
          <p>{yearlyText}</p>
          </div>
        </div>
        <div className='plan'>
          <img src="" alt='arcade'/>
          <div>
          <p>Pro</p>
          <p>{proPrice}</p>
          <p>{yearlyText}</p>
          </div>
        </div>
      </div>
      <div className='month-year'>
         Yearly
      </div>
      <div className='buttons'>
      <button onClick={() => pageBackward(1)} className='backControl'>Go Back</button>  
      <button onClick={() => pageForward(3)} className='forwardControl'>Next Step</button>
      </div>
    </div>
  )
}

export default Plans