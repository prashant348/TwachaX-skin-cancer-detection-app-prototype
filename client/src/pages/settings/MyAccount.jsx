import React, { useState } from 'react';
import { ArrowLeft, Save, Edit3, Calendar, User, Camera, Check } from 'lucide-react';
import SettingsPage from './Settings';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';



const MyAccount = () => {

    const { user } = useAuth();
    const userFirstName = user.displayName.split(" ")[0];
    const userLastName = user.displayName.split(" ")[1];

    const [formData, setFormData] = useState({
        gender: '',
        firstName: userFirstName,
        lastName: userLastName,
        dateOfBirth: '01 January 1990'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate()

    console.log(user)

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);
            alert('Profile updated successfully!');
        }, 1500);
    };

    const handleBack = () => {
        if (isEditing) {
            if (confirm('You have unsaved changes. Are you sure you want to go back?')) {
                setIsEditing(false);
            }
        } else {
            // Navigate back to settings
            navigate("/settings");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={handleBack}
                            className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
                        >
                            <ArrowLeft className="h-6 w-6 text-gray-600" />
                        </button>

                        <h1 className="text-xl font-bold text-gray-800">My Account</h1>

                        <button
                            onClick={isEditing ? handleSave : () => setIsEditing(true)}
                            disabled={isSaving}
                            className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition duration-300 disabled:opacity-50"
                        >
                            {isSaving ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                                    Saving...
                                </div>
                            ) : isEditing ? (
                                <div className="flex items-center">
                                    <Save className="h-5 w-5 mr-1" />
                                    Save
                                </div>
                            ) : (
                                'Edit'
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Picture Section */}  
                <div className="text-center mb-8">
                    <div className="relative inline-block">
                        {/* Profile Picture */}
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                            <User className="h-16 w-16 text-gray-600" /> 
                            {/* Edit Icon */}
                            {/* {isEditing && (
                                <div className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-2 hover:bg-blue-700 cursor-pointer transition duration-300 shadow-lg">
                                    <Edit3 className="h-4 w-4 text-white" />
                                </div>
                            )} */}
                        </div>

                        {isEditing && (
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg" >
                                <Camera className="h-4 w-4 mr-2 inline" />
                                Change Photo
                            </button>    
                        )}

                    </div>
                </div>
 
                {/* Form Section */}
                <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-6 lg:p-8 border border-white border-opacity-20">
                    <div className="space-y-8">
                        {/* Gender Section */}
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-4">Gender</label>
                            <div className="flex space-x-6">
                                {['Female', 'Male', 'Other'].map((option) => (
                                    <label key={option} className="flex items-center cursor-pointer group">
                                        <div className="relative">
                                            
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={option}
                                                checked={formData.gender === option}
                                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                                disabled={!isEditing}
                                                className="sr-only"
                                            />   

                                            <div className={`w-6 h-6 rounded-full border-2 transition duration-300 ${formData.gender === option
                                                    ? 'border-blue-600 bg-blue-600'
                                                    : 'border-gray-300 group-hover:border-blue-400'
                                                } ${!isEditing ? 'opacity-60' : ''}`}>
                                                {formData.gender === option && (
                                                    <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`ml-3 text-gray-700 font-medium ${!isEditing ? 'opacity-60' : ''
                                            }`}>
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* First Name */}
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">First Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-4 text-lg border-b-2 bg-transparent focus:outline-none transition duration-300 ${isEditing
                                            ? 'border-gray-300 focus:border-blue-600 text-gray-800'
                                            : 'border-gray-200 text-gray-500 cursor-default'
                                        }`}
                                    placeholder="First Name"
                                />
                                {isEditing && (
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <Edit3 className="h-5 w-5 text-gray-400" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">Last Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-4 text-lg border-b-2 bg-transparent focus:outline-none transition duration-300 ${isEditing
                                            ? 'border-gray-300 focus:border-blue-600 text-gray-800'
                                            : 'border-gray-200 text-gray-500 cursor-default'
                                        }`}
                                    placeholder="Last Name"
                                />
                                {isEditing && (
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <Edit3 className="h-5 w-5 text-gray-400" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-3">Date of birth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-4 text-lg border-b-2 bg-transparent focus:outline-none transition duration-300 ${isEditing
                                            ? 'border-gray-300 focus:border-blue-600 text-gray-800'
                                            : 'border-gray-200 text-gray-500 cursor-default'
                                        }`}
                                    placeholder="01 January 1990"
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                    <Calendar className={`h-5 w-5 ${isEditing ? 'text-blue-600 cursor-pointer hover:text-blue-700' : 'text-gray-400'}`}
                                        onClick={() => isEditing && setShowDatePicker(true)} />
                                </div>
                            </div>
                        </div>

                        {/* Save Button - Mobile */}
                        {isEditing && (
                            <div className="pt-6">
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {isSaving ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                            Saving Changes...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <Check className="mr-2 h-5 w-5" />
                                            Save Changes
                                        </div>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Info Card */}
                {!isEditing && (
                    <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 border border-blue-200">
                        <div className="flex items-center mb-3">
                            <div className="bg-blue-600 rounded-full p-2 mr-3">
                                <User className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Profile Completion</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Keep your profile updated to get personalized skin health recommendations and better analysis results.
                        </p>
                        <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">85% Complete</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Date Picker Modal */}
            {showDatePicker && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Select Date of Birth</h3>
                        </div>
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                            onChange={(e) => {
                                const date = new Date(e.target.value);
                                const formatted = date.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                });
                                handleInputChange('dateOfBirth', formatted);
                                setShowDatePicker(false);
                            }}
                        />
                        <button
                            onClick={() => setShowDatePicker(false)}
                            className="w-full mt-4 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAccount;