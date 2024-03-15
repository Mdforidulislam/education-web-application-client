import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminProfile = () => {

    const [profiles, setprofile] = useState([]);
    

    // Fetch Data from the server
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/AdminProfile.json');
                setprofile(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(profiles)

    return (
        <div className='flex justify-center items-center gap-2 mt-20'>
            <div className="w-[30%] m-2 ">
                    <div className=" w-full ">
                       
                        {profiles.map((profile, idx) => (
                            <div className="bg-white p-8 text-center w-full rounded-3xl shadow-2xl" key={idx}>
                                <h1>Admin profile</h1>
                                <img className="w-[150px] h-[150px] mx-auto rounded-full border " src={profile.img} alt="" />
                                <h2 className="text-3xl font-bold pt-4">{profile.userName}</h2>
                                <h2 className="text-3xl font-bold pt-4">{profile.email}</h2>
                                
                            </div>
                        ))}
                    </div>
                
            </div>

            <div className='w-[70%]'>
                
                <div className="bg-white p-8  w-full rounded-3xl shadow-2xl">
                    
                    <h1>Edit Details</h1>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">
                                  no
                                </label>
                               
                            </div>
                        </div>
                    </div>
                 

                </div>
            </div>
            
        </div>
    );
};

export default AdminProfile;