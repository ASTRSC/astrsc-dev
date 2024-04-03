import React from 'react';
import Navbar from '../Navbar/Navbar';

const WhatIsASTRSC = () => {

  return (
    <div>
        <Navbar />
        <div className=''>
            <h1 className='text-4xl font-bold dark:text-white text-center mb-3'>WHAT IS ASTRSC?</h1>
            <h2 className='mb-6 text-3xl font-bold dark:text-white'>The Africa Stereotype Scanner (ASTRSC) is a tool that scans text for linguistic elements that often contribute to stereotypes about Africa.</h2>
            <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>ASTRSC does not clearly tell you what to do. It certainly does not guarantee that your article is stereotype-free. If the story you have to write is about conflict or famine, ASTRSC will not change this overall framing. Still, it may help you make this story more considerate of the humanity of the people you are writing about. Stereotypes add insult to injury. Plus, they are not creative. ASTRSC allows you to pick up on some of these before publishing! So go ahead, try it, see your writing through a new lens, and learn more about the history of stereotypes and media coverage of Africa!</p>
            <h2 className='text-3xl font-bold dark:text-white text-center mb-4'>*Disclaimer: ASTRSC does not replace critical thinking or a good editor!</h2>
            <div className="flex justify-center">
              <button className='bg-orange-300 rounded-full'>Try ASTRSC</button>
            </div>
        </div>
    </div>
  );
}

export default WhatIsASTRSC