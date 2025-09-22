// src/firebaseTest.js
import { signup, signin, signout } from "./utils/auth"; // ye jo auth.js utils bana tha wahi import kar
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

// Test functions
export const testFirebase = async () => {
  try {
    console.log("🚀 Testing Firebase...");

    // 1. Signup
    const userCred = await signup("testuser@example.com", "password123");
    console.log("✅ Signup success:", userCred.user.email);

    // 2. Login
    const loginCred = await signin("testuser@example.com", "password123");
    console.log("✅ signin success:", loginCred.user.email);

    // 3. Auth state listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("👤 User is signed in:", user.email);
      } else {
        console.log("🚪 User is signed out");
      }
    });

    // 4. Logout
    await signout();
    console.log("✅ signout success");
  } catch (error) {
    console.error("❌ Firebase Test Error:", error.message);
  }
};
