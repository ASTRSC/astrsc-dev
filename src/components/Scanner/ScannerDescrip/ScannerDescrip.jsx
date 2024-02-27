import React from 'react';

const TextInput = () => {
  return (
    <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
            <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> How it works</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor"  strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5"></path> {/* stroklinecap="round" */}
            </svg>
            </button>
        </h2>
        <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
            <ol>
                <li><strong>Write or paste</strong>  your text in the text box below</li>
                <li><strong>Click</strong> “Scan Article”</li>
                <li>ASTRSC will <strong>highlight</strong> words and expressions in your text that generally reinforce several tropes about Africa</li>
                <li><strong>Hover</strong> over the highlighted words to view a brief description of the tropes each word may be reinforcing</li>
                <li><strong>Click</strong> on the provided links to learn about their origins, pervasiveness, and effects and see constructive ideas and suggestions</li>
                <li>Scroll down to <strong>view</strong> a pie chart visualizing the number of words highlighted</li>
                <li><strong>Optional:</strong> click the "Show Breakdown of Voices" button to view a  breakdown of quotes in your text</li>
            </ol>
        </div>
    </div>
  );
}

export default TextInput