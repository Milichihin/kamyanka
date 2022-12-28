import './App.css';
import Logo from './Components/Logo/Logo.jsx';
import Greating from './Components/Greating/Greating.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Building from './Components/Building/Building.jsx';
import Principle from './Components/Principle/Principle.jsx';
import Advantages from './Components/Advantages/Advantages.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Greating />
      <Gallery />
      <Building />
      <Principle />
      <Advantages />
      <Contacts />
    </div>
  );
}

export default App;
