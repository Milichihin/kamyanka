import './App.css';
import { navArray } from './Data/navigation.js';
import Header from './Components/Header/Header.jsx';
import Conception from './Components/Conception/Conception.jsx';
import Building from './Components/Building/Building.jsx';
import Principle from './Components/Principle/Principle.jsx';
import Advantages from './Components/Advantages/Advantages.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';

function App() {

  return (
    <div className="App">
      <Header navArray={navArray} />
      <Conception anchor={navArray.Greating} />
      <Building anchor={navArray.Building} />
      <Principle anchor={navArray.Principle} />
      <Advantages anchor={navArray.Advantages} />
      <Contacts anchor={navArray.Contacts} />
    </div>
  );
}

export default App;
