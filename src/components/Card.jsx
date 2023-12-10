import { IoMdArrowForward } from "react-icons/io";

const Card = () => {
  return (
    // TODO: change into react-router link to this particular topic
      <div class=" border-2 border-secondary-100 border-opacity-60 rounded-lg overflow-hidden">
        <div class="p-6 bg-background-50">
          <h2 class="tracking-widest text-xs title-font font-medium text-accent mb-1">#Culculus</h2>
          <h1 class="title-font text-lg font-medium text-text-base mb-2">Horizontal asymptotes</h1>
          <p class="leading-relaxed mb-2 text-sm text-text-800">How to evaulate vertical and horizontal asymptotes, and how to show them in a graph.</p>
          <div class="flex items-center flex-wrap">
              <a class="text-text-base inline-flex items-center gap-2 md:mb-2 lg:mb-0" href='/note'>Learn More
              <IoMdArrowForward/>
              </a>
          </div>
        </div>
      </div>
  )
}

export default Card;
