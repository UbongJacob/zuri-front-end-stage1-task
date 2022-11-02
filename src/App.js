import FooterImage from './assets/icons/I4G.svg'
import { ReactComponent as GithubIcon } from './assets/icons/github.svg'
import { ReactComponent as SlackIcon } from './assets/icons/slack.svg'
import ProfilePicture from './assets/img/profile-img.jpg'
import listData from './assets/listData'

function App() {
  return (
    <main className="py-11">

      <figure className='flex  items-center flex-col mb-10 '>
        <img id='profile_img' src={ProfilePicture} alt="Annette Black" className='w-20 rounded-full' />
        <figcaption id='twitter' className='font-bold text-lg'>UbonggJacob</figcaption>
        <p id="slack" className='hidden'>UbongJacob</p>
      </figure>

      <ul className='w-[90%] mx-auto flex flex-col  gap-y-3'>
        {
          listData.map(({ id, route, title }, index) => {
            return <li key={index} className='bg-gray-400  rounded flex justify-center '>
              <a type='button' id={id} href={route} className="py-4 text-center" >{title}</a>
            </li>
          }
          )
        }

      </ul>

      <section className='flex items-center justify-center gap-x-5 my-5'>
        <a href='https://github.com/UbongJacob'> <GithubIcon /></a>
        <SlackIcon />
      </section>

      <hr className='mt-16 mb-8  w-[90%] mx-auto' />
      <footer className='flex flex-wrap gap-5 justify-evenly items-center'>
        <p className='font-semibold text-2xl gap-x-1 flex items-center '>Zuri <span className='h-2 rounded-full w-2 bg-red-500' /> Internship</p>
        <p className='text-gray-600'>HNG Internship 9 Frontend Task</p>
        <img src={FooterImage} alt="I4G" />
      </footer>
    </main>
  );
}

export default App;
