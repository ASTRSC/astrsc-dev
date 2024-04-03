import Navbar from "../Navbar/Navbar";

const Generalization = () => {

  return (
    <div>
        <Navbar/>
        <div className="px-20">
            <h1 className='text-4xl font-bold dark:text-white mb-3'>Generalization</h1>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>When is the last time you referred to Justin Trudeau as a North American politician? How about the last time you described a book by an Australian author as Oceanian literature? Have you ever made a broad statement about the state of Asia’s economy? Yes, all of it, Japan, Iran, Sri Lanka, Yemen, and Turkmenistan all included.</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>Chances are you wouldn’t do that. Some of these wordings may be odd, while others are downright inappropriate or confusing. Such generalizing statements about an entire continent can obfuscate information, downplay the specific context of each country, and perpetuate sweeping stereotypes. Yet, this is exactly how the media has been portraying Africa for decades (<a href="">Don’t believe us? Check out the data here</a>)</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>This is especially ironic when Africa is massive and incredibly diverse by any metrics. With 54 nations, it has more countries than any other continent. It is also the second largest in terms of both size and population. It is the home of over a billion people, speaking about 2000 languages. In short, Africa is not a country, and it shouldn’t be portrayed like one.</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>Why does this matter? The homogenization of Africa serves to reduce the entire continent to its stereotypes. More importantly, when Africa is treated as a country, it can have tangible negative consequences on its people. For example, when a journalist writes a headline about Ebola in “Africa”, readers do not know that South Africa registered fewer cases than the United States, nor do they realize that Tanzania is further away from the epidemic than Spain is. This can negatively impact the tourism industry of countries completely unaffected by crises in places several thousands of miles away. Similarly, when a publication deplores <a href="https://www.reuters.com/article/us-africa-economy-worldbank-idUSKCN11Z258/">Africa’s slow economic growth in 2016</a>, it fails to capture the differences between the -9.7% recession in Chad, and the massive 8.75% growth in Ivory coast that year. The monolithic framing of this data can shape public discourse, skew the decisions of investors, or lead politicians and development agencies to impose cookie-cutter solutions to entirely different economies.</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>So, what can you do to combat this cliché? Be specific in your writing, and consider the following tips:</p>
            <ul className="list-disc">
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Say what you mean; If you are covering Mozambique, refer to it as Mozambique.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Every time you make a statement about “Africa” ask yourself if you actually mean the entire continent.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Every time you refer to someone as an “African” politician, artist, intellectual, athlete, or public figure, ask yourself why that is relevant. If you are writing about an African Union meeting or an African Cup of Nations game, it may be totally appropriate, but more often than not, you may find it is irrelevant.
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    If all else fails, imagine replacing your mentions of “Africa” with “Asia”, “North America”, or “Europe”. Does it not have the same ring to it? Does it feel out of place? If you find that to be true, stop to reconsider your wording.
                </li>
            </ul>
        
            <div className="flex justify-center">
              <button className='bg-orange-300 rounded-full'>Try ASTRSC</button>
            </div>
        </div>
    </div>
  );
}

export default Generalization