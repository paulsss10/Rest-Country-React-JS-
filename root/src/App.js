import MainComponent from './Components/MainComponent';
import Navbar from './Components/Navbar';
import './Sass/styles.scss'
import { StateContextProvider } from './Contexts/StateContext';

function App() {
  return (
    <div className="App">
      <StateContextProvider>
        <Navbar />
        <MainComponent />
      </StateContextProvider>
    </div>
  );
}

export default App;
