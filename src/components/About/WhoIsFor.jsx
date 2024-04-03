import React from 'react';
import Navbar from '../Navbar/Navbar';

const WhoIsFor = () => {

  return (
    <div>
        <Navbar/>
        <div className='px-20'>
            <h1 className='text-4xl font-bold dark:text-white mb-3'>Who is ASTRSC for?</h1>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>Stereotypes often creep in because of ignorance and unconscious biases. We primarily designed ASTRSC for journalists, particularly for <span className='font-bold'>journalists writing African news stories for the first time and journalists in training</span>. ASTRSC is an opportunity for them to reflect on their writing practices and accountability while learning about key debates surrounding stereotyping and media representations of Africa.</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>But even <span className='font-bold'>seasoned journalists</span> can find ASTRSC useful (yes, <a href="https://africasacountry.com/2017/08/jeffrey-gettlemans-tired-tome/">Jeffrey Gettleman</a>, we are looking at you). Several recent studies on international journalists in Africa (<a href="https://www.amazon.com/Africas-Media-Image-21st-Century/dp/1138962325">here</a>, <a href="https://repositorio.ismt.pt/server/api/core/bitstreams/e940bdf4-9de0-409f-a5e7-b33bf27b6875/content">here</a> and <a href="https://www.tandfonline.com/doi/abs/10.1080/1461670X.2016.1262748?journalCode=rjos20">here</a>) found that many professionals are aware of these issues of negative representations of Africa, and <a href="https://www.cjr.org/analysis/60_minutes.php">wish to see coverage of Africa improve in quantity and quality</a>. But stereotypes can also creep into the writing of experienced journalists, particularly when the urgency of news production leaves little time to second-guess all your linguistic choices. That’s why ASTRSC is simple and quick: for these more experienced-but-hurried journalists, ASTRSC will be a sort of annoying-yet-constructive poke: “are you sure, you mean Africa here and not East Africa, or perhaps just Tanzania?”; “you mentioned tribes; it might be relevant to you story, but did you make sure to contextualize this properly?” We hope it will encourage them to think reflexively about their writing and positionality. They may also learn a few interesting things from the latest research on Africa’s media image.</p>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>Ultimately, ASTRSC is for anyone involved in producing representations of Africa through written text and who cares about the impact of their writing. 
            We see it being relevant to <span className='font-bold'>all journalists, foreign and local, operating in Africa, communication professionals
            </span> more broadly – <span className='font-bold'>from PR experts and advertisers to NGO communication officers, bloggers and scholars</span> (hello hello <a href="https://www.nytimes.com/2017/08/18/opinion/joseph-conrad-congo-river.html?mcubz=3">Maya Jasanof</a> and <a href="https://www.nas.org/academic-questions/31/2/the_case_for_colonialism">Bruce Gilley</a> !).</p>
           
        </div>
    </div>
  );
}

export default WhoIsFor