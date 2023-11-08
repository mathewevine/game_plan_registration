import React, {useContext} from 'react'
import { detailsContext } from '../../App'
import "./index.css"

const Addons = () => {
  const {plan, setPlan, planperiod, setPlanPeriod, nextpage, goBack} = useContext(detailsContext);


  const pageForward = (no) => {
    nextpage(no)
  }

  const pageBackward = (no) => {
    goBack(no)
  }


  const onlinePrice = planperiod === 'Monthly' ? '+$1/mo' : '+$10/yr';
  const storagePrice = planperiod === 'Monthly' ? '+$2/mo' : '+$20/yr';
  const profilePrice = planperiod === 'Monthly' ? '+$2/mo' : '+$20/yr';

  return (
    <div>
      <h1 className='personal-head'>Pick add-ons</h1>
      <p className='personal-desc'>Add-ons help enhance your gaming experience.</p>
      <div className='add-on'>
      <input type="checkbox" className='check'/>
        <div>
          <p>Online service</p>
          <p>Access to multiplayer games</p>
        </div>
        <p>{onlinePrice}</p>
      </div>
      <div className='add-on'>
      <input type="checkbox" className='check'/>
        <div>
          <p>Largest Storage</p>
          <p>Extra 1TB of cloud storage</p>
        </div>
        <p>{storagePrice}</p>
      </div>
      <div className='add-on'>
      <input type="checkbox" className='check'/>
        <div>
          <p>Customizable Profile</p>
          <p>custom theme on your profile</p>
        </div>
        <p>{profilePrice}</p>
      </div>
      <div className='buttons'>
      <button onClick={() => pageBackward(2)} className='backControl'>Go Back</button>  
      <button onClick={() => pageForward(4)} className='forwardControl'>Next Step</button>
      </div>
    </div>
  )
}

export default Addons