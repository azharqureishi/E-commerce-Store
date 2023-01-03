import {categories} from '../data'
import CategoryItems from "./CategoryItems";

const Categories = () => {
    return ( <div className="categories">
        {categories.map(item => (
            <CategoryItems item={item} key={item.id}/>

        ))}
    </div> );
}
 
export default Categories;