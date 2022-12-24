import './App.css';
import CurrencySelect from './Components/CurrencySelectComponent';
import Navbar from './Components/Navbar';
import SearchComponent from './Components/Search';
function App() {
  return (
<div className="container px-0 bg-slate-100">
<Navbar/>
<CurrencySelect/>
<SearchComponent/>
</div>
  );
}

export default App;
