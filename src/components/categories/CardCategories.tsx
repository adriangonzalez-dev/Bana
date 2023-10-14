import { Link } from "react-router-dom"
import { Category } from "../../interfaces/category.interface"

interface Props {
    category: Category
}

export const CardCategories = ({category}:Props) => {
  return (
    <div className="carousel-item relative group ">
      <img src={category.image} className="rounded-box w-32"/>
      <Link to={'/2'} className="hidden group-hover:flex items-center justify-center w-full h-full absolute bg-bana-pink opacity-75">
        <p className="text-black font-bold text-lg">{category.name}</p>
      </Link>
    </div>
  )
}
