import Navbar from "../Navbar/Navbar";

const ReadingList = () => {

  return (
    <div>
        <Navbar/>
        <div className="px-20">
            <h1 className='text-4xl font-bold dark:text-white mb-3'>Reading List</h1>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>ASTRSC draws on the insights of generations of scholars, writers, and activists. Below is a short reading list on media representations of Africa that inspired the development of the project.</p>
            <ul className="list-disc">
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Binyavanga Wainaina (2005) “How to write about Africa“, Granta.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Binyavanga Wainaina (2012) “How not to write about Africa in 2012 – A beginner’s guide“, The Guardian.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Chimamanda Ngozi Adichie (2009) “The danger of a single story“, TED.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Ngũgĩ wa Thiong’o (2012) “The language of scholarship in Africa“, Leeds African Studies Bulletin.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Chinua Achebe (1977) “An image of Africa: Racism in Conrad’s ‘Heart of Darkness‘”, Massachusetts Review.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Teju Cole (2012) “The white-savior industrial complex“, The Atlantic.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Nanjala Nyabola (2014) “Why do western media get Africa wrong?“, Al-Jazeera.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Howard French (2015) “How does Africa get reported? A letter of concern to 60 Minutes“.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Mukoma Wa Ngugi (2012) “The western journalist in Africa“, Africa is a Country.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Mohamed El Dahshan (2016) “The US elections and their aftermath covered as we do African elections”.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Ranga Mberi (2016) “If it had happened over there”.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Jina Moore (2012) “The white’s correspondent burden“, Boston Review.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Stuart Hall (1996) “The West and the Rest: Discourse and Power”
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Beverly G. Hawk (1992) Africa’s Media Image, Praeger.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Mel Bunce, Suzanne Franks and Chris Paterson (2016) Africa’s Media Image in the 21st century, Routledge.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Toussaint Nothias (2020) “Postcolonial Reflexivity in the News industry“, Journal of Communication
                </li>
            </ul>
        </div>
    </div>
  );
}

export default ReadingList