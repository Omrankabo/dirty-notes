import Nav from './components/Nav';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import { useTheme } from './context/ThemeProvider';
import SingleNote from './pages/SingleNote';

const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme? 'dark' : ''} font-primary text-text-base bg-background-base min-w-screen min-h-screen bggrid flex flex-col items-center justify-center `}>
      <Nav/>
      <div className='container sm:max-w-[600pxs] md:mx-auto md:max-w-[700px] lg:max-w-[986px]  py-[85px] px-6 lg:px-2 min-h-fit '>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Note' element={<SingleNote/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
