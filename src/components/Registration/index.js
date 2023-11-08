import React, {useContext} from 'react';
import Personal from '../Personal';
import Plans from '../Plan';
import Addons from '../Addons';
import Summary from '../summary';
import { detailsContext } from '../../App';
import "./index.css";

const Registration = () => {
  const {step} = useContext(detailsContext)
  
  return (
    <div className='registration'>
    <div className='left-panel'>
        <div className='step'>
          <div className='step-no '>
           1 
          </div>
          <div className='step-detail'>
          <p className='step-name'>STEP 1</p>
          <p className='step-info'>YOUR INFO</p>
          </div>
        </div>
        <div className='step'>
          <div className='step-no'>
           2 
          </div>
          <div className='step-detail'>
          <p className='step-name'>STEP 2</p>
          <p className='step-info'>SELECT PLAN</p>
          </div>
        </div>
        <div className='step'>
          <div className='step-no'>
           3 
          </div>
          <div className='step-detail'>
          <p className='step-name'>STEP 3</p>
          <p className='step-info'>ADD-ONS</p>
          </div>
        </div>
        <div className='step'>
          <div className='step-no'>
           4 
          </div>
          <div className='step-detail'>
          <p className='step-name'>STEP 4</p>
          <p className='step-info'>SUMMARY</p>
          </div>
        </div>
      </div>
      <div className='form'>
      {(() => {
      switch (step) {
        case 1:
          return <Personal />;
        case 2:
          return <Plans />;
        case 3:
          return <Addons />;
        case 4:
          return <Summary />;
        default:
          // Handle the default case if needed
      }
    })()}
    </div>
    </div>
  )
}

export default Registration