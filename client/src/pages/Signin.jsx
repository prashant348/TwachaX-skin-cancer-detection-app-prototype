import { useState, useRef } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Shield, Eye, EyeOff, Mail, Lock, ArrowRight, Heart, Star, Users, Award, Zap } from 'lucide-react';
import { NavLink } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const passwordInputRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {

      if (!password || !email) {
        alert("Please first fill all the fields");
        return;
      }

      
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      // navigate("/dashboard");
      if (!auth.currentUser.emailVerified) {
        navigate("/verify-email", { state: { email: auth.currentUser.email } });
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err.message);
      alert("Invalid Email or Password");
    } finally {
      setIsLoading(false)
    }
  };

  const passwordVisible = () => {
    passwordInputRef.current.type = passwordInputRef.current.type === "password" ? "text" : "password";
  }


  // return (
  //   <div className="flex h-screen items-center justify-center bg-gray-100">
  //     <form
  //       onSubmit={handleSignin}
  //       className="bg-white p-6 rounded shadow-md w-80"
  //     >
  //       <h2 className="text-xl font-bold mb-4">Signin</h2>
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
  //         className="w-full bg-green-500 text-white p-2 rounded"
  //       >
  //         Signin
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      <div className="relative max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Back Info */}
          <div className="hidden lg:block space-y-8">
            <div className="flex items-center">
              <Shield className="h-12 w-12 text-indigo-600 mr-3" />
              <span className="text-4xl font-bold text-gray-800">TwachaX</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Welcome Back to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600"> AI Health Care</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Continue your journey with personalized skin health monitoring. Your AI-powered dermatologist is ready to help you.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
                <div className="flex items-center mb-2">
                  <Users className="h-8 w-8 text-indigo-600 mr-3" />
                  <span className="text-2xl font-bold text-gray-800">1M+</span>
                </div>
                <p className="text-gray-600 font-medium">Users Trust Us</p>
              </div>
              <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
                <div className="flex items-center mb-2">
                  <Zap className="h-8 w-8 text-cyan-600 mr-3" />
                  <span className="text-2xl font-bold text-gray-800">97%</span>
                </div>
                <p className="text-gray-600 font-medium">Accuracy Rate</p>
              </div>
            </div>

            {/* Recent Activity Showcase */}
            <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Skin analysis completed</span>
                  </div>
                  <span className="text-sm text-gray-500">2 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Monthly report generated</span>
                  </div>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Health reminder sent</span>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>

            {/* Featured Testimonial */}
            <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center mb-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold">Dr. Michael Chen</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-300 fill-current w-4 h-4" />)}
                  </div>
                </div>
              </div>
              <p className="text-indigo-100 italic">
                "As a dermatologist, I'm impressed by TwachaX's accuracy. It's revolutionizing early detection!"
              </p>
            </div>
          </div>

          {/* Right Side - Signin Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white border-opacity-30">
              {/* Mobile Logo */}
              <div className="flex items-center justify-center lg:hidden mb-8">
                <Shield className="h-10 w-10 text-indigo-600 mr-2" />
                <span className="text-3xl font-bold text-gray-800">TwachaX</span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h3>
                <p className="text-gray-600">Sign in to your account to continue</p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block outline-none w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-lg placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="Email Address"
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={password ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block outline-none w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-lg placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="Password"
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

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4  w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <span className="text-sm text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer">
                    Forgot password?
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSignin}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Signing In...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </button>

                {/* Quick Login Options */}
                <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-4">
                  <p className="text-center text-sm text-gray-600 mb-3">Quick Signin Options</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                      <span className="text-blue-500 mr-2 text-lg">G</span>
                      Google
                    </button>
                    <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                      <span className="text-blue-600 mr-2 text-lg">f</span>
                      Facebook
                    </button>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <span className="text-indigo-600 hover:text-indigo-700 font-bold cursor-pointer hover:underline">
                      <NavLink to={"/signup"}>Sign Up</NavLink>
                    </span>
                  </p>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-green-800 font-medium">Your data is protected with 256-bit encryption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                <span className="text-sm">Trusted by 1M+</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm">Award Winning AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
