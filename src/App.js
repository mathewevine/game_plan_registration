import React, {useState, createContext} from 'react';
import './App.css';
import Registration from './components/Registration';


export const detailsContext = createContext();

function App() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState("Arcade");
  const [planperiod, setPlanPeriod] = useState("Monthly");
  const [addons, setAddons] = useState([]);

  const goBack = (no) => {
    setStep(no);
  };

  const nextpage = (no) => {
    setStep(no);
  }; 

  const changePlan = (e) => {
    setPlan(e.target.value);
  };

  const changePeriod = (e) => {
    setPlanPeriod(e.target.value);
  };

  const addingAddons = (adds) => {
    setAddons(adds);
  };

  return (
    <div className="App">
      <detailsContext.Provider value={{step, plan, planperiod, addons, goBack, nextpage, changePlan, changePeriod, addingAddons}}>
      <Registration />
      </detailsContext.Provider>
    </div>
  );
}

export default App;
