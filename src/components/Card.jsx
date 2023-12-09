import React from 'react'
import pic from '../assets/imgs/pic3.jpg'
const Card = () => {
  return (
    <div class="p-4  md:w-7/8">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={pic} alt="blog"/>
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg font-medium text-white mb-3">Horizontal asymptotes</h1>
          <p class="leading-relaxed mb-3">How to evaulate vertical and horizontal asymptotes, and how to show them in a graph.</p>
          <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/'>Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
              </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
