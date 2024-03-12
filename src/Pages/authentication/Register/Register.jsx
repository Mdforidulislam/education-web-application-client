import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// icon
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoLogoGoogleplus } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        console.log(data)
        
    };
    return (
        <div className="relative w-full min-h-svh overflow-hidden ">
        <div className=" ">
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10 mb-5 '>
                    <div className='text-center mb-5 '>
                        <div className="flex justify-center items-center gap-4 max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center ">
                            <BsPersonCircle className=" text-3xl text-white"/>
                        <input className='w-full rounded-xl placeholder:text-slate-500 placeholder:font-medium  py-3 px-4 leading-6 text-lg font-medium' placeholder="Enter Your Name" {...register("name", { required: true })} type="text" id="" />
                        {errors.name && <div className='text-teal-700 font-semibold '>Enter Your Name Here</div>}
                        </div>

                    </div>
                    <div className='text-center mb-5 '>
                        <div className="flex justify-center items-center gap-4 max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center ">
                            <SiAmazonsimpleemailservice className=" text-3xl text-white"/>
                        <input className='w-full rounded-xl placeholder:text-slate-500 placeholder:font-medium  py-3 px-4 leading-6 text-lg font-medium' placeholder="Enter Your Email" {...register("email", { required: true })} type="email" id="" />
                        {errors.email && <span className='text-teal-700 font-semibold'>Enter Your Email Here</span>}
                        </div>

                    </div>
                    <div className='text-center '>
                        <div className="flex justify-center items-center gap-4  max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center border-0 outline-none " >
                            <RiLockPasswordLine className=" text-3xl text-white"/>
                            <input className='w-full placeholder:text-slate-500 placeholder:font-medium rounded-xl leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                        {errors.password && <span className='text-teal-700 font-semibold'>Password dont match</span>}
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <div className="flex justify-center items-center gap-4  max-w-96 w-full h-[80px] px-10  bg-slate-400 rounded-full text-center border-0 outline-none " >
                            <MdOutlinePermPhoneMsg className=" text-3xl text-white"/>
                            <input className='w-full placeholder:text-slate-500 placeholder:font-medium rounded-xl leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Phone Number" {...register("phone", { required: true })} type="number" id="" />
                        {errors.phone && <span className='text-teal-700 font-semibold'>Enter Your Phone Number</span>}
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
                              <IoLogoGoogleplus></IoLogoGoogleplus>
                        </button>
                    </div>
                </div>
                <div className=''>
                    <p>New Here?Please <Link to={'/LogIn'}><span className='text-xl font-bold text-green-500 '>Sign In</span></Link></p>
                </div>
             
        </div>
        </div>
       </div>
    );
};

export default Register;