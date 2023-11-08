import React, {useContext, useState} from 'react'
import { detailsContext } from '../../App';
import "./index.css";

const Personal = () => {
  const {nextpage} = useContext(detailsContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const changePage = (no) => {
    nextpage(no)
  }

  return (
    <div>
      <h1 className='personal-head'>Personal Info</h1>
      <p className='personal-desc'>Please provide your name, email address, and phone number</p>
      <form>
        <label>Name</label><br/>
        <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g. Stephen King'/><br/>
        <label>Email Address</label><br/>
        <input className='input'  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g. stephenking@torem.com'/><br/>
        <label>Phone Number</label><br/>
        <input className='input'  type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='e.g. +1 234 457 890' /><br/>
        <button onClick={() => changePage(2)} className='next-btn'>Next Step</button>
      </form>

    </div>
  )
}

export default Personal