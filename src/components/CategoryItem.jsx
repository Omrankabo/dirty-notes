import toast from "react-hot-toast"

const CategoryItem = ({children,handleFilter,category})=>{
    return (
    <div 
    onClick={()=>{
        handleFilter(category)
        toast.success('ياخطير انت',{icon:'😆'})
    }}
    className={`px-3 py-1 bg-accentLighter cursor-pointer rounded-xl text-text-100  w-fit`}>
    {children}
    </div>)
}

export default CategoryItem