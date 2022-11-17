//Importerar metoden för signInWithGooglePopUp
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    {
      /* Destructar user objektet vi får i konsolen när vi använder authenticationservice */
    }
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      {/*Adderar en event handler som utför logGoogleUser funktionen */}
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
