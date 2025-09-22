import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Shield, Camera, Brain, Users, Star, Check, ArrowRight, Heart, Award, Clock } from 'lucide-react';


const Landingpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Protect Your Skin with 
                <span className="text-yellow-300"> AI Technology</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Upload a photo of your skin and get instant AI-powered analysis for potential skin cancer detection. Your health, our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to={"/signup"} className="bg-white text-blue-600 px-8 flex justify-center items-center py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Scan <Camera className="inline ml-2" size={24} />
                </NavLink>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Check className="mr-2" size={20} />
                  <span>FDA Approved Algorithm</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2" size={20} />
                  <span>100% Confidential</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Medical AI Technology"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold shadow-lg">
                  97% Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"> 
              Why Choose <span className="text-blue-600">TwachaX</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets healthcare expertise to provide you with reliable, instant skin analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600 text-lg">
                Our advanced machine learning algorithms analyze skin patterns with medical-grade precision, trained on millions of dermatological images.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Results</h3>
              <p className="text-gray-600 text-lg">
                Get comprehensive skin analysis results in under 30 seconds. No waiting, no appointments needed - just instant peace of mind.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Privacy Protected</h3>
              <p className="text-gray-600 text-lg">
                Your photos and health data are encrypted and never stored. Complete confidentiality with enterprise-grade security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              How It <span className="text-purple-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Simple, fast, and accurate - skin health analysis in 3 easy steps</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <img 
                src="https://thumbs.dreamstime.com/b/human-skin-fur-line-closeup-large-scale-asia-man-zoom-view-human-skin-fur-line-closeup-large-scale-120976198.jpg" 
                alt="Upload Photo"
                className="w-64 h-48 mx-auto rounded-lg shadow-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Upload Photo</h3>
              <p className="text-gray-600 text-lg">
                Take or upload a clear photo of the skin area you want to analyze. Our system accepts all common image formats.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd2eda5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="AI Analysis"
                className="w-64 h-48 mx-auto rounded-lg shadow-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Analysis</h3>
              <p className="text-gray-600 text-lg">
                Our advanced AI scans your image using deep learning algorithms trained by dermatologists and medical experts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Get Results"
                className="w-64 h-48 mx-auto rounded-lg shadow-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Results</h3>
              <p className="text-gray-600 text-lg">
                Receive detailed analysis results with risk assessment, recommendations, and guidance on next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-xl text-blue-100">Scans Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">97%</div>
              <div className="text-xl text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <div className="text-xl text-blue-100">Lives Protected</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl text-blue-100">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="text-green-600">Users Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from people who trust TwachaX with their health</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b093?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-800">Sarah Johnson</div>
                  <div className="text-gray-600">Marketing Manager</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
              </div>
              <p className="text-gray-700 text-lg">
                "TwachaX gave me peace of mind when I noticed a suspicious mole. The analysis was quick and accurate, and it guided me to see a dermatologist early."
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-800">Michael Chen</div>
                  <div className="text-gray-600">Software Engineer</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
              </div>
              <p className="text-gray-700 text-lg">
                "As someone who spends a lot of time outdoors, TwachaX has become my go-to tool for regular skin checks. The technology is incredible!"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-800">Emily Rodriguez</div>
                  <div className="text-gray-600">Teacher</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
              </div>
              <p className="text-gray-700 text-lg">
                "The convenience of getting instant skin analysis from home is amazing. TwachaX detected an issue that I would have missed otherwise."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Skin Health Matters
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-orange-100">
            Don't wait for symptoms to worsen. Start protecting your skin today with AI-powered analysis.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <NavLink to={"/signup"} className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
              Start Your Free Scan <ArrowRight className="inline ml-2" size={24} />
            </NavLink>
            <NavLink to={"/"} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-red-600 transition duration-300">
              Learn More About AI
            </NavLink>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-6 text-orange-100">
            <div className="flex items-center">
              <Heart className="mr-2" size={20} />
              <span>Trusted by 100k+ users</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2" size={20} />
              <span>Medical Grade Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">TwachaX</span>
              </div>
              <p className="text-gray-400">
                Protecting your skin health with advanced AI technology and medical expertise.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">How it Works</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TwachaX. All rights reserved. Built with ❤️ by <a href="http://instagram.com/codingweapon">codingweapon</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage