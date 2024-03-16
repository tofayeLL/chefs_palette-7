
import PropTypes from 'prop-types';
const Tables = ({ carts, handlePrepare,  currentCooks, times, calories }) => {
   

    return (
        
        <div className='my-6'>

            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Want to cook: {carts.length}
                    <p className="border-b-2 mt-3"></p>
                </h3>
            </div>



            {/* want to cook table content */}

            <div className="px-10 my-4">


                <div className="grid grid-cols-4 gap-4 px-7">
                    <p className="font-medium">Name</p>
                    <p className="font-medium">Time</p>
                    <p className="font-medium">Calories</p>
                    <p></p>

                </div>


                <div className="space-y-3 ">
                    {
                        carts.map((cart, index) =>
                            <div key={index} >

                                <div className="grid grid-cols-4 gap-4  space-y-6 bg-slate-200 items-center px-2 py-2 my-3 rounded-sm">

                                    <p className="flex items-center ">{index + 1}
                                        <td className="ml-4"> {cart.recipe_name}</td>
                                    </p>

                                    <td>{cart.preparing_time} minutes</td>

                                    <td>{cart.calories} calories</td>

                                    <button onClick={() => handlePrepare(cart)} className="px-4 py-2 font-semibold bg-green-300 rounded-full hover:bg-blue-300">prepare</button>

                                </div>


                            </div>

                        )
                    }

                </div>

               



            </div>




              {/* currenntly cooking content */}

            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Currently cooking: {currentCooks.length}:
                    <p className="border-b-2 mt-3"></p>
                </h3>
            </div>


            <div className="px-10 my-4">

            <div className="grid grid-cols-4 gap-4 px-7">
                    <p className="font-medium">Name</p>
                    <p className="font-medium">Time</p>
                    <p className="font-medium">Calories</p>
                    <p></p>

                </div>


                <div className="space-y-3 ">
                    {
                        currentCooks.map((currentCook, index) =>
                            <div key={index} >

                                <div className="grid grid-cols-4 gap-4  space-y-6 bg-slate-200 items-center px-2 py-2 my-3 rounded-sm">

                                    <p className="flex items-center ">{index + 1}
                                        <td className="ml-4"> {currentCook.recipe_name}</td>
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
                        <h3 className="font-bold text-base">Total Times = {times} minutes</h3>
                    </div>
                    <div >
                        <h3 className="font-bold text-base">Total Calories = {calories} calories</h3>
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