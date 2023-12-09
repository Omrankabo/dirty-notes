import { Link } from 'react-router-dom'
import {FaTelegram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer class="text-text body-font mt-6 container md:mx-auto md:max-w-[684px] lg:max-w-[736px]">
      <div class="container px-5 pb-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to={'/'} class="flex title-font font-medium items-center md:justify-start justify-center text-text">
          <span class="ml-3 text-xl">Dirty Notes</span>
        </Link>
        <p class="text-sm text-text sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Dirty Notes —
          <a href="https://twitter.com/omrankabo" class="text-text ml-1" rel="noopener noreferrer" target="_blank">@omrankabo</a>
        </p>
        <span class="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <FaTelegram className='text-2xl cursor-pointer' />
          <FaWhatsapp className='text-2xl cursor-pointer' />
        </span>
      </div>
    </footer>
  
  )
}

export default Footer
