import './App.css';
import Concept from './Components/Conception/Conception';
import Gallery from './Components/Gallery/Gallery.jsx'
import Navigation from './Components/Navigation/Navigation.jsx'
import Conception from './Components/Conception/Conception.jsx'

function App() {
  return (
    <div className="App">
      <h1>Kamyanka</h1>
      <Navigation/>
      <Gallery/>
      <Conception/>
    </div>
  );
}

export default App;
