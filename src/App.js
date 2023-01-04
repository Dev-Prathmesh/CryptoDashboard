import './App.css';
import React from 'react';
import CurrencySelect from './Components/CurrencySelectComponent';
import Navbar from './Components/Navbar';
import SearchComponent from './Components/Search';
function App() {
  return (
<div className="container max-w-full px-0">{/* bg-slate-100 background color to be added,used dark shade for identification of components*/}
<Navbar/>
<div className='flex flex-row bg-slate-400 min-w-max mt-9 pt4' ><CurrencySelect/><SearchComponent/></div>
</div>
  );
}

export default App;
