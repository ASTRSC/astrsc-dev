import React from 'react';

const Header = () => {
  const smoothScroll = () => {
    const header2Section = document.getElementById('header2');
    header2Section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className='mt-60 mb-60 p-40'>
      <h1 className='mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>WE ARE ALL ACCOUNTABLE FOR THE STORIES WE TELL, EVEN MORE SO WHEN WE TELL OTHER PEOPLE'S STORIES.</h1>
      <div className="flex justify-center">
        <button className="bg-orange-300 hover:bg-orange-400 hover:border-orange-400 text-white font-bold py-2 px-4 rounded-full" onClick={smoothScroll}>
          Learn about ASTRSC
        </button>
      </div>
    </section>
  );
}

export default Header