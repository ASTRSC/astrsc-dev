import { useState } from 'react';
import React from 'react';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Navbar from './components/Navbar/Navbar'
import Scanner from './components/Scanner/Scanner/Scanner';
// import TextInput from './components/Scanner/TextInput/TextInput';
// import ScannerDescrip from './components/Scanner/ScannerDescrip/ScannerDescrip';


const App = () => {
  const [tryButtonClicked, setTryButtonClicked] = useState(false);
  const handleTryButtonClick = (data) => {
    setTryButtonClicked(data.buttonClicked);
  }
  return (
    <div>
      <Navbar />
      {!tryButtonClicked && <Header />}
      {!tryButtonClicked && <Header2 onTryClick={handleTryButtonClick}/>}
    </div>
  );
}

export default App