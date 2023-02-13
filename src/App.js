import './App.css';
import React from 'react';
import CurrencySelect from './Components/CurrencySelectComponent';
import Navbar from './Components/Navbar';
import SearchComponent from './Components/Search';
import LineChart from './Components/LineChart'
import MarketCap from './Components/MarketCap';
function App() {
  return (
<div className="flex-wrap sm:justify-left container max-w-full px-0 py-0">{/* bg-slate-100 background color to be added,used dark shade for identification of components*/}
  <Navbar/>
  <div class="mx-8 bg-slate-200">
    <div className='flex min-w-max mt-9 p-4'>
      <CurrencySelect/>
      <SearchComponent/>
    </div>
      <div class="px-5 py-4">
        <LineChart/>
      </div>  
      <div class="px-5 py-4">  
        <MarketCap/>
      </div>
    </div>
  </div>
  );
}

export default App;
