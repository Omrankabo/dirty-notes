import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <div className="flex flex-col md:items-center justify-center gap-2 my-8 h-[75vh] md:max-w-[584px] mx-auto  ">
        <h1 class="sm:text-6xl md:text-7xl text-5xl mb-2 font-medium md:text-center ">
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
    </main>
  )
}

export default Home
