// const wrapper = document.querySelector("wrapper");
import LogIn from "./../authentication/Login-Signup/Login";

const signupSlide = () => {
  wrapper.classList.add("active");
};
const LoginSlide = () => {
  wrapper.classList.remove("active");
};

// const signupSlide = () => {
//   wrapper.classList.add("active");
// };

export default { signupSlide, LoginSlide };
