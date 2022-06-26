
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/signUp/signUpForm";
import './authentication.scss'


const Authentication = () => {
  

  


  return (
    <div className='authentication-container'>
     
      <SignInForm/>
      {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button> */}
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
