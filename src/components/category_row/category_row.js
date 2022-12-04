import './category_row_style.css';
import CategoryCell from "../category_cell/category_cell";

function CategoryRow({onSelectCategory}){
    const data = require("../../categories.json");
    
    const colors = ["#E14D2A","#FD841F","#3E6D9C"];
    return(
        <>
        <div className="category-row">
        {
            Object.keys(data).map((key, index)=>{
                return(
                    <div >
                        <CategoryCell key={index} category={key}  color={colors[Math.floor(Math.random()*3)]} onSelectCategory={onSelectCategory} />
                    </div>
                ) 
            })
        }
        </div>
       
        </>
    );
   
}

export default CategoryRow;