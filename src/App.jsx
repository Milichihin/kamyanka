import './App.css';
import { navArray } from './Data/navigation.js';
import Header from './Components/Header/Header.jsx';
import Conception from './Components/Conception/Conception.jsx';
import Building from './Components/Building/Building.jsx';
import Principle from './Components/Principle/Principle.jsx';
import Advantages from './Components/Advantages/Advantages.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import { useState } from 'react';
import { QueueContext, HeaderContext } from "./Context.js";


function App() {

  const [toggleWindow, setToggleWindow] = useState(false);
  const [opacityBack, setOpacityBack] = useState({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)" });
  const [modalStyle, setModalStyle] = useState({ left: "-100vw" });
  const [backButtonStyle, setBackButtonStyle] = useState({ marginRight: "-200px"  });
  const [burgerStyle, setBurgerStyle] = useState({ marginRight: "20px" });

  async function showDetails() {
    setOpacityBack({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)" });
    setModalStyle({ left: "-100vw" });
    setToggleWindow(true);
    setBurgerStyle({ marginRight: "-50px" });
    await new Promise((resolve, reject) => setTimeout(resolve, 10));
    setBackButtonStyle({ marginRight: "-70px" });
    setOpacityBack({ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.716)" });
    setModalStyle({ left: "0" });
    await new Promise((resolve, reject) => setTimeout(resolve, 200));
    document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
    document.body.style.paddingRight = toggleWindow ? '0px' : '17px';
    await new Promise((resolve, reject) => setTimeout(resolve, 50));
    setOpacityBack({ opacity: 1, backgroundColor: "white" });

  }

  async function hideDetails() {
    document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
    document.body.style.paddingRight = toggleWindow ? '0px' : '17px';
    setOpacityBack({ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.716)" });
    setModalStyle({ left: "0" });
    await new Promise((resolve, reject) => setTimeout(resolve, 200));
    setOpacityBack({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)" });
    await new Promise((resolve, reject) => setTimeout(resolve, 10));
    setBackButtonStyle({ marginRight: "-200px" });
    setBurgerStyle({ marginRight: "20px" });
    setModalStyle({ left: "-100vw" });
    await new Promise((resolve, reject) => setTimeout(resolve, 400));
    setToggleWindow(false);

  }


  return (
    <QueueContext.Provider value={[showDetails, hideDetails, toggleWindow, opacityBack, modalStyle]}>
      <HeaderContext.Provider value={[backButtonStyle, burgerStyle]}>
        <div className="App">
          <Header navArray={navArray} />
          <Conception anchor={navArray.Greating} />
          <Building anchor={navArray.Building} />
          <Principle anchor={navArray.Principle} />
          <Advantages anchor={navArray.Advantages} />
          <Contacts anchor={navArray.Contacts} />
        </div>
      </HeaderContext.Provider>
    </QueueContext.Provider>
  );
}

export default App;
