import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaOutdent, FaAlignRight, FaListUl, FaWrench,  } from "react-icons/fa";


const Dasboard = () => {
    return (
        <div className='lg:flex  mx-auto min-h-screen bg-[#fff9f9]'>

            {/* sidebar content */}
            <div className=' lg:w-74  min-h-full bg-[#e0d1bf] '>

                <ul className='menu text-center p-5  text-sm lg:font-bold lg:text-base text-white'>

                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group  
                            bg-black rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >
                           
                                <span className="text-base font-bold text-white flex justify-center items-center gap-3">
                                    
                                    <FaListUl></FaListUl> 
                                    
                                    Admin Profile </span>

                  
                           
                        </NavLink>
                    </li>
                   
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group 
                            bg-black rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3"> <FaAddressCard></FaAddressCard> User Management </span>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group
                            bg-black rounded-lg  dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3"> <FaOutdent /> Course Management</span>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group 
                             bg-black rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3">     <FaAlignRight /> Content Management </span>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group
                             bg-black rounded-lg  dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3"> Analytics and Reporting </span>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group
                             bg-black rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3"> Communication and Collaboration </span>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminprofile"
                            className="flex items-center gap-[14px] px-8 py-4 group
                             bg-black rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white flex justify-center items-center gap-3"><FaWrench />Settings and Configuration </span>
                        </NavLink>
                    </li>



                   


                





                    <hr className='my-10 ' />

                    <li className="mb-2">
                        <NavLink
                            to="/"
                            className="flex items-center gap-[14px] px-8 py-4 group
                             bg-[#5c482f] rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
                        >

                            <span className="text-base font-bold text-white">Home </span>
                        </NavLink>
                    </li>




                           
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