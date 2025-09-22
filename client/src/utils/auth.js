import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import { auth } from "../firebase";

// Signup
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const signout = () => {
  return signOut(auth);
};

// delete user account
export const deleteAccount = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      alert("No user is currently signed in.");
      return;
    }

    await deleteUser(user);

    alert("Account deleted successfully!");
  } catch (error) {
    console.error("Error deleting account: ", error.message);

    // Firebase restriction: agar user ka session purana hai, re-authentication zaroori hoti hai
    if (error.code === "auth/requires-recent-login") {
      alert("Please sign in again before deleting your account.");
    }
  }
}

