import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { Camera, RotateCcw, Check, X, Zap, ArrowLeft, Info } from 'lucide-react';

const CameraCapture = () => {
  // Only one webcamRef needed
  const [image, setImage] = useState(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const capture = () => {
    setIsCapturing(true);
    // Use actual webcam screenshot
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      setImage(screenshot);
    }
    setIsCapturing(false);
  };

  const retake = () => {
    setImage(null);
  };

  const confirmImage = () => {
    navigate("/Response", { state: { image } });
  };

  const toggleFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  const handleBack = () => {
    navigate("/dashboard")
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Header */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent p-4 ${image? "hidden": "block"}`}>
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50 transition duration-300"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button> 

          <div className={`text-center`}>
            <h1 className="text-white font-bold text-lg">Skin Analysis</h1>
            <p className="text-white/70 text-sm">Position the area within the circle</p>
          </div>

          <button
            onClick={toggleFlash}
            className="bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50 transition duration-300"
          >
            {isFlashOn ?
              <Zap className="h-6 w-6 text-yellow-400" /> :
              <Zap className="h-6 w-6 text-white opacity-50" />
            }   
          </button>
        </div>
      </div>

      {/* Instructions Overlay */}
      {showInstructions && !image && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 mx-4 max-w-sm text-center">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Info className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Capture Guidelines</h3>
            <ul className="text-left text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Position the skin area within the circle
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Ensure good lighting conditions
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Keep the camera steady
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Fill the circle completely
              </li>
            </ul>
            <button
              onClick={() => setShowInstructions(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Camera View */}
      {!image && (
        <>
          {/* Webcam Component */}
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "environment" }}
            className="w-full h-screen object-cover"
          />

          {/* Circular Overlay with guides only, no animated gradient ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Dark Overlay with Circular Cutout */}
            {/* <div className="absolute inset-0 bg-black/60"></div> */}
            <div className="relative z-10">
              <div className="w-80 h-80 rounded-full p-1">
                {/* <div className="w-full h-full rounded-full bg-transparent border-4 border-white/30 relative"> */}
                  {/* Inner Circle */}
                  {/* <div className="absolute inset-4 rounded-full border-2 border-white/50"></div> */}

                  {/* Center Point */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>

                  {/* Corner Guides */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white rounded-br-lg"></div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Capture Instructions */}
          <div className="absolute bottom-32 left-0 right-0 text-center px-4">
            {/* <p className="text-white text-lg font-medium mb-2">Position the skin area within the circle</p> */}
            {/* <p className="text-white/70 text-sm">Make sure the area is well-lit and in focus</p> */}
          </div>
        </>
      )}

      {/* Captured Image Preview */}
      {image && (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Image Captured</h3>
              <p className="text-gray-600">Review your image before analysis</p>
            </div>

            <div className="relative mb-6">
              <img
                src={image}
                alt="captured skin area"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2">
                <Check className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={retake}
                className="bg-gray-200 text-gray-800 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-300 transition duration-300 flex items-center justify-center"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Retake
              </button>

              <button
                onClick={confirmImage}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Check className="mr-2 h-5 w-5" />
                Analyze
              </button>
            </div>

            {/* Image Quality Indicators */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-2 w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Focus</span>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-2 w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Lighting</span>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-2 w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Position</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      {!image && (
        <>
          {/* <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "environment" }} // rear camera
            className="w-full h-screen object-cover"
          /> */}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="flex items-center justify-center">
              {/* Capture Button */}
              <div className="relative ">
                <button
                  onClick={capture}
                  disabled={isCapturing}
                  className="bg-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCapturing ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  )}
                </button>

                {/* Capture Ring Animation */}
                {isCapturing && (
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping"></div>
                )}
              </div>
            </div>

            {/* Tips */}
            <div className="text-center mt-4">
              <p className="text-white/80 text-sm">Tap to capture • Hold steady • Good lighting recommended</p>
            </div>
          </div>
        </>
      )}

      {/* Flash Effect */}
      {isCapturing && (
        <div className="absolute inset-0 bg-white animate-pulse opacity-30 pointer-events-none"></div>
      )}
    </div>
  );
};

export default CameraCapture;


// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { useNavigate } from "react-router-dom";



// const CameraCapture = () => {
//   const webcamRef = useRef(null);
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   // Capture function
//   const capture = () => {
//     const screenshot = webcamRef.current.getScreenshot();
//     setImage(screenshot);
//   };

//   return (
//     <>
//     <div className="relative w-full h-screen bg-black flex items-center justify-center">
//       {/* Webcam */}
//       {!image && (
//         <Webcam
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode: "environment" }} // rear camera
//           className="w-full h-screen object-cover"
//         />
//       )}

//       {/* Circular Overlay */}
//       {!image && (
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
//           {/* <div className="w-64 h-64 rounded-full border-4 border-white"></div> */}
//         </div>
//       )}

//       {/* Capture Button */}
//       {!image && (
//         <button
//           onClick={capture}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-lg font-bold"
//         >
//           📸 Capture
//         </button>
//       )}

//       {/* Show Captured Image */}
//       {image && (
//         <div className="flex flex-col items-center justify-center">
//           <img src={image} alt="captured" className="rounded-lg shadow-lg" />
//           <button
//             onClick={() => navigate("/Response", { state: { image } })}
//             className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"
//           >
//             Confirm
//           </button>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default CameraCapture;
