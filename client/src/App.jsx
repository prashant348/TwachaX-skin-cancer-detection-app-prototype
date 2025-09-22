import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import VerifyEmail from "./pages/VerifyEmail";
import SettingsPage from "./pages/settings/Settings";
import CameraCapture from "./pages/CameraCapture";
import MyAccount from "./pages/settings/MyAccount";
import Response from "./pages/Response";
import Information from "./pages/settings/Information";
import Teledermatologist from "./pages/settings/Teledermatologiest";
import About from "./pages/About";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  // if not signed in → redirect to /signin
  if (!user) return <Navigate to="/signin" />;

  // if signed in but email not verified → redirect to verify page
  if (!user.emailVerified) return <Navigate to="/verify-email" />;

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Landingpage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/camera" element={<CameraCapture />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/response" element={<Response />}></Route>
          <Route path="/information" element={<Information />} />
          <Route path="/teledermatologiests" element={<Teledermatologist />}/>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

