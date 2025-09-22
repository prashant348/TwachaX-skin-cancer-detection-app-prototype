import { useAuth } from "../context/AuthContext";
import { Shield, Camera, Plus, User, Bell, Settings, ArrowLeft, ZoomIn, ZoomOut, RotateCcw, Search, Calendar, Activity, TrendingUp, UserCircle } from 'lucide-react';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";


// function Dashboard() {
//   const { user, handleSignOut } = useAuth();

//   console.log(user.displayName)

//   return (
//     <div className="flex flex-col justify-between h-screen bg-gray-100">
//       {/* <h1 className="text-2xl font-bold mb-4">Welcome {user?.email}</h1> */}
//       <div className="w-full h-16 bg-red-600 flex items-center justify-between px-10">
//         <div className="h-12 w-12 bg-blue-400">

//         </div>

//         <div className="h-12 w-24 bg-blue-400">

//         </div>
//       </div>


//       <div className="w-full h-16 bg-amber-500">

//       </div>



//       {/* <button
//         onClick={handleSignOut}
//         className="bg-red-500 text-white p-2 rounded"
//       >
//         Signout
//       </button> */}

//     </div>
//   );
// }


const Dashboard = () => {

  const { user, handleSignOut } = useAuth();

  const [currentView, setCurrentView] = useState('overview'); // 'overview' or 'bodyMap'
  const [selectedSpots, setSelectedSpots] = useState([]);
  const [bodyView, setBodyView] = useState('front'); // 'front' or 'back'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [bodyPosition, setBodyPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  // Handle body tap to add spots
  const handleBodyTap = (event) => {
    if (currentView === 'bodyMap') {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left - bodyPosition.x) / zoomLevel);
      const y = ((event.clientY - rect.top - bodyPosition.y) / zoomLevel);

      const newSpot = {
        id: Date.now(),
        x: x,
        y: y,
        side: bodyView
      };

      setSelectedSpots([...selectedSpots, newSpot]);
    } else {
      // Transition to body map view
      setCurrentView('bodyMap');
    }
  };

  // Handle zoom
  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  // Handle drag
  const handleMouseDown = (e) => {
    if (currentView === 'bodyMap') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - bodyPosition.x, y: e.clientY - bodyPosition.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && currentView === 'bodyMap') {
      setBodyPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoomLevel(1);
    setBodyPosition({ x: 0, y: 0 });
  };

  const currentSideSpots = selectedSpots.filter(spot => spot.side === bodyView);

  if (currentView === 'overview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm fixed top-0 z-50 w-full">
          <div className="w-full px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-2xl font-bold text-gray-800">TwachaX</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <UserCircle className="w-8 h-8" />
                  {/* <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  /> */}
                  <span className="font-medium text-gray-700">{user.displayName}</span>
                </div>
              </div>
            </div>

          </div>
        </header>




        {/* Main Content */}
        <div className="max-w-md md:max-w-4xl mx-auto w-full px-4 py-4 mt-14">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Sidebar */}
            <div className="md:col-span-1 space-y-4 w-full">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-lg p-4 mb-2 w-full">
                <div className="flex items-center mb-4">
                  <UserCircle className="w-8 h-8 mr-4" />
                  {/* <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  /> */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{user.displayName}</h3>
                    <div className="flex space-x-4 text-sm text-gray-600 mt-2">
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer">Find skin type</span>
                      <span>|</span>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer">Find risk profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-4 mb-2 w-full">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button onClick={() => navigate("/camera")} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center">
                    <Camera className="mr-2 h-5 w-5" />
                    New Skin Scan
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Check-up
                  </button>
                </div>
              </div>

              {/* Learning Section */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg p-4 mb-2 w-full text-white">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-100 mb-2">Interested in learning more about skin cancer?</p>
                    <span className="text-white font-semibold underline cursor-pointer hover:text-blue-100">Read articles</span>
                  </div>
                </div>
              </div>

              {/* Reminder Card */}
              <div className="bg-gray-100 rounded-2xl shadow-lg p-4 w-full">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Set Skin Check Reminder</h4>
                <p className="text-gray-600 text-sm mb-4">Get regular reminders to check your skin health</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  Set Reminder
                </button>
              </div>
            </div>

            {/* Main Body Map */}
            <div className="md:col-span-2 w-full flex justify-center">
              <div className="bg-white mb-12 rounded-2xl shadow-lg p-4 sm:p-8 h-full w-full max-w-[400px] flex flex-col items-center">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Body Map</h2>
                  <p className="text-gray-600">Tap on any part of the body to start scanning</p>
                </div>

                {/* Body Diagram */}
                <div className="flex flex-col items-center w-full">
                  <div
                    className="relative cursor-pointer rounded-2xl transition duration-300 select-none w-full"
                    style={{ maxWidth: 300, height: 500, margin: '0 auto', background: '#e6f0ff', padding: 0 }}
                    onClick={handleBodyTap}
                  >
                    <img src="../../humanbody-crop.jpg" alt="Body Diagram" className="w-full h-full  object-cover" />
                    {/* Spots overlay */}
                    {currentSideSpots.map((spot) => (
                      <div
                        key={spot.id}
                        className="absolute w-8 h-8 -mt-4 -ml-4 z-10"
                        style={{
                          left: spot.x,
                          top: spot.y
                        }}
                      >
                        <div className="relative">
                          {/* <svg width="32" height="40" viewBox="0 0 32 40">
                            <path
                              d="M16 0C7.163 0 0 7.163 0 16c0 16 16 24 16 24s16-8 16-24C32 7.163 24.837 0 16 0z"
                              fill="#3B82F6"
                            />
                            <circle cx="16" cy="16" r="6" fill="white" />
                          </svg> */}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Body View Tabs */}
                  {/* <div className="flex mt-6 bg-gray-100 rounded-xl p-1">
                    <button
                      className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${bodyView === 'front'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                      onClick={() => setBodyView('front')}
                    >
                      Front (0)
                    </button>
                    <button
                      className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${bodyView === 'back'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                      onClick={() => setBodyView('back')}
                    >
                      Back (0)
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <BottomNavbar />
        </div>
      </div>
    );
  }

  // Body Map Detail View
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="w-full px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView('overview')}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {currentSideSpots.length} spots
              </h1>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleZoom(-0.2)}
                className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <ZoomOut className="h-5 w-5 text-gray-600" />
              </button>
              <span className="text-sm text-gray-600 min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => handleZoom(0.2)}
                className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <ZoomIn className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={resetView}
                className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <RotateCcw className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Body Map */}
      <div className="flex-1 overflow-hidden relative flex">
        <div
          className="w-full h-screen flex items-center justify-center cursor-move"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handleMouseDown}
        >
          <div
            className="relative flex justify-center items-center"
            style={{
              transform: `translate(${bodyPosition.x}px, ${bodyPosition.y}px) scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
            onClick={handleBodyTap}
          >
            {/* Human Body SVG - Larger for detail view */}
            <img src="../../humanbody-crop.jpg" alt="Body Diagram" className="w-full h-full sm:w-1/2 sm:h-1/2 object-cover" />

            {/* Render spots */}
            {currentSideSpots.map((spot) => (
              <div
                key={spot.id}
                className="absolute w-8 h-8 -mt-4 -ml-4"
                style={{
                  left: spot.x,
                  top: spot.y
                }}
              >
                <div className="relative">
                  <svg width="17" height="25" viewBox="0 0 32 40">
                    <path
                      d="M16 0C7.163 0 0 7.163 0 16c0 16 16 24 16 24s16-8 16-24C32 7.163 24.837 0 16 0z"
                      fill="#3B82F6"
                    />
                    <circle cx="16" cy="16" r="6" fill="white" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mx-4 max-w-md ">
            <p className="text-gray-700 font-medium mb-2">Add a new spot by tapping on the body</p>
            <div className="flex items-center justify-center text-blue-600">
              <ZoomIn className="h-5 w-5 mr-2" />
              <span className="text-sm">Pinch to zoom in</span>
            </div>
          </div>
        </div>

        {/* Body View Tabs */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center">
          <div className="flex bg-white rounded-xl p-1 shadow-lg">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${bodyView === 'front'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setBodyView('front')}
            >
              Front ({selectedSpots.filter(s => s.side === 'front').length})
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${bodyView === 'back'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => setBodyView('back')}
            >
              Back ({selectedSpots.filter(s => s.side === 'back').length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
