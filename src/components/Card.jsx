import React from 'react'
import pic from '../assets/imgs/pic3.jpg'
const Card = () => {
  return (
    // TODO: change into react-router link to this particular topic
      <div class=" border-2 border-secondary-100 border-opacity-60 rounded-lg overflow-hidden">
        <img loading='lazy' class="object-center h-36 md:h-36 w-full object-cover " src={pic} alt="blog"/>
        <div class="p-6 bg-background-50">
          <h2 class="tracking-widest text-xs title-font font-medium text-accent mb-1">#Culculus</h2>
          <h1 class="title-font text-lg font-medium text-text-base mb-2">Horizontal asymptotes</h1>
          <p class="leading-relaxed mb-2 text-sm text-text-800">How to evaulate vertical and horizontal asymptotes, and how to show them in a graph.</p>
          <div class="flex items-center flex-wrap">
              <a class="text-text-base inline-flex items-center md:mb-2 lg:mb-0" href='/'>Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
              </svg>
              </a>
          </div>
        </div>
      </div>
  )
}

export default Card;
