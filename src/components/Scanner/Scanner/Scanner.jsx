import React from 'react';
import ScannerDescrip from '../ScannerDescrip/ScannerDescrip'
import TextInput from '../TextInput/TextInput'
import Navbar from '../../Navbar/Navbar';

const Scanner = () => {
  return (
    <div>
        <Navbar/>
        <ScannerDescrip/> 
        <TextInput/>
    </div>
  );
}

export default Scanner