import React, { useState, useEffect } from 'react';
import { ArrowLeft, Brain, Shield, AlertTriangle, CheckCircle, Download, Share2, Calendar, Camera, Zap, Target, TrendingUp, Activity } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Response = () => {
  const [isThinking, setIsThinking] = useState(true);
  const [analysisData, setAnalysisData] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80");
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  // Simulate AI thinking process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThinking(false);
      // Simulate AI response from backend
      setAnalysisData({
        riskLevel: 'Low Risk',
        confidence: 94,
        findings: [
          'No suspicious patterns detected',
          'Normal pigmentation observed',
          'Regular border characteristics',
          'Symmetric appearance confirmed'
        ],
        recommendations: [
          'Continue regular self-examinations',
          'Monitor for any changes in size or color',
          'Schedule routine check-up in 6 months',
          'Use sunscreen SPF 30+ daily'
        ],
        aiInsights: 'The analyzed skin area shows normal characteristics with no concerning features. The pigmentation pattern is uniform and the borders are well-defined, which are positive indicators.',
        nextSteps: 'Keep monitoring this area and maintain good skin care practices.'
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate('/camera');
  };

  const handleDownload = () => {
    alert('Downloading analysis report...');
  };

  const handleShare = () => {
    alert('Sharing analysis...');
  };

  const handleScheduleFollowup = () => {
    alert('Scheduling follow-up appointment...');
  };

  const ThinkingAnimation = () => (
    <div className="text-center py-12">
      <div className="relative">
        {/* Pulsing Brain Icon */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6 animate-pulse">
          <Brain className="h-12 w-12 text-white" />
        </div>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-1 mb-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2">AI is analyzing your image...</h3>
        <p className="text-gray-600">This may take a few moments</p>
        
        {/* Progress Bar */}
        <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto mt-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
        </div>
      </div>
    </div>
  );

  const RiskBadge = ({ level, confidence }) => {
    const getRiskColor = (risk) => {
      switch(risk) {
        case 'Low Risk': return 'from-green-500 to-emerald-500';
        case 'Medium Risk': return 'from-yellow-500 to-orange-500';
        case 'High Risk': return 'from-red-500 to-pink-500';
        default: return 'from-gray-500 to-gray-600';
      }
    };

    const getRiskIcon = (risk) => {
      switch(risk) {
        case 'Low Risk': return CheckCircle;
        case 'Medium Risk': return AlertTriangle;
        case 'High Risk': return AlertTriangle;
        default: return Shield;
      }
    };

    const Icon = getRiskIcon(level);

    return (
      <div className={`bg-gradient-to-r ${getRiskColor(level)} text-white rounded-2xl p-6 shadow-lg`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-2">
              <Icon className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">{level}</h3>
            </div>
            <p className="text-white text-opacity-90">AI Confidence: {confidence}%</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{confidence}%</div>
            <div className="text-sm opacity-90">Accuracy</div>
          </div>
        </div>
      </div>
    );
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
            
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-800">AI Analysis Result</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={handleDownload}
                className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
              >
                <Download className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Uploaded Image */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Analyzed Image</h2>
            <div className="relative inline-block">
              <img 
                src={image} 
                alt="Uploaded skin image"
                className="w-80 h-80 object-cover rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-2">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
            <p className="text-gray-600 mt-4">Image captured and processed successfully</p>
          </div>
        </div>

        {/* Analysis Result */}
        <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl p-6 lg:p-8 border border-white border-opacity-20">
          {isThinking ? (
            <ThinkingAnimation />
          ) : (
            <div className="space-y-8">
              {/* Risk Assessment */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Target className="h-7 w-7 text-blue-600 mr-3" />
                  Risk Assessment
                </h3>
                <RiskBadge level={analysisData.riskLevel} confidence={analysisData.confidence} />
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  AI Insights
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">{analysisData.aiInsights}</p>
              </div>

              {/* Key Findings */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Activity className="h-6 w-6 text-green-600 mr-2" />
                  Key Findings
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {analysisData.findings.map((finding, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Recommendations
                </h4>
                <div className="space-y-3">
                  {analysisData.recommendations.map((rec, index) => (
                    <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Zap className="h-6 w-6 text-orange-600 mr-2" />
                  Next Steps
                </h4>
                <p className="text-gray-700 text-lg">{analysisData.nextSteps}</p>
              </div>

              {/* Action Buttons */}
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <button 
                  onClick={handleScheduleFollowup}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Follow-up
                </button>
                
                <button 
                  onClick={() => navigate("/camera")}
                  className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-red-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  New Analysis
                </button>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Medical Disclaimer:</strong> This AI analysis is for informational purposes only and should not replace professional medical advice. 
                    Please consult with a healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>
              </div> 
            </div>
          )}
        </div>

        {/* Quick Stats */}
        {!isThinking && (
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">2.3s</div>
              <div className="text-sm text-gray-600">Analysis Time</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">94%</div>
              <div className="text-sm text-gray-600">Confidence</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">AI v2.0</div>
              <div className="text-sm text-gray-600">Model Used</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Response;