
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

  const handleCook = (recipe) => {

    const isExist = carts.find(cart => cart.recipe_id === recipe.recipe_id);

    if (!isExist) {
      const newCarts = [...carts, recipe];
      setCarts(newCarts);
    }
    else {
      // alert('can not cook one item twice');
      toast.warn("you are not allowed to cook one item twice");

    }



  }


  const handlePrepare = (wCook) => {
  const remainingWantToCookItem = carts.filter(cart => cart.recipe_id !== wCook.recipe_id )
  setCarts(remainingWantToCookItem);

  const addCurrentCook = [...currentCooks, wCook];
  setCurrentCooks(addCurrentCook);


  }
  



  return (
    <>

      <div className='container mx-auto lg:px-16 px-2'>

        <div>
          <Nav></Nav>
        </div>

        <div>
          <Banner></Banner>
        </div>


        <div className='lg:flex gap-4 '>

          <div className='w-full bg-red-300'>
            <Recipes handleCook={handleCook}></Recipes>
          </div>

          <div className='bg-green-300  w-full'>
            <Tables
              carts={carts}
              handlePrepare={handlePrepare}
              currentCooks={currentCooks}
               ></Tables>
          </div>


        </div>



        <ToastContainer />
      </div>



    </>
  )
}

export default App
