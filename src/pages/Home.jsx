import { Link } from "react-router-dom"
import pic from '../assets/imgs/creator.png'
import pic1 from '../assets/imgs/mobile.png'
import pic2 from '../assets/imgs/web.png'
import Card from '../components/Card'
const Home = () => {
  return (
    <main>
      <div className="flex flex-col md:items-center justify-center gap-2 my-8 h-[75vh] md:max-w-[584px] mx-auto  ">
        <h1 class="sm:text-6xl text-5xl mb-2 font-medium md:text-center ">
          Get some Magical
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-base to-secondary-base"> Notes</span> to study better!. 
          
        </h1>
        <p className="mb-4 text-sm md:text-center">
          Tired of taking notes and make summaries? we will provide you with some helpfull notes and summaries for most essantail topics like culculus, linear algebra, and many others.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row">
          <Link to='/notes' className="w-full px-2 py-2 text-center rounded-md bg-accent text-text-100" role="button">Begin your journey</Link>
          <Link to='/contact' className="w-full px-2 py-2 text-center rounded-md bg-secondary-base text-text-100" role="button">Give us some feedback</Link>
        </div>
        {/* <div> Scroll dowm to see more</div> */}
      </div>
      {/* about */}
      <section className="min-h-screen">
        <h1 className="text-4xl font-medium text-center sm:text-5xl">Why dirty notes?</h1>
        <p className="mt-2 text-sm text-center">you want to study better and cut your time to helf?</p>
        {/* benefits cards */}
        {/* TODO:flex wrapp in tailwind */}
        <div className="flex flex-col items-center gap-6 py-10 md:gap-4 md:flex-row flex-wrapp">
          {/* item one */}
          <div className="flex flex-col items-center justify-center flex-1 w-full p-4 md:w-5/6 bg-background-50 background  max-w-[350px] hover:shadow-lg rounded-lg">
            <img className="m-4" src={pic} alt="3d geomatrical shape" width={76}/>
            <div className="flex flex-col items-center gap-6 mb-4">
              <h2 className="font-medium border-b-4 rounded-md border-primary-base">Time saving</h2>
              <p className="w-2/4 text-center sm:w-3/4 ">Save a lot of your time while studing by knowing which to study and to focus in.</p>
            </div>
          </div>
          {/* item two */}
          <div className="flex flex-col items-center justify-center flex-1 w-full p-4 md:w-5/6 sm:h-[388px] bg-background-50 background max-w-[330px] hover:shadow-lg rounded-lg">
            <img className="m-4" src={pic1} alt="3d geomatrical shape" width={76}/>
            <div className="flex flex-col items-center gap-6 mb-4">
              <h2 className="font-medium border-b-4 rounded-md border-primary-base">Another perspective</h2>
              <p className="w-2/4 text-center sm:w-5/6 ">Absorb information from many different points of view for better comprehension.</p>
            </div>
          </div>
          {/* item three */}
          <div className="flex flex-col items-center justify-center flex-1 w-full p-4 md:w-5/6 bg-background-50 background hover:shadow-lg max-w-[350px] rounded-lg">
            <img className="m-4" src={pic2} alt="3d geomatrical shape" width={76}/>
            <div className="flex flex-col items-center gap-6 mb-4">
              <h2 className="font-medium border-b-4 rounded-md border-primary-base">Basics made sample</h2>
              <p className="w-2/4 text-center sm:w-5/6 ">notes about some major concepts that you need to fully understand any topic.</p>
            </div>
          </div>
        </div>
        <div className="mb-8 text-center text-md sm:mb-0 ">THIS IS JUST THE BEGINNING 😉</div>
      </section>
      {/* why us */}
      <section className="min-h-screen">
      <h1 className="text-4xl font-medium text-center sm:text-5xl">Some <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-base to-secondary-base">ingredients</span> to test 😉</h1>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card/>
        <Card/>
        <Card/>
      </div>
      </section>
      
    </main>
  )
}

export default Home
