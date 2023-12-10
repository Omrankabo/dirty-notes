import ReactMarkdown from 'react-markdown'
const SingleNote = () => {
  return (
    <section className='min-h-screen'>
      <h1 className='my-4 text-4xl text-center underline decoration-accent'>Functions</h1>
        
      <p>
        <span className='text-accent'>**OVERVIEW** </span>Functions are fundamental to the study of calculus. In this chapter we review
        what functions are and how they are pictured as graphs, how they are combined and trans-
        formed, and ways they can be classified. We review the trigonometric functions, and we
        discuss misrepresentations that can occur when using calculators and computers to obtain
        a function’s graph. We also discuss inverse, exponential, and logarithmic functions. The
        real number system, Cartesian coordinates, straight lines, circles, parabolas, and ellipses
        are reviewed in the Appendices.
        </p>
      <h2 className='my-4 text-accent'> 1.1 Functions and Their Graphs</h2>

      <p>
        Functions are a tool for describing the real world in mathematical terms. A function can be
        represented by an equation, a graph, a numerical table, or a verbal description; we will use
        all four representations throughout this book. This section reviews these function ideas.
        Functions; Domain and Range
        The temperature at which water boils depends on the elevation above sea level (the boiling
        point drops as you ascend). The interest paid on a cash investment depends on the length of
        time the investment is held. The area of a circle depends on the radius of the circle. The dis-
        tance an object travels at constant speed along a straight-line path depends on the elapsed time.
        In each case, the value of one variable quantity, say y, depends on the value of another
        variable quantity, which we might call x. We say that “y is a function of x” and write this
        symbolically as

        <span className='block p-4 rounded-sm text-accent bg-background-base'>{'>'} y = ƒ(x) (“y equals ƒ of x”).</span>

        In this notation, the symbol ƒ represents the function, the letter x is the independent variable
        representing the input value of ƒ, and y is the dependent variable or output value of ƒ at x.
      </p>
      <h2 className='my-4 text-accent'> DEFINITION :</h2>
      <p> 
        A function ƒ from a set D to a set Y is a rule that assigns a unique
        (single) element ƒ(x)∊Y to each element x∊D.
        The set D of all possible input values is called the domain of the function. The set of
        all output values of ƒ(x) as x varies throughout D is called the range of the function. The
        range may not include every element in the set Y. The domain and range of a function can
        be any sets of objects, but often in calculus they are sets of real numbers interpreted as
        points of a coordinate line. (In Chapters 13–16, we will encounter functions for which the
        elements of the sets are points in the coordinate plane or i)
      </p>
    
    </section>
  )
}

export default SingleNote
