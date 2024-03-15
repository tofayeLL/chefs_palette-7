

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url()] bg-center bg-cover lg:py-24 py-8 rounded-lg my-12">

           <div  className="text-center space-y-8">
           <h3 className="text-4xl font-bold">Discover an exceptional 
           cooking <br /> class tailored for you!</h3>
            <p className="lg:w-[62%] mx-auto">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="space-x-3">
                <button className="px-4 py-2 font-semibold bg-green-300 rounded-full">Explore Now</button>
                <button className="px-4 py-2 font-semibold bg-green-300 rounded-full">Our Feedback</button>
            </div>
           </div>
            
        </div>
    );
};

export default Banner;