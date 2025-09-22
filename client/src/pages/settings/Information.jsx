import React from 'react';
import { ArrowLeft, ExternalLink, BookOpen, AlertCircle, Shield, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Information = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/settings");
    };

    const handleSkinCancerInfo = () => {
        // Replace with actual link
        window.open('https://share.google/5vfejeECCdp2L1dA2', '_blank');
    };

    const handleSkinCancerInfo2 = () => {
        // Replace with actual link
        window.open('https://worldpopulationreview.com/country-rankings/skin-cancer-rates-by-country', '_blank');
    };

    const handlePreventionTips = () => {
        // Replace with actual link
        window.open('https://www.skincancer.org/prevention/', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <button
                            onClick={handleBack}
                            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition duration-300"
                        >
                            <ArrowLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <div className="flex items-center">
                            <Shield className="h-6 w-6 text-blue-600 mr-2" />
                            <h1 className="text-xl font-bold text-gray-800">Useful Information</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="text-center mb-12">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <Info className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Informed & Protected</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Access reliable information about skin health, cancer prevention, and early detection to keep yourself and your loved ones safe.
                    </p>
                </div>

                {/* Information Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Skin Cancer Information Card */}
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white border-opacity-20 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <AlertCircle className="h-8 w-8 text-red-600" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Skin Cancer Information</h3>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Learn about different types of skin cancer, warning signs, risk factors, and when to seek medical attention. Knowledge is your first line of defense.
                            </p>

                            {/* Key Points */}
                            <div className="text-left mb-8 space-y-3">
                                <div className="flex items-start">
                                    <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Types of skin cancer & symptoms</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">ABCDE warning signs</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Risk factors & causes</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Treatment options</span>
                                </div>
                            </div>

                            <button
                                onClick={handleSkinCancerInfo}
                                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-red-700 hover:to-pink-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                            >
                                <BookOpen className="mr-2 h-5 w-5" />
                                Learn About Skin Cancer
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                            </button>

                            <button
                                onClick={handleSkinCancerInfo2}
                                className="w-full bg-gradient-to-r mt-6 from-red-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-red-700 hover:to-pink-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                            >
                                <BookOpen className="mr-2 h-5 w-5" />
                                Skin Cancer Rates By Country
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Prevention Tips Card */}
                    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white border-opacity-20 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Prevention & Care Tips</h3>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Discover practical tips and daily habits to protect your skin from harmful UV rays and reduce your risk of developing skin cancer.
                            </p>

                            {/* Key Points */}
                            <div className="text-left mb-8 space-y-3">
                                <div className="flex items-start">
                                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Sun protection strategies</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Sunscreen application guide</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Self-examination techniques</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700">Lifestyle recommendations</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePreventionTips}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                            >
                                <Shield className="mr-2 h-5 w-5" />
                                Prevention Guidelines
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Resources Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 border border-blue-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why This Information Matters</h3>
                        <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
                            Early detection saves lives. Skin cancer is one of the most preventable and treatable forms of cancer when caught early.
                            Stay informed, stay protected, and take control of your skin health journey.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Learn</h4>
                                <p className="text-sm text-gray-600">Understand the risks and warning signs</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Protect</h4>
                                <p className="text-sm text-gray-600">Apply prevention strategies daily</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-600 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Monitor</h4>
                                <p className="text-sm text-gray-600">Regular check-ups and self-exams</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                    <div className="flex items-start">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">When to Seek Immediate Medical Attention</h4>
                            <p className="text-gray-700 mb-3">
                                If you notice any sudden changes in your skin, new growths, or concerning symptoms, don't wait.
                                Contact your healthcare provider or dermatologist immediately.
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Remember:</strong> This app is a screening tool and should not replace professional medical advice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;