import React from 'react';
import { ArrowLeft, Shield, Brain, Users, Target, Award, AlertTriangle, Heart, Code, Zap, CheckCircle, Info, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/")
    };

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analysis",
            description: "Advanced machine learning algorithms for skin pattern recognition and analysis."
        },
        {
            icon: Shield,
            title: "Privacy Protection",
            description: "Your data is encrypted and secure with enterprise-grade privacy measures."
        },
        {
            icon: Target,
            title: "Early Detection",
            description: "Designed to help identify potential skin health concerns at early stages."
        },
        {
            icon: Users,
            title: "User-Friendly Interface",
            description: "Intuitive design that makes skin health monitoring accessible to everyone."
        }
    ];

    const teamMembers = [
        {
            name: "codingweapon",
            role: "Full-Stack Developer",
            image: "../img.png",
            description: "Full-stack developer passionate about technology"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <button
                            onClick={handleBack}
                            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition duration-300"
                        >
                            <ArrowLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <div className="flex items-center">
                            <Shield className="h-6 w-6 text-blue-600 mr-2" />
                            <h1 className="text-xl font-bold text-gray-800">About TwachaX</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                        <Shield className="h-12 w-12 text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">TwachaX</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        TwachaX is a demonstration web application showcasing AI-powered skin analysis technology.
                        Built with modern web technologies to illustrate the potential of machine learning in healthcare screening.
                    </p>
                </div>

                {/* Important Disclaimer */}
                <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 mb-12">
                    <div className="flex items-center justify-center gap-4 flex-col sm:flex-row sm:items-start sm:gap-0">
                        <div className="bg-red-600 rounded-full p-3 mr-6 flex-shrink-0">
                            <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ Important Disclaimer</h3>
                            <div className="space-y-3 text-red-700">
                                <p className="text-lg font-medium">
                                    <strong>This is NOT a real medical application.</strong> SkinGuard is a prototype/demonstration project created for educational and portfolio purposes only.
                                </p>
                                <ul className="space-y-2 text-base">
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2 mt-1">•</span>
                                        <span>The AI analysis results are simulated and not based on real medical algorithms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2 mt-1">•</span>
                                        <span>The teledermatologist feature shows dummy profiles, not real doctors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2 mt-1">•</span>
                                        <span>Do NOT use this app for actual medical diagnosis or health decisions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2 mt-1">•</span>
                                        <span><strong>Always consult qualified healthcare professionals for real medical concerns</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Purpose */}
                <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white border-opacity-20">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Target className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Project Purpose</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">Educational Goals</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Demonstrate modern web development skills using React.js</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Showcase responsive UI/UX design principles</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Illustrate healthcare app interface design</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Practice full-stack development concepts</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">Technical Showcase</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>MERN Stack implementation (MongoDB, Express, React, Node.js)</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Modern CSS frameworks (Tailwind CSS)</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Component-based architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Interactive user interface design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Demo Features</h3>
                        <p className="text-xl text-gray-600">Explore the various components and functionalities built into this prototype</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                    <feature.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 mb-12 border border-purple-200">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Code className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Technology Stack</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">Built with modern technologies to demonstrate current industry standards</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-white rounded-2xl p-4 shadow-lg mb-3">
                                <h4 className="font-bold text-gray-800">Frontend</h4>
                                <p className="text-sm text-gray-600 mt-2">React.js, Tailwind CSS, Lucide Icons</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-2xl p-4 shadow-lg mb-3">
                                <h4 className="font-bold text-gray-800">Backend</h4>
                                <p className="text-sm text-gray-600 mt-2">Node.js, Express.js, RESTful APIs</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-2xl p-4 shadow-lg mb-3">
                                <h4 className="font-bold text-gray-800">Database</h4>
                                <p className="text-sm text-gray-600 mt-2">MongoDB, Mongoose ODM</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-2xl p-4 shadow-lg mb-3">
                                <h4 className="font-bold text-gray-800">Tools</h4>
                                <p className="text-sm text-gray-600 mt-2">React Router, firebase</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Team Section */}
                <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white border-opacity-20">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Project Owner</h3>
                        <p className="text-gray-600">The man behind this demonstration project</p>
                    </div>

                    <div className="flex justify-center items-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-30 h-30 rounded-full mx-auto mb-4 shadow-lg object-cover"
                                />
                                <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                                <div className="flex gap-4 justify-center mt-4 flex-wrap sm:flex-nowrap">
                                    <a
                                        href="http://instagram.com/codingweapon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold shadow-lg hover:from-pink-600 hover:to-yellow-600 transition duration-300">
                                            <img src="../../4096px-Instagram_icon.png" alt="instagram_icon" className='h-5 w-5' />
                                            Instagram
                                        </span>
                                    </a>
                                    <a
                                        href="http://threads.com/codingweapon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-l from-black to-gray-400 text-white font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 transition duration-300">
                                            <img src="../../Threads_(app)_logo.svg" alt="threads_icon" className='h-5 w-5' />
                                            Threads
                                        </span>
                                    </a>
                                    <a
                                        href="http://youtube.com/@realcodingweapon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-l from-red-600 to-pink-600 text-white font-bold shadow-lg hover:from-red-700 hover:to-pink-700 transition duration-300">
                
                                            <img src="../../yt_icon.svg" alt="yt_icon" className='h-5 w-5' />
                                            Youtube
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/prashant348"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-l from-black to-gray-300 text-white font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 transition duration-300">
                                            <img src="../../github.svg" alt="threads_icon" className='h-5 w-5' />
                                            GitHub
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real Medical Resources */}
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 mb-12 border border-green-200">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">For Real Medical Concerns</h3>
                        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                            If you have genuine skin health concerns, please consult these legitimate medical resources:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-3">Professional Consultation</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <Globe className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Visit your local dermatologist or family doctor</span>
                                </li>
                                <li className="flex items-start">
                                    <Globe className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Use legitimate telemedicine platforms</span>
                                </li>
                                <li className="flex items-start">
                                    <Globe className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Contact your healthcare insurance provider</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-3">Educational Resources</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>American Cancer Society (cancer.org)</span>
                                </li>
                                <li className="flex items-start">
                                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>Skin Cancer Foundation (skincancer.org)</span>
                                </li>
                                <li className="flex items-start">
                                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span>American Academy of Dermatology (aad.org)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Note */}
                <div className="text-center bg-gray-100 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Exploring TwachaX</h3>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        This demonstration project showcases the potential of modern web technologies in healthcare applications.
                        While this is not a real medical tool, we hope it illustrates the importance of accessible healthcare technology
                        and encourages the development of legitimate solutions for better health outcomes.
                    </p>
                    <div className="mt-6 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-bold text-lg">TwachaX Demo Project</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;