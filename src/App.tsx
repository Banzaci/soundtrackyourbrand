import './styling/Artists.css';
import './styling/App.css';
import Loader from './components/loader/Loader';
import Artists from './components/artists/Artists';
import { AppContextProvider } from './context/AppContext';
import Scrobble from './components/scrobble/Scrobble';


function App() {

  return (
    <div className="container">
      <AppContextProvider>
        <Scrobble />
        <Loader />
        <Artists />
      </AppContextProvider>
    </div>
  );
}

export default App;
