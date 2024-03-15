

const Tables = ({ carts }) => {

    return (
        <div>
            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Want to cook: {carts.length}
                    <p className="border-b-2"></p>
                </h3>
            </div>


            {/* table content */}
            <div className="px-10">
               
                   
                        <div className="flex gap-16 items-center justify-between">
                            <p>name</p>
                            <p>name</p>
                            <p>name</p>
                            <p></p>
                        </div>
                
                    
                            {
                                carts.map((cart, index) => <div key={index} className="flex justify-between gap-14">

                                    <p className="flex items-center ">{index + 1}
                                        <td className="ml-2"> {cart.recipe_name}</td>
                                    </p>

                                    <td>{cart.preparing_time} minutes</td>
                                    <td>{cart.calories} calories</td>
                                    
                                    
                                    
                                    
                                    </div>






                                )
                            }
                       


                    
            </div>








            <div className="text-center px-32">
                <h3 className="text-xl font-bold">Currently cooking: 02:
                    <p className="border-b-2"></p>
                </h3>
            </div>


        </div>
    );
};

export default Tables;