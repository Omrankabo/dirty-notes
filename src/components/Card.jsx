import { IoMdArrowForward } from "react-icons/io";
import Box from "./Box";

const Card = () => {
  return (
    // TODO: change into react-router link to this particular topic
      <Box>
        <div className="p-6 bg-background-50">
          <h2 className="tracking-widest text-xs title-font font-medium text-accent mb-1">#Culculus</h2>
          <h1 className="title-font text-lg font-medium text-text-base mb-2">Horizontal asymptotes</h1>
          <p className="leading-relaxed mb-2 text-sm text-text-800">How to evaulate vertical and horizontal asymptotes, and how to show them in a graph.</p>
          <div className="flex items-center flex-wrap">
              <a className="text-text-base inline-flex items-center gap-2 md:mb-2 lg:mb-0" href='/note'>Learn More
              <IoMdArrowForward/>
              </a>
          </div>
        </div>
      </Box>
  )
}

export default Card;
