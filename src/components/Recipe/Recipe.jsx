import { CiTimer } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleCook }) => {
    const { recipe_name, image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="space-y-4 p-4 border-[1px] border-slate-300 rounded-md shadow-lg  py-6 ">

            <div>
                <img className="rounded-lg" src={image} alt="" />
            </div>

            <h3 className="text-xl font-medium">{recipe_name}</h3>
            <p className="">{short_description}</p>

            <div className="border-b-2"></div>

            <div>
                <h4 className="text-xl font-medium mb-4">Ingredients: {ingredients.length}</h4>

                <div>
                    {
                        ingredients.map((ingredient, index) =>

                            <li key={index}>{ingredient.slice(0, 23)}</li>

                        )
                    }
                </div>


            </div>


            <div className="border-b-2"></div>


            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span><CiTimer></CiTimer></span>
                    <p><span>{preparing_time}</span> Minutes </p>
                </div>
                <div className="flex items-center gap-2">
                    <span><RiFireLine ></RiFireLine></span>
                    <p><span>{calories}</span>calories </p>
                </div>

            </div>


            <button onClick={() => handleCook(recipe)} className="px-4 py-2 font-semibold bg-green-300 rounded-full hover:bg-blue-300">Want to Cook</button>



        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleCook: PropTypes.func

}

export default Recipe;