
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Recipes from './components/Recipes/Recipes'
import Tables from './components/Tables/Tables';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);
  const [times, setTimes] = useState(0);
  const [calories, setCalories] = useState(0);



  // want to cook button event handler
  const handleCook = (recipe) => {

    const isExist = carts.find(cart => cart.recipe_id === recipe.recipe_id);

    if (!isExist) {
      const newCarts = [...carts, recipe];
      setCarts(newCarts);
    }
    else {
      toast.warn("You are not allowed for cook one item twice");
    }

  }


  // prepare button event handler
  const handlePrepare = (cookItem) => {
    const remainingWantToCookItem = carts.filter(cart => cart.recipe_id !== cookItem.recipe_id)
    setCarts(remainingWantToCookItem);

    // current cook add item
    const addCurrentCook = [...currentCooks, cookItem];
    setCurrentCooks(addCurrentCook);


    // count  time 
    const newTime = times + parseInt(cookItem.preparing_time);
    setTimes(newTime);

    // count calories
    const newCountCalories = calories + parseInt(cookItem.calories);
    setCalories(newCountCalories);

  }




  return (
    <>

      <div className='container mx-auto lg:px-14 px-2'>

        <div>
          <Nav></Nav>
        </div>

        <div className='my-14'>
          <Banner></Banner>
        </div>

        <div className='my-24'>


          <div className='text-center space-y-6 my-10'>
            <h3 className='text-5xl font-bold'>Our Recipes</h3>
            <p className='lg:w-[70%] mx-auto'>Explore our Recipes section for a delectable array of calorie-conscious dishes designed to fuel your body , tantalize your taste buds and nutritious masterpiece, crafted to support your health and wellness goals. </p>
          </div>




          <div className='lg:flex gap-6 '>

            <div className='lg:w-[55%] mx-auto'>
              <Recipes handleCook={handleCook}></Recipes>
            </div>

            <div className='lg:w-[45%] mx-auto lg:mt-0 mt-6'>
              <Tables
                carts={carts}
                handlePrepare={handlePrepare}
                currentCooks={currentCooks}
                times={times}
                calories={calories}

              ></Tables>
            </div>


          </div>


        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default App
