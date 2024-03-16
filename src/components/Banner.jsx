

const Banner = () => {
    return (
        
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url(./images/banner.png)]  bg-center bg-cover lg:py-32 py-8 rounded-lg my-12" >

           <div  className="text-center lg:space-y-10 space-y-6 lg:px-0 px-4">
           <h3 className="lg:text-5xl text-xl font-bold text-white">Discover an exceptional 
           cooking <br /> class tailored for you!</h3>
            <p className="lg:w-[62%]  mx-auto text-white opacity-90">Explore our exclusive cooking classes, meticulously crafted to suit your culinary preferences and skill level, for an unparalleled culinary experience tailored just for you.</p>
            <div className="space-x-5">
                <button className="px-5 py-3 border-[1px] font-semibold bg-green-300 rounded-full hover:bg-blue-300">Explore Now</button>
                <button className="px-5 py-3 font-semibold border-[1px] border-white rounded-full text-white hover:bg-blue-300">Our Feedback</button>
            </div>
           </div>
            
        </div>
    );
};

export default Banner;