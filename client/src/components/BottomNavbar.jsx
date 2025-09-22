import React from 'react'
import { Camera, User, Bell, Activity, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-0 py-2 w-full">
            <div className="flex justify-around items-center w-full mx-auto">

                <NavLink to={'/dashboard'} className={(e) => e.isActive? "text-blue-600": "text-gray-400"}>
                <div className="flex flex-col items-center ">
                    <User className="h-6 w-6 mb-1" />
                    <span className="text-xs font-medium">My body</span>
                </div>
                </NavLink>

                <div className="flex flex-col items-center text-gray-400">
                    <Bell className="h-6 w-6 mb-1" />
                    <span className="text-xs">Messages</span>
                </div>

                <NavLink to={"/camera"} >
                <div className="flex flex-col items-center">
                    <div className="bg-blue-600 rounded-full p-3 mb-1">
                        <Camera className="h-6 w-6 text-white" />
                    </div>
                </div>
                </NavLink>

                <div className="flex flex-col items-center text-gray-400">
                    <Activity className="h-6 w-6 mb-1" />
                    <span className="text-xs">UV Index</span>
                </div>
                <NavLink to={'/settings'} className={(e) => e.isActive? "text-blue-600": "text-gray-400"}>
                    <div className="flex flex-col items-center ">
                        <Settings className="h-6 w-6 mb-1" />
                        <span className="text-xs">
                            Settings
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default BottomNavbar