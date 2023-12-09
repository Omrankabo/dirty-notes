import { Link } from "react-router-dom"
import pic from '../assets/imgs/creator.png'
import pic1 from '../assets/imgs/mobile.png'
import pic2 from '../assets/imgs/web.png'
// import Card from '../components/Card'
const Home = () => {
  return (
    <main>
      <div className="flex flex-col md:items-center justify-center gap-2 my-8 h-[75vh] md:max-w-[584px] mx-auto  ">
        <h1 class="sm:text-6xl text-5xl mb-2 font-medium md:text-center ">
          Get some Magical
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Notes</span> to study better!. 
          
        </h1>
        <p className="mb-4 text-sm md:text-center">
          Tired of taking notes and make summaries? we will provide you with some helpfull notes and summaries for most essantail topics like culculus, linear algebra, and many others.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row">
          <Link to='/notes' className="w-full px-2 py-1 text-center rounded-md bg-primary text-text" role="button">Begin your journey</Link>
          <Link to='/contact' className="w-full px-2 py-1 text-center rounded-md bg-secondary" role="button">Give us some feedback</Link>
        </div>
        {/* <div> Scroll dowm to see more</div> */}
      </div>
      {/* about */}
      <section className="h-screen">
        <h1 className="text-5xl font-medium text-center sm:text-6xl">Why dirty notes?</h1>
        <p className="mt-2 text-sm text-center">you want to study better and cut your time to helf?</p>
        {/* benefits cards */}
        {/* TODO:flex wrapp in tailwind */}
        <div className="flex flex-col gap-16 md:flex-row flex-wrapp">
          {/* item one */}
          <div className="">
            <img src={pic} alt="3d geomatrical shape" width={56}/>
            <div>
              <h2>Time saving</h2>
              <p>Save a lot of your time will studing by knowing which to study and to focus in.</p>
            </div>
          </div>
          {/* item two */}
          <div className="">
            <img src={pic1} alt="3d geomatrical shape" width={56}/>
            <div>
              <h2>Get another perspective</h2>
              <p>Absorb information from different point of view for better comprehension.</p>
            </div>
          </div>
          {/* item three */}
          <div className="">
            <img src={pic2} alt="3d geomatrical shape" width={56}/>
            <div>
              <h2>Basics made sample</h2>
              <p>notes about some major concepts that you need to fully understand any topic.</p>
            </div>
          </div>
        </div>
        <div className="text-center text-md ">THIS IS JUST THE BEGINNING 😉</div>
      </section>
      {/* why us */}
      <section>
      <h1 className="h-screen text-5xl font-medium text-center sm:text-6xl">Some <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ingredients</span> to test 😉</h1>
      </section>
      
    </main>
  )
}

export default Home
