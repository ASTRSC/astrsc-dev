import React from 'react';

const TextInput = () => {
  return (
    <section className='px-20 mt-6'>
      <div className="mb-6">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your article about Africa below</label>
        <input type="text" id="large-input" className="block w-full px-10 h-60 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="flex justify-center">
        <button className='bg-green-200 hover:bg-green-300 hover:border-green-300 rounded-full'>Scan Article</button>
      </div>
    </section>
    
  );
}

export default TextInput