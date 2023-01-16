import search from './search.png'
import avocado from './avocado.png'
import { useEffect, useState } from 'react';
import './App.css';
import RecipesComponent from './RecipesComponent';

function App() {
  const MY_ID = "c47fa7e3";
  const MY_KEY = "c38b7932774a3764ceedd1ee8157afac";
  const[mySearch, setMySearch] = useState("");
  const[recipes, setRecipes] = useState([]);
  const [word, setWord] = useState("avocado");
  useEffect(()=> {
    getRecipe()
  }, [word])
  const getRecipe = async () =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  }
  const getInputValue = (e) => {
  setMySearch(e.target.value);
  }
  const searchSubmit = (e) => {
    e.preventDefault();
    setWord(mySearch);
    setMySearch("");
  }
  return (
    <div className="App">
      <article>
        <header>
          <img src={avocado} alt="avocado" className='avocado'/>
          <h1>Find Recipe & Cook</h1>
          <form onSubmit={searchSubmit}>
            <input className='input' placeholder='Search...' onChange={getInputValue} value={mySearch}></input>
          </form>
          <img src={search} alt="search" className='search' onClick={searchSubmit}/>
        </header>
        <section>
          {recipes.map(( item, index )=> (
              <RecipesComponent 
              name = {item.recipe.label}
              cuisineType = {item.recipe.cuisineType}
              calories = {item.recipe.calories}
              image = {item.recipe.image}
              totalWeight = {item.recipe.totalWeight}
              ingredientLines = {item.recipe.ingredientLines}
              key = {index}/>
          ))}
        </section>
      </article>
      
    </div>
  );
}

export default App;
