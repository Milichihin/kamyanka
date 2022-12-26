import './App.css';
import Logo from './Components/Logo/Logo.jsx';
import Greating from './Components/Greating/Greating.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Building from './Components/Building/Building.jsx';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Greating />
      <Gallery />
      <Building />
    </div>
  );
}

export default App;
