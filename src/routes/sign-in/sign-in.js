
import SignUpForm from "../../components/signUp/signUpForm";
import {
  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  


  return (
    <div>
      <h1>Sign</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
