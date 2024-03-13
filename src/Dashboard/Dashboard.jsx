import { NavLink, Outlet } from "react-router-dom";


const Dasboard = () => {
    return (
        <div className='lg:flex  mx-auto min-h-screen bg-[#fff9f9]'>

            {/* sidebar content */}
            <div className=' lg:w-64  min-h-full bg-[#e0d1bf] '>

                <ul className='menu text-center p-5  text-sm lg:font-bold lg:text-xl text-white'>
                   

                            <li className=' p-2  rounded-xl mb-2  bg-[#5c482f]'><NavLink to='/dashboard/adminhome'>Admin Home</NavLink></li>


                           
                            <li
                        className=' p-2  rounded-xl mb-2  bg-[#5c482f]'><NavLink to='/'>LogOut</NavLink></li>


                            <hr className='my-10 ' />

                    <li className=' p-2  rounded-xl mb-2  bg-[#5c482f]'><NavLink to='/'>Home</NavLink></li>

                           

                 





                </ul>
            </div>

            {/* dashboard content  */}


            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dasboard;