import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LogIn.css"

// icon 
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoLogoGoogleplus } from "react-icons/io";


const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        console.log(data)
        
    };

    return (
       <div className="relative w-full min-h-svh overflow-hidden ">
        <div className="absolute w-full h-full top-0 left-0 ">
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10 mb-5 '>
                    <div className='text-center mb-5 '>
                        <div className="flex justify-center items-center gap-4 max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center ">
                            <SiAmazonsimpleemailservice className=" text-3xl text-white"/>
                        <input className='w-full rounded-xl placeholder:text-slate-500 placeholder:font-medium  py-3 px-4 leading-6 text-lg font-medium' placeholder="Enter Your Email" {...register("email", { required: true })} type="email" id="" />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                    </div>
                    <div className='text-center '>
                        <div className="flex justify-center items-center gap-4  max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center border-0 outline-none " >
                            <RiLockPasswordLine className=" text-3xl text-white"/>
                            <input className='w-full placeholder:text-slate-500 placeholder:font-medium rounded-xl leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                        {errors.name && <span className='text-red-600'>Password dont match</span>}
                        </div>
                    </div>
                    <div className=' text-center mt-5 '>
                        <input className="btn btn-primary w-[150px] h-12 outline-none rounded-full cursor-pointer bg-slate-400 text-white uppercase duration-2 hover:bg-slate-500 font-semibold" type="submit" value="Sign In" />
                    </div>
                </form>
                <div>
                    <p className='text-base font-medium'>--Or Sign In with Social Media-- </p>
                    <div className='text-center my-4 text-slate-600 '>
                        <button  className=' border-2 text-4xl hover:bg-slate-400 hover:text-white duration-700 p-5 rounded-full border-slate-500 '>
                             <IoLogoGoogleplus/>  
                        </button>
                    </div>
                </div>
                <div className='font-semibold'>
                    <p>New Here?Please <Link to={'/signup'}><span className='text-xl font-bold text-slate-700 '>Sign Up</span></Link></p>
                </div>
             
        </div>
        </div>
       </div>
    );
};

export default LogIn;