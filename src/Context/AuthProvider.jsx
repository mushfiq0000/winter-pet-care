import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

//   console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password )
  }
  
  const photoUpdate = (photoUpdate)=>{
    return updateProfile(auth.currentUser, photoUpdate)
  }

  const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  }
  
  const logOut = ()=>{
    return signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    photoUpdate
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
