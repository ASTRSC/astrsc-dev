import Navbar from "../Navbar/Navbar";

const Advocacy = () => {

  return (
    <div>
        <Navbar/>
        <div className="px-20">
            <h1 className='text-4xl font-bold dark:text-white mb-3'>Reading List</h1>
            <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400'>We do not believe technological solutions alone can solve complex political and social issues. ASTRSC is one contribution to broader calls for media accountability in news coverage of Africa. The tool can serve a pedagogical role for individual journalists. However, we recognize structural conditions that underpin this landscape of stereotypical representations. Therefore, we actively support calls for more fundamental organizational and institutional reforms, including but not limited to the following:</p>
            <ul className="list-disc">
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Greater staff diversity across the news production chain, including notably African journalists in positions of correspondents
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Implementing media monitoring teams within news organizations to evaluate, on an ongoing basis, whether coverage contributes to the reproduction of stereotypes
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Greater recognition for the contributions and importance of local workers like fixers and stringers
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    The consistent use of editorial standards, in particular for displaying images of dead bodies to address racist and unequal treatments
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Centering multilingualism as a core skill for correspondents working across Africa
                </li>
                <li className='mb-3 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Reconsidering the usefulness of the ‘Africa correspondent’ job description as opposed to more regionally specific ones
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Advocacy