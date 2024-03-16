import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    }, [])



    return (

<div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-2 ">
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

Recipes.propTypes = {
    handleCook : PropTypes.func

}

export default Recipes;