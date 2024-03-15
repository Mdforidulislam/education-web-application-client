import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// image
import boy from '../../../assets/boy-with-world-rbg.png'

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
       <div className="relative  w-full min-h-svh overflow-hidden container ">
        <div className="absolute w-[2000px] h-[2000px] bg-[#4481eb] -z-10 rounded-full -top-[10%] right-[48%] -translate-y-[45%]"> </div>
        <div className="absolute md:text-4xl md:font-bold  font-bold px-10 py-4 md:py-20"> Transformative Education:<br />Innovations for a <br /> Global Future </div>
        <div className="absolute md:text-2xl font-semibold  md:font-bold px-10 py-20 md:py-52 text-white "> <p className="my-4">New Here?Please </p>
        <Link id="sign-up-btn" to={'/signUp'}><span className='md:text-xl font-bold text-slate-700 border-2 border-slate-700 bg-white hover:text-white hover:bg-slate-600 duration-1000 px-4 py-2 rounded-full'>Sign Up</span></Link>
         </div>

        <div className=" mt-24 md:mt-0">
        <div className="md:flex justify-center items-center gap-10 mt-7 ">
            <div className="hidden md:flex">
                <img className="w-1/2 mx-auto md:w-full" src={boy} alt="boy" />
            </div>
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10 mb-5 '>
                    <div className='text-center mb-5 '>
                        <div className="flex justify-center items-center gap-4 max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center ">
                            <SiAmazonsimpleemailservice className=" text-3xl text-white"/>
                        <input {...register("email", { required: true })} type="email" id="" />
                        {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
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
                {/* <div className='font-semibold'>
                    <p>New Here?Please <Link to={'/signUp'}><span className='text-xl font-bold text-slate-700 '>Sign Up</span></Link></p>
                </div> */}
             
        </div>
        </div>
        </div>
       </div>
    );
};

export default LogIn;