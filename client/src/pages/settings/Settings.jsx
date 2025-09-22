import React, { useState } from 'react';
import { Shield, ChevronRight, User, Settings, Bell, CreditCard, MapIcon, PlusIcon, InfoIcon,  Activity, FileText, HelpCircle, Lock, AlertTriangle, LogOut, Contact, Info, Key, Eye, Camera, Smartphone, Trash2 } from 'lucide-react';
import BottomNavbar from '../../components/BottomNavbar';
import { signout, deleteAccount } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import MyAccount from './MyAccount';
import Information from './Information';


const SettingsPage = () => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)


    const handleDeleteAccount = () => {
        setShowDeleteConfirm(true);
    };

    const handleSignOut = () => {
        setShowSignOutConfirm(true);
    };


    const delay = async (sec) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, sec * 1000)
        })
    }

    const confirmDelete = async () => {
        setIsLoading(true)
        await delay(2)
        await deleteAccount()
        setShowDeleteConfirm(false);
        navigate("/signup")
    };

    const confirmSignOut = async (e) => {
        // alert('Signing out...');

        setIsLoading(true)
        await delay(2)
        signout()
        setShowSignOutConfirm(false);
        navigate("/signin")
    };

    const SettingsItem = ({ icon: Icon, title, description, onClick, isDestructive = false, showChevron = true }) => (
        <div
            className={`bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300 cursor-pointer group ${isDestructive ? 'hover:bg-red-50 border border-red-100' : ''
                }`}
            onClick={onClick}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${isDestructive
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'
                        }`}>
                        <Icon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className={`font-medium ${isDestructive ? 'text-red-700' : 'text-gray-800'}`}>
                            {title}
                        </h3>
                        {description && (
                            <p className="text-sm text-gray-500 mt-1">{description}</p>
                        )}
                    </div>
                </div>
                {showChevron && (
                    <ChevronRight className={`h-5 w-5 ${isDestructive ? 'text-red-400' : 'text-gray-400'
                        } group-hover:text-gray-600 transition duration-300`} />
                )}
            </div>
        </div>
    );



    const SectionHeader = ({ title }) => (
        <div className="bg-gray-100 rounded-xl px-4 py-3 mb-4">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h2>
        </div>
    );

    return (
        <>
            <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 ${showSignOutConfirm || showDeleteConfirm ? "blur-xs" : ""}`}>
                {/* Header */}
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center h-16">
                            <div className="flex items-center">
                                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                                <h1 className="text-2xl font-bold text-gray-800">My TwachaX</h1>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
                    <div className="space-y-8">
                        {/* MY SKINVISION Section */}
                        <div>
                            <SectionHeader title="MY TwachaX" />
                            <div className="space-y-3">
                                <SettingsItem
                                    icon={CreditCard}
                                    title="My plan"
                                    description="Manage your subscription and billing"
                                    onClick={() => alert('Opening plan management...')}
                                />
                                <SettingsItem
                                    icon={User}
                                    title="My account"
                                    description="Personal information and preferences"
                                    onClick={() => navigate("/myaccount")}
                                />
                                <SettingsItem
                                    icon={Smartphone}
                                    title="Skin type"
                                    description="Update your skin type classification"
                                    onClick={() => alert('Opening skin type assessment...')}
                                />
                                <SettingsItem
                                    icon={AlertTriangle}
                                    title="Risk profile"
                                    description="View your personalized risk assessment"
                                    onClick={() => alert('Opening risk profile...')}
                                />
                                <SettingsItem
                                    icon={User}
                                    title="Personal Profile"
                                    description="Edit your personal information"
                                    onClick={() => alert('Opening personal profile...')}
                                />
                                <SettingsItem
                                    icon={FileText}
                                    title="My histopathology reports"
                                    description="View and manage your medical reports"
                                    onClick={() => alert('Opening reports...')}
                                />
                                <SettingsItem
                                    icon={Bell}
                                    title="Reminders & notifications"
                                    description="Customize your notification preferences"
                                    onClick={() => alert('Opening notification settings...')}
                                />
                                <SettingsItem
                                    icon={CreditCard}
                                    title="Add promo code"
                                    description="Enter a promotional code"
                                    onClick={() => alert('Opening promo code entry...')}
                                />

                                <SettingsItem
                                    icon={InfoIcon}
                                    title="Useful Information"
                                    description={"Learn about skin cancer and prevention"}
                                    onClick={() => navigate("/information")}
                                />

                                <SettingsItem
                                    icon={MapIcon}
                                    title="Skin Cancer Clinics Near Me"
                                    description={"Find skin cancer clinics near you"}
                                />
                                
                                <SettingsItem 
                                    icon={PlusIcon}
                                    title={"Teledermatologiests"}
                                    description={"Book an appointment with a dermatologist"}
                                    onClick={() => navigate("/teledermatologiests")}
                                />
        
                            </div>
                        </div>

                        {/* HELP & SUPPORT Section */}
                        <div>
                            <SectionHeader title="HELP & SUPPORT" />
                            <div className="space-y-3">
                                <SettingsItem
                                    icon={Contact}
                                    title="Contact us"
                                    description="Get in touch with our support team"
                                    onClick={() => alert('Opening contact form...')}
                                />
                                <SettingsItem
                                    icon={Key}
                                    title="Change my password"
                                    description="Update your account password"
                                    onClick={() => alert('Opening password change...')}
                                />
                                <SettingsItem 
                                    icon={Info}
                                    title="Skin cancer information"
                                    description="Learn about skin cancer and prevention"
                                    onClick={() => alert('Opening educational content...')}
                                />
                                <SettingsItem
                                    icon={HelpCircle}
                                    title="FAQ"
                                    description="Frequently asked questions"
                                    onClick={() => alert('Opening FAQ section...')}
                                />
                                <SettingsItem
                                    icon={FileText}
                                    title="Instructions for use"
                                    description="How to use the TwachaX app effectively"
                                    onClick={() => alert('Opening usage instructions...')}
                                />
                                <SettingsItem
                                    icon={FileText}
                                    title="Privacy Policy"
                                    description="Read our privacy policy"
                                    onClick={() => alert('Opening privacy policy...')}
                                />
                                <SettingsItem
                                    icon={FileText}
                                    title="Terms & Conditions"
                                    description="Read our terms of service"
                                    onClick={() => alert('Opening terms...')}
                                />
                                <SettingsItem
                                    icon={Lock}
                                    title="Privacy & Security settings"
                                    description="Manage your data and security preferences"
                                    onClick={() => alert('Opening privacy settings...')}
                                />
                                <SettingsItem
                                    icon={Trash2}
                                    title="Delete account"
                                    description="Permanently delete your TwachaX account"
                                    onClick={handleDeleteAccount}
                                    isDestructive={true}
                                />
                                <SettingsItem
                                    icon={LogOut}    
                                    title="Sign out"
                                    description="Sign out of your account"
                                    onClick={handleSignOut}
                                    isDestructive={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <BottomNavbar />
            </div>

            {/* Delete Account Confirmation Modal */}
            {  
                showDeleteConfirm && (
                    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
                            <div className="text-center">
                                <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <AlertTriangle className="h-8 w-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Delete Account</h3>
                                <p className="text-gray-600 mb-6">
                                    Are you sure you want to permanently delete your TwachaX account? This action cannot be undone and all your data will be lost.
                                </p>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => setShowDeleteConfirm(false)}
                                        className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition duration-300"
                                    >
                                        Cancel
                                    </button>
                                    {/* <button
                                                onClick={confirmDelete}
                                                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-700 transition duration-300"
                                            >
                                                Delete Account
                                            </button> */}

                                    <button
                                        onClick={confirmDelete}
                                        disabled={isLoading}
                                        className="flex-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                                Deleting account...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                Delete Account
                                            </div>
                                        )}

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Sign Out Confirmation Modal */}
            {
                showSignOutConfirm && (
                    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <LogOut className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Sign Out</h3>
                                <p className="text-gray-600 mb-6">
                                    Are you sure you want to sign out of your TwachaX account?
                                </p>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => setShowSignOutConfirm(false)}
                                        className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition duration-300"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={confirmSignOut}
                                        disabled={isLoading}
                                        className="flex-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                                Signing out...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                Sign Out
                                            </div>
                                        )}

                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default SettingsPage;