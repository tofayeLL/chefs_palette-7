import user from '../assets/images/user.png'
import { CiSearch } from "react-icons/ci";


const Nav = () => {
    return (
        <div className='flex justify-between items-center my-10'>

            <div >
                <h3 className="lg:text-4xl text-xl font-bold">Calorie Cooks</h3>
            </div>

            <div className="lg:flex hidden justify-center items-center ">
                <button className="px-4 py-2">Home</button>
                <button className="px-4 py-2">Recipes</button>
                <button className="px-4 py-2">About</button>
                <button className="px-4 py-2">Search</button>
            </div>

            <div className='flex justify-center items-center gap-4  '>
                <div className='bg-slate-200 flex  items-center rounded-full space-x-2 px-3 py-2 w-[70%]'>
                    <span className='font-semibold'><CiSearch></CiSearch></span>
                    <input className='bg-slate-200  rounded-full outline-none w-[30vh]' type="search" name="" id="" placeholder='search' />
                </div>

                <div >
                    <img className='bg-green-300 rounded-full lg:p-2 w-[16vh] lg:w-[8vh]' src={user} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Nav;