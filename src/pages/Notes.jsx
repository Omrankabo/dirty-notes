import React from 'react'
import Card from '../components/Card'
const Notes = () => {
  return (
    //TODO: replace layout class with tailwind one 
    <div className='layout container w-5/6 lg:max-w-[875px] mx-auto'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Notes
