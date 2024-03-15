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
        <div className='flex justify-center items-center gap-2'>
            <div className="w-[50%]">
                <div className="w-[90%] md:w-[40%] mx-auto py-24">
                    {/* Heading Admin Profile */}
                    <h1 className="text-5xl font-extrabold leading-snug"></h1>
                    {/* Description Admin Profile */}
                    <h3 className="py-6 text-xl">
                       
                    </h3>
                    {/* Admin member */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-10">
                        {profiles.map((profile, idx) => (
                            <div className="bg-white p-8 text-center rounded-3xl shadow-2xl" key={idx}>
                                <img className="w-[150px] h-[150px] mx-auto rounded-full border " src={profile.img} alt="" />
                                <h2 className="text-3xl font-bold pt-4">{profile.userName}</h2>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-[50%]'>
                <h1>hgk</h1>
                
            </div>
            
        </div>
    );
};

export default AdminProfile;