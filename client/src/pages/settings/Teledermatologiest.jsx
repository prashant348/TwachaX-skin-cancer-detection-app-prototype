import React, { useState } from 'react';
import { ArrowLeft, Video, Phone, MessageSquare, Star, Award, Clock, MapPin, Calendar, Shield, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Teledermatologist = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const navigate = useNavigate();

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Dermatologist & Skin Cancer Specialist",
            experience: "15+ years",
            rating: 4.9,
            reviews: 324,
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "New York, USA",
            languages: ["English", "Spanish"],
            availability: "Available Today",
            consultationFee: "$75",
            badges: ["Top Rated", "Verified"],
            about: "Specialized in melanoma detection and preventive dermatology with over 15 years of experience."
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "Cosmetic & Medical Dermatologist",
            experience: "12+ years",
            rating: 4.8,
            reviews: 267,
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "California, USA",
            languages: ["English", "Mandarin"],
            availability: "Available in 2 hours",
            consultationFee: "$80",
            badges: ["Expert", "Popular"],
            about: "Expert in skin cancer screening and advanced dermatological treatments with AI integration experience."
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatric & General Dermatologist",
            experience: "10+ years",
            rating: 4.9,
            reviews: 189,
            image: "https://images.unsplash.com/photo-1594824388609-4b5ce64669df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Texas, USA",
            languages: ["English", "Spanish", "French"],
            availability: "Available Tomorrow",
            consultationFee: "$70",
            badges: ["Specialist", "Recommended"],
            about: "Focused on family dermatology and skin health education with expertise in early detection methods."
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            specialty: "Dermatopathologist",
            experience: "18+ years",
            rating: 4.7,
            reviews: 412,
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Florida, USA",
            languages: ["English"],
            availability: "Available Today",
            consultationFee: "$90",
            badges: ["Senior Expert", "Research Lead"],
            about: "Leading dermatopathologist specializing in skin cancer diagnosis and AI-assisted screening technologies."
        }
    ];

    const handleBack = () => {
        navigate("/settings");
    };

    const handleVideoCall = (doctor) => {
        alert(`Starting video consultation with ${doctor.name}...`);
    };

    const handlePhoneCall = (doctor) => {
        alert(`Calling ${doctor.name}...`);
    };

    const handleMessage = (doctor) => {
        alert(`Opening chat with ${doctor.name}...`);
    };

    const DoctorCard = ({ doctor }) => (
        <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-white border-opacity-20 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
                {/* Doctor Image */}
                <div className="relative flex-shrink-0">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2 flex-wrap">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                            <p className="text-blue-600 font-medium text-sm">{doctor.specialty}</p>
                        </div>
                        <div className="text-right min-w-[80px] max-w-[120px] truncate">
                            <div className="flex items-center mb-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm font-bold text-gray-700">{doctor.rating}</span>
                            </div>
                            <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">({doctor.reviews} reviews)</p>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {doctor.badges.map((badge, index) => (
                            <span key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-blue-600" />
                            {doctor.experience}
                        </div>
                        <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-green-600" />
                            {doctor.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-orange-600" />
                            {doctor.availability}
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="text-lg font-bold text-green-600 mr-1">$</span>
                            {doctor.consultationFee}
                        </div>
                    </div>

                    {/* About */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doctor.about}</p>

                    {/* Languages */}
                    <div className="flex items-center mb-4 flex-wrap">
                        <span className="text-sm text-gray-500 mr-2">Languages:</span>
                        <div className="flex flex-wrap gap-1 max-w-[140px]">
                            {doctor.languages.map((lang, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs whitespace-nowrap">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 flex-wrap">
                <button
                    onClick={() => handleVideoCall(doctor)}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                    <Video className="h-5 w-5 mr-2" />
                    Video Call
                </button>

                <button
                    onClick={() => handlePhoneCall(doctor)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                    <Phone className="h-5 w-5 mr-2" />
                    Call
                </button>

                <button
                    onClick={() => handleMessage(doctor)}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-red-600 text-white py-3 px-4 rounded-xl font-bold hover:from-pink-700 hover:to-red-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Message
                </button>
            </div>
        </div>
    );

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
                            <h1 className="text-xl font-bold text-gray-800">Teledermatologist</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="w-full max-w-full mx-auto px-0 py-8">
                {/* Welcome Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Consult Expert Dermatologists</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Connect with certified dermatologists for professional consultation, diagnosis, and treatment recommendations.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">50+</div>
                        <div className="text-sm text-gray-600">Expert Doctors</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">24/7</div>
                        <div className="text-sm text-gray-600">Available</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                            <Star className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">4.8</div>
                        <div className="text-sm text-gray-600">Avg Rating</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                            <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">15 min</div>
                        <div className="text-sm text-gray-600">Avg Response</div>
                    </div>
                </div>

                {/* Doctors List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-800">Available Dermatologists</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {doctors.filter(d => d.availability.includes('Today')).length} Available Today
                        </span>
                    </div>

                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>

                {/* How It Works Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 border border-blue-200">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">How Teleconsultation Works</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get professional medical advice from the comfort of your home in just a few simple steps.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Calendar className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">1. Choose Doctor</h4>
                            <p className="text-gray-600">Select from our verified dermatologists based on your needs and preferences.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Video className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">2. Start Consultation</h4>
                            <p className="text-gray-600">Connect via video call, phone, or chat for your consultation session.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">3. Get Treatment</h4>
                            <p className="text-gray-600">Receive diagnosis, prescription, and follow-up care recommendations.</p>
                        </div>
                    </div>
                </div>

                {/* Emergency Notice */}
                <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
                    <div className="flex items-start">
                        <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                            <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-red-800 mb-2">Emergency Situations</h4>
                            <p className="text-red-700 mb-3">
                                If you have severe symptoms, rapidly changing lesions, or urgent concerns, please contact your local emergency services or visit the nearest hospital immediately.
                            </p>
                            <p className="text-sm text-red-600">
                                Teleconsultation is suitable for routine check-ups and non-emergency consultations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teledermatologist;