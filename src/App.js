import './App.css';
import React from 'react';
import CurrencySelect from './Components/CurrencySelectComponent';
import Navbar from './Components/Navbar';
import SearchComponent from './Components/Search';
function App() {
  return (
<div className="container flex-wrap bg-slate-400 max-w-full">{/* bg-slate-100 background color to be added,used dark shade for identification of components*/}
<Navbar/>
<div className='flex flex-row'><CurrencySelect/><SearchComponent/></div>
</div>
  );
}

export default App;
