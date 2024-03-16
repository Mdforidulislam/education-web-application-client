import { NavLink, Outlet } from "react-router-dom";
import Avatar from "../../../public/t-avt-1.png"
import "./StuDashboard.css"

const StuDashboard = () => {
    return (
        <div className="relative w-full h-[400px]">
            <div className=" flex justify-center items-center  "> 
        {/* background gradient backdrop */}
            <div className='absolute circle rounded-full  flex justify-center -left-20 top-0  '>

            </div>   
            <div className='absolute circle1 rounded-full flex justify-center -left-10 -bottom-60  '>

             </div>         
                
                <div className="w-1/4 min-h-screen p-5  text-gray-800  border-r-2 glass ">
                <div className="text-center text-3xl font-bold mb-12">
                <h1>Logo</h1>

                </div>
                <div>
                    <div className="flex flex-col justify-center items-center space-y-2 my-4 ">
                        <img src={Avatar} alt="" />
                        <h1 className="text-2xl font-bold">Sara Haque</h1>
                        <h3 className="text-xl font-medium">sarahaque@gmaail.com</h3>
                        <NavLink to={'/'}>
                             <div className="flex gap-2 justify-center items-center font-bold border-4 px-4 py-2 rounded-xl border-l-indigo-800 border-b-blue-800 ">           
                                <h1>Edit Profile </h1>
                            </div>
                        </NavLink>

                    </div>
                </div>



                <ul className=" menu space-y-4   ">
                    
                            
                                <li className=" ">
                                    <NavLink to={'/studentDashboard/MyDashboard'}>
                                        <div className="flex gap-2 justify-center items-center font-bold ">
                                            
                                            <h1> DashBoard</h1>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to={'/studentDashboard/MyCourses'}>
                                        <div className="flex gap-2 justify-center items-center font-bold ">
                                            
                                            <h1> Courses  </h1>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to={'/studentDashboard/MyClasses'}>
                                        <div className="flex gap-2 justify-center items-center font-bold ">
                                            
                                            <h1> Classes</h1>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to={'/'}>
                                        <div className="flex gap-2 justify-center items-center font-bold ">
                                            
                                            <h1>Messages</h1>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to={'/'}>
                                        <div className="flex gap-2 justify-center items-center font-bold ">
                                            
                                            <h1>Notification</h1>
                                        </div>
                                    </NavLink>
                                </li>
                    <hr />

                    <li className=" ">
                        <NavLink to={'/'}>
                            <div className="flex gap-2 justify-center items-center font-bold ">
                                
                                <h1>Home</h1>
                            </div>
                        </NavLink>
                    </li>
                    <li className=" ">
                        <NavLink to={'/'}>
                            <div className="flex gap-2 justify-center items-center font-bold ">
                                <h1>Contact</h1>
                            </div>
                        </NavLink>
                    </li>

                </ul>

            </div>
            <div className="w-3/4 ">
                <Outlet></Outlet>

            </div>

        </div>
        </div>
    );
};

export default StuDashboard;