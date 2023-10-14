import { useEffect, useState } from "react"
import { Category } from "../../interfaces/category.interface"
import { getCategories } from "../../services/categories"
import { CardCategories } from "./CardCategories"


export const CategoriesContainer = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const categoriesFetch = async () => {
        try {
            const categ = await getCategories();
            setCategories(categ)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        categoriesFetch()
    },[])
    
    if(isLoading) return <div>Cargando...</div>
  return (
    <div className="carousel w-full bg-bana-pink carousel-center max-w-[825px] p-2 space-x-2 rounded-box">
        {categories.map(item=> <CardCategories category={item} key={item.id}/>)}
    </div>
  );
}
