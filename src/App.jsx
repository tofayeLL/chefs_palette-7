
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
      toast.warn("you are not allowed to cook one item twice");
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

        <div>
          <Banner></Banner>
        </div>

        <div className='my-28'>


          <div className='text-center space-y-4 my-10'>
            <h3 className='text-5xl font-bold'>Our Recipes</h3>
            <p className='lg:w-[70%] mx-auto'>Explore our Recipes section for a delectable array of calorie-conscious dishes designed to fuel your body , tantalize your taste buds and nutritious masterpiece, crafted to support your health and wellness goals. </p>
          </div>




          <div className='lg:flex gap-4 '>

            <div className=' bg-red-300 lg:w-[55%] mx-auto'>
              <Recipes handleCook={handleCook}></Recipes>
            </div>

            <div className='bg-green-300  lg:w-[45%] mx-auto'>
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
