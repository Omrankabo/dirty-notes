import { lazy,Suspense, useEffect, useState} from 'react'
import Loading from '../components/loader/Loading'
import { useSearchParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CategoryItem from '../components/CategoryItem'

const Card = lazy(() =>  import('../components/Card'))



const Notes = () => {
  // list to display buttons
  const filterButtons = [
    {
      Name: 'culculus',
      active: false
    },
    {
      Name: 'linear algebra',
      active: false
    },
    {
      Name: 'sudanese studies',
      active: false
    },
    {
      Name: 'chemistry',
      active: false
    },
    {
      Name: 'physics',
      active: false
    },
    {
      Name: 'all',
      active: false
    },
  ]
  // temporary list
  const noteList = [
    {
      category:'culculus',
      title: 'Horizontal asymptotes',
      description: 'How to evaulate vertical and horizontal asymptotes, and how to show them in a graph.'
    },
    {
      category:'linear algebra',
      title: 'What are vectors?',
      description:'you may heard about vectors but what are they?'
    },
    {
      category:'sudanese studies',
      title: 'sudan timeline exploring',
      description:'how our beloved sudan was formd over the years?'
    },
    {
      category:'chemistry',
      title: 'An atom: a close look',
      description:'you may not know what is an atom yet so lets discover it together.'
    },
    {
      category:'physics',
      title: 'the story behind modren physics',
      description:'lets discove the hard reality about the lovely physics you know so far.'
    },
    {
      category:'culculus',
      title: 'differentail equations',
      description:'where to find them and how to solve them?'
    },
  ]
  const [notes,setNotes] = useState(noteList)

  // handle filter
  const handleFilter = (filter)=>{
    if (filter === 'all') {
      setNotes(noteList)
    }
    else{
      setNotes(noteList.filter((item)=> item.category === filter))
    }
  }
  // useEffect(()=>{
  //   toast.success('NO PAIN NO GAIN',{icon:'👩🏽‍🎓'})
  // },[searchParam])
  
  

  return (
    <section className=' container w-5/6 lg:max-w-[875px] mx-auto'>
      <h1 className='w-full mb-6 text-2xl font-medium uppercase '>Choose a category 👀</h1>
      <div className='flex flex-wrap items-center gap-2 my-6 sm:gap-4'>
        {/* TODO:make it shorter */}
        <CategoryItem handleFilter={handleFilter} category={'culculus'}>#Culculus</CategoryItem>
        <CategoryItem handleFilter={handleFilter} category={'linear algebra'}>#Linear algebra</CategoryItem>
        <CategoryItem handleFilter={handleFilter} category={'sudanese studies'}>#Sudanese studies</CategoryItem>
        <CategoryItem handleFilter={handleFilter} category={'chemistry'}>#Chemistry</CategoryItem>
        <CategoryItem handleFilter={handleFilter} category={'physics'}>#Physics</CategoryItem>
        <CategoryItem handleFilter={handleFilter} category={'all'}>#All</CategoryItem>
      </div>

      <div className='grid grid-cols-1 gap-6 py-8 border-t-2 rounded-sm md:gap-4 sm:grid-cols-2 lg:grid-cols-3 border-secondary-100'>
        {notes.map((note)=>{
        return(<Suspense fallback={<Loading/>}>
            <Card note={note}/>         
          </Suspense>
        )})}
      </div>
      <Toaster/>
    </section>
  )
}

export default Notes
