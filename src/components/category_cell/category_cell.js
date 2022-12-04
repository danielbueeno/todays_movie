import './category_cell_style.css';
function CategoryCell({category, color, onSelectCategory}){
    const onSelfClick =()=>{
        onSelectCategory(category);
    }
    return(
        <div className="category-cell" style={{borderColor: color}} >
            <p style={{color: color}} onClick={onSelfClick}>{category}</p>
        </div>
    )
}

export default CategoryCell;