
const Box = ({children,className}) => {
  return (
    <div class={`${className} border-2 border-secondary-100 border-opacity-60 rounded-lg overflow-hidden`}>
        {children}
    </div>
  )
}

export default Box;
