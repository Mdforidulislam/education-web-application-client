// react hook form
import { useForm } from "react-hook-form";


// css
import './LogIn.css'
import "./LogIn.js"
// import {signupSlide} from './LogIn.js'
import { signupSlide,LoginSlide  } from './LogIn.js';

// icon




const LogIn = () => {
   
    const { register, handleSubmit, formState: { errors }, } = useForm();


    // login
    const logIn = data => {
        console.log(data)
        
    };

    // signUp
    const signUp = data => {
        console.log(data)
        
    };

    


   
    return (
        <div className="body">
            <div id='wrapper' className="wrapper rounded-xl">
                <span className='bg-animate'></span>
                <span className='bg-animate2'></span>
                {/* sign in */}
                <div className="form-box login">
                    <h2 style={{'--i':0,'--j':21}} className="anime text-3xl  font-semibold text-center text-[#fff]"  >Log In</h2>
                    <form  onSubmit={handleSubmit(logIn)}>

                        <div className="input-box anime " style={{'--i':1,'--j':22}} >
                            <input className="border-2" {...register("email", { required: true })} type="email" required />
                            {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
                            <label>User Email</label>
                            
                        </div>
                        <div className="input-box anime " style={{'--i':2,'--j':23}} >
                            <input className="border-2" {...register("password", { required: true })} type="password" required />
                            {errors.password && <span className='text-red-600'>Enter Your password Here</span>}
                            <label>Password</label>
                        </div>
                        <button  className="input-btn border-2 anime "  style={{'--i':3,'--j':24}}>LogIn
                        </button>
                        <div className="logreg-link anime" style={{'--i':4,'--j':25}}>
                            <p>Dont Have An Account ? <a onClick={signupSlide} href="#" className="register-link">Sign Up 
                                </a> 
                            </p>

                        </div>
                    </form> 
                </div>
                <div className='info-text login pl-36 pr-2 text-right'>
                    <h2 className='text-3xl font-semibold text-white uppercase line-h anime' style={{'--i':0,'--j':20}} >Welcome Back!</h2>
                    <p className='text-base font-medium text-[#fff] anime' style={{'--i':1,'--j':21}}>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>

                </div>
                {/* sign up */}
                <div className="form-box signup pr-2">
                    <h2 className="text-3xl font-semibold text-center text-[#fff] anime" style={{'--i':17,'--j':0}}>Sign Up</h2>
                    <form onSubmit={handleSubmit(signUp)} >

                        <div className="input-box anime" style={{'--i':18,'--j':1}}>
                        <input className="border-2 bg-transparent" {...register("name", { required: true })} type="text" required />
                            <label>User Name</label>
                            
                        </div>
                        <div className="input-box anime" style={{'--i':19,'--j':2}}>
                        <input className="border-2" {...register("email", { required: true })} type="email" required />
                            <label>email</label>
                            
                        </div>
                        
                        <div className="input-box anime" style={{'--i':20,'--j':3}}>
                        <input className="border-2" {...register("password", { required: true })} type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="input-box anime" style={{'--i':21,'--j':4}}>
                        <input className="border-2" {...register("phone", { required: true })} type="numder" required />
                            <label>Phone Number</label>
                            
                        </div>
                        <div className="input-box anime" style={{'--i':22,'--j':5}}>
                        <input className="border-2" {...register("role", { required: true })} type="password" required />
                            <label>Select Your Role</label>
                            
                        </div>

                        <button className="input-btn border-2 anime " style={{'--i':23,'--j':6}}>Sign Up
                        </button>
                        <div className="logreg-link anime" style={{'--i':24,'--j':7}}>
                            <p>Already Have An Account ? <a onClick={LoginSlide}  href="#" className="login-link">Sign In 
                                </a> 
                            </p>

                        </div>
                    </form> 
                </div>
                <div className='info-text signup  text-right'>
                    <h2 className='text-3xl font-semibold text-white uppercase anime' style={{'--i':17, '--j':0}}>Welcome Back!</h2>
                    <p className='text-base font-medium text-[#fff] anime' style={{'--i':18,'--j':1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

                </div>

            </div>
            



            
        </div>
    );
};

export default LogIn;