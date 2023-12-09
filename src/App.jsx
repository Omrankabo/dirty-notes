import Nav from './components/Nav';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import { useTheme } from './context/ThemeProvider';

const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme? 'dark' : ''} font-primary text-text-base bg-background-base min-w-screen min-h-screen bggrid`}>
      <Nav/>
      <div className='container md:mx-auto md:max-w-[684px] lg:max-w-[736px]  py-[85px] px-6 lg:px-2 min-h-fit'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
