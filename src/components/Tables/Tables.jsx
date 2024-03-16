
import PropTypes from 'prop-types';
const Tables = ({ carts, handlePrepare,  currentCooks, times, calories }) => {
   

    return (

        <div className='my-6 '>

            <div className="text-center lg:px-32 px-10 lg:py-0 py-5 ">
                <h3 className="text-xl font-bold">Want to cook: {carts.length}
                    <p className="border-b-2 mt-3"></p>
                </h3>
            </div>



            {/* want to cook table content */}

            <div className="lg:px-10 my-4 px-2">


                <div className="grid grid-cols-4 lg:gap-4 gap-5 lg:px-7 px-4">
                    <p className="font-medium">Name</p>
                    <p className="font-medium">Time</p>
                    <p className="font-medium">Calories</p>
                    <p></p>

                </div>


                <div className="space-y-3 ">
                    {
                        carts.map((cart, index) =>
                            <div key={index} >

                                <div className="grid grid-cols-4 gap-8 lg:gap-4  space-y-6 bg-slate-200 items-center lg:px-2 px-5 py-2 my-3 rounded-sm">

                                    <p className="flex items-center justify-center  ">{index + 1}
                                        <td className="lg:ml-4 ml-2"> {cart.recipe_name}</td>
                                    </p>

                                    <td>{cart.preparing_time} minutes</td>

                                    <td>{cart.calories} calories</td>

                                    <button onClick={() => handlePrepare(cart)} className="lg:px-4  py-2 font-semibold bg-green-300 rounded-full hover:bg-blue-300 
                                    text-xs lg:text-base ">prepare</button>

                                </div>


                            </div>

                        )
                    }

                </div>

               



            </div>




              {/* currenntly cooking content */}

            <div className="text-center lg:px-32 px-10 lg:py-0 py-5">
                <h3 className="text-xl font-bold">Currently cooking: {currentCooks.length}:
                    <p className="border-b-2 mt-3"></p>
                </h3>
            </div>


            <div className="lg:px-10 px-2 my-4">

            <div className="grid grid-cols-4 lg:gap-4 gap-10 px-7">
                    <p className="font-medium">Name</p>
                    <p className="font-medium">Time</p>
                    <p className="font-medium">Calories</p>
                    <p></p>

                </div>


                <div className="space-y-3 ">
                    {
                        currentCooks.map((currentCook, index) =>
                            <div key={index} >

                                <div className="grid grid-cols-4 lg:gap-4 gap-10  space-y-6 bg-slate-200 items-center lg:px-2 px-10 py-2 my-3 rounded-sm">

                                    <p className="flex items-center justify-center">{index + 1}
                                        <td className="lg:ml-4 ml-3"> {currentCook.recipe_name}</td>
                                    </p>

                                    <td>{currentCook.preparing_time} minutes</td>

                                    <td>{currentCook.calories} calories</td>

                                </div>


                            </div>

                        )
                    }

                </div>


                <div className="grid grid-cols-2 p-2">
                
                    <div  >
                        <h3 className="font-bold lg:text-base text-sm">Total Times = {times} minutes</h3>
                    </div>
                    <div >
                        <h3 className="font-bold lg:text-base text-sm">Total Calories = {calories} calories</h3>
                    </div>
                                     
                </div>

            </div>


        </div>
    );
};

Tables.propTypes = {
    carts: PropTypes.array,
    handlePrepare: PropTypes.func,
    currentCooks: PropTypes.array,
    times: PropTypes.number,
    calories: PropTypes.number

}

export default Tables;