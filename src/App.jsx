import React from 'react';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Navbar from './components/Navbar/Navbar'
import ScannerDescrip from './components/Scanner/ScannerDescrip/ScannerDescrip';
import TextInput from './components/Scanner/TextInput/TextInput';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Header2 />
      <ScannerDescrip/>
      <TextInput/>
      {/* <City /> */}
    </div>
  );
}

export default App