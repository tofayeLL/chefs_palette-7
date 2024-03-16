
import PropTypes from 'prop-types';
const Tables = ({ carts }) => {

    return (
        <div>
            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Want to cook: {carts.length}
                    <p className="border-b-2"></p>
                </h3>
            </div>


            {/* table content */}
            <div className="px-10 my-4">
               
                   
                        <div className="grid grid-cols-4 gap-3 px-7">
                            <p className="font-medium">Name</p>
                            <p  className="font-medium">Time</p>
                            <p  className="font-medium">Calories</p>
                            <p></p>
                           
                        </div>
                
                    
                           <div className="space-y-3 ">
                           {
                                carts.map((cart, index) => 
                                <div key={index} >

                                   <div className="grid grid-cols-4 gap-6  space-y-6 bg-slate-200 items-center px-2 py-2 my-3 rounded-sm">

                                   <p className="flex items-center ">{index + 1}
                                        <td className="ml-4"> {cart.recipe_name}</td>
                                    </p>

                                    <td>{cart.preparing_time} minutes</td>

                                    <td>{cart.calories} calories</td>

                                    <button className="px-4 py-2 font-semibold bg-green-300 rounded-full">prepare</button>

                                   </div>
                                    
                                                                
                                    </div>

                                )
                            }
                       
                           </div>


                    
            </div>








            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Currently cooking: 02:
                    <p className="border-b-2"></p>
                </h3>
            </div>


        </div>
    );
};

Tables.propTypes = {
    carts: PropTypes.array

}

export default Tables;