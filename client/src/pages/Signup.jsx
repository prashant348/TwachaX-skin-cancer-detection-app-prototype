import { useState, useRef, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Shield, Eye, EyeOff, Mail, User, Lock, ArrowRight, Heart, Star, CheckCircle } from 'lucide-react';
import { NavLink } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const passwordInputRef = useRef(null)
  const [check, setCheck] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!password || !email || !fullName) {
        alert("Please first fill all the fields");
        return;
      }

      if (!validateEmail(email)) {
        return;
      }

      if (!validatePassword(password)) {
        return;
      }
      
      if (!check) {
        alert("Please accept the terms and conditions");
        return;
      }
      

      setIsLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // await createUserWithEmailAndPassword(auth, email, password);

      // Full name ko user profile me daalo
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      await sendEmailVerification(userCredential.user);

      // navigate("/dashboard");
      navigate("/verify-email", { state: { email } });


    } catch (err) {
      console.error(err.message);
    }
  };

  const passwordVisible = () => {
    passwordInputRef.current.type = passwordInputRef.current.type === "password" ? "text" : "password";
  }

  const handleCheckBox = () => {
    setCheck(!check)
  }

  function validatePassword(password) {
    // Regex conditions
    const minLength = /.{8,}/; // 8 ya usse jyada char
    const upperCase = /[A-Z]/; // kam se kam 1 uppercase
    const lowerCase = /[a-z]/; // kam se kam 1 lowercase
    const specialChar = /[!@#$%&*.]/; // kam se kam 1 special
    const number = /[0-9]/; // kam se kam 1 number

    if (
      !minLength.test(password) ||
      !upperCase.test(password) ||
      !lowerCase.test(password) ||
      !specialChar.test(password) ||
      !number.test(password)
    ) {
      alert("Password is not strong enough");
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    return true;
  }

  
  
  
  // return (
  //   <div className="flex h-screen items-center justify-center bg-gray-100">
  //     <form
  //       onSubmit={handleSignup}
  //       className="bg-white p-6 rounded shadow-md w-80"
  //     >
  //       <h2 className="text-xl font-bold mb-4">Signup</h2>
  //       <input
  //         type="text"
  //         placeholder="Full Name"
  //         className="w-full border p-2 mb-3"
  //         value={fullName}
  //         onChange={(e) => setFullName(e.target.value)}
  //       />
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         className="w-full border p-2 mb-3"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         className="w-full border p-2 mb-3"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-500 text-white p-2 rounded"
  //       >
  //         Signup
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding & Info */}
          <div className="hidden lg:block space-y-8">
            <div className="flex items-center">
              <Shield className="h-12 w-12 text-blue-600 mr-3" />
              <span className="text-4xl font-bold text-gray-800">TwachaX</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Join the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Skin Health</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Start your journey with AI-powered skin analysis. Protect yourself and your loved ones with cutting-edge technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Free instant skin analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">97% medical-grade accuracy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">Complete privacy & security</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
              <div className="flex items-center mb-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b093?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                  alt="Happy User"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-gray-800">Sarah M.</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "TwachaX caught something my doctor missed. This app literally saved my life!"
              </p>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white border-opacity-20">
              <div className="flex items-center justify-center lg:hidden mb-8">
                <Shield className="h-10 w-10 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-gray-800">TwachaX</span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h3>
                <p className="text-gray-600">Start protecting your skin health today</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block outline-none w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-lg placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block outline-none w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-lg placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={password ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block outline-none w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-lg placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="Password"
                    required
                    ref={passwordInputRef}
                  />
                  <button
                    type="button"
                    onClick={() => passwordVisible()}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {password ? (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="text-blue-600 text-sm font-medium hover:text-blue-700 text-center">
                  <button className="cursor-pointer" onClick={() => { alert("1. Password must be of 8 characters\n2. Password must contain at least one uppercase letter\n3. Password must contain at least one lowercase letter\n4. Password must contain at least one special character out of !@#$%&.*\n5. Password must contain at least one number") }}>
                    Help with password?
                  </button>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                    checked={check}
                    onChange={handleCheckBox}
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I agree to the{' '}
                    <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">Terms of Service</span>
                    {' '}and{' '}
                    <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">Privacy Policy</span>
                  </label>
                </div>

                <button
                  onClick={handleSignup}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </button>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                      <span className="text-blue-500 mr-2">G</span>
                      Google
                    </button>

                    <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                      <span className="text-blue-600 mr-2">f</span>
                      Facebook
                    </button>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <span className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer hover:underline">
                      <NavLink to={"/signin"}>Sign In</NavLink>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                <span className="text-sm">100k+ Users</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Signup;
