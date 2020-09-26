import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCSZyq3pP8NLoDj9ygHzVo2PkVLM_rtlkM",
    authDomain: "r-cloth-store.firebaseapp.com",
    databaseURL: "https://r-cloth-store.firebaseio.com",
    projectId: "r-cloth-store",
    storageBucket: "r-cloth-store.appspot.com",
    messagingSenderId: "700758268018",
    appId: "1:700758268018:web:9121f503119b4e0023caeb",
    measurementId: "G-GDHG6KHGTG"
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnap = await userRef.get();
    
    if(!userSnap.exists) {
        
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt, 
                ...additionalData
            });
        } catch(error) {
            console.log("Error Creating User", error.message);
        }  
    }
    return userRef;
}; 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();




const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 
export default firebase;