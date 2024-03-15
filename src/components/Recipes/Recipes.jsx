import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    }, [])



    return (
       
        <div className="grid grid-cols-2 gap-4 p-2 ">
            {
                recipes.map((recipe,index) => <Recipe
                 key={index} 
                 recipe={recipe}
                 handleCook={handleCook}
                ></Recipe>)
            }
          

            

        </div>
    );
};

export default Recipes;