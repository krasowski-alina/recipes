export default function RecipesComponent({name, cuisineType, calories, image, totalWeight, ingredientLines}){
    return(
        <div className='container'>
            <h2>{name}</h2>
                <div className='iconsContainer'>
                    <h4 className='cuisine'>{cuisineType}</h4>
                    <h4 className='calories'>{calories.toFixed()}</h4>
                    <h4 className='weight'>{totalWeight.toFixed()} gram</h4>
                </div>
            <img src={image} alt="food" className='mainImage'/>
            <ul>
                {ingredientLines.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    )
}