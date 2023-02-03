import './App.css';
import React from 'react';
import CurrencySelect from './Components/CurrencySelectComponent';
import Navbar from './Components/Navbar';
import SearchComponent from './Components/Search';
import LineChart from './Components/LineChart'
function App() {
  return (
<div className="container bg-slate-400 max-w-full px-0">{/* bg-slate-100 background color to be added,used dark shade for identification of components*/}
  <Navbar/>
    <div className='flex flex-row  min-w-max mt-9 pt4'>
      <CurrencySelect/>
      <SearchComponent/>
    </div>
    <div>
      <LineChart/></div>
</div>
  );
}

export default App;
