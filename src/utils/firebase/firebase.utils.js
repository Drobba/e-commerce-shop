import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9il_DHaNcPBqJkdkcHgGY2zzCQk7q1Ws",
  authDomain: "e-clothing-db-667cc.firebaseapp.com",
  projectId: "e-clothing-db-667cc",
  storageBucket: "e-clothing-db-667cc.appspot.com",
  messagingSenderId: "1001104701779",
  appId: "1:1001104701779:web:6ff13286ed6bb602d849a6",
};
{
  /*Importerar metoder för firestore DB. doc hämtar ett dokument. getDoc hämtar data från ett doc och setDoc sätter data i ett doc.  */
}

// App är library för firebase. Vi skickar vår instance av firebase till appen så att vi kan använda library med dess funktioner på vår instance av firebase
//App gör så att vi kan använda CRUD metoder på vår firebase
const app = initializeApp(firebaseConfig);

// Need to create an instance of GoogleAuthProvider. You can have different providers that does different things. E.g 1 for popup and 1 for signWithRedirect
const provider = new GoogleAuthProvider();
//These Custom parameters will take soe kind of configuration object, with ti we can tell different ways that we want this google auth provider to behave.
provider.setCustomParameters({
  //this makes it so whenever someone uses this we alkways want to force them to select an account.
  promt: "select_account",
});
//Create a variabel to export our authentication. Kan bara finnas 1 av eftersom du vill bara ha 1 authenticationservice för en webbaplikation.
export const auth = getAuth();
//export with googlePopUp which is equal to an anonymous function that's going to return auth and provider.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

{
  /*skapar och Instansierar databsen. Nu kan vi använda denna variabel för att jobba med vår databas. */
}
export const db = getFirestore();
{
  /*En funktion som tar emot data från authenticationservice och sen sparar den i DB.*/
}
export const createUserDocumentFromAuth = async (userAuth) => {
  {
    /*Vi behöver se om det finns ett existerande referense av ett dokument.  */
  }
  {
    /*doc tar in 3 argument. använd db som databas. kolla i collection för users och kolla denna specifika referens */
  }
  const userDocRef = doc(db, "users", userAuth.id);

  console.log(userDocRef);
  {
    /*Skapar en snapshot av ett eventuellt dokument för att kontrollera om det existerar. Använder await för google hämtar detta async */
  }
  const userSnapshot = await getDoc(userDocRef);
};
