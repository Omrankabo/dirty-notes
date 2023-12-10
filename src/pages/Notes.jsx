import React from 'react'
import Card from '../components/Card'
const Notes = () => {
  return (
    <section className=' container w-5/6 lg:max-w-[875px] mx-auto'>
      <h1 className='w-full mb-6 text-2xl font-medium uppercase '>Choose a category 👀</h1>
      <div className='flex flex-wrap items-center gap-2 my-6 sm:gap-4'>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-accentLighter w-fit'>#Culculus</div>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-accentLighter w-fit'>#Linear algebra</div>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-accentLighter w-fit'>#Sudanese studies</div>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-accentLighter w-fit'>#Chemistry</div>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-accentLighter w-fit'>#Physics</div>
        <div className='px-3 py-1 cursor-pointer rounded-xl text-text-100 bg-active w-fit'>#All</div>
      </div>

      <div className='grid grid-cols-1 gap-6 py-8 border-t-2 rounded-sm md:gap-4 sm:grid-cols-2 lg:grid-cols-3 border-secondary-100'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default Notes
