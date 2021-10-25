
import './App.css';

import SingleWeather from './components/forms/SingleWeather/SingleWeather';
import SingleButton from './components/forms/SearchButton/SearchButton';
import SearchWrapper from './components/forms/SearchWrapper/SearchWrapper';

function App() {
  // { process.env.REACT_APP_API_KEY }
  return (
    <div className="App">
      <SearchWrapper />
    </div>
  );
}

export default App;
