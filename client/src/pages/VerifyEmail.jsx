import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || auth.currentUser?.email || "";
  const [resendLoading, setResendLoading] = useState(false);

  const handleResend = async () => {
    try {
      setResendLoading(true);
      if (!auth.currentUser) {
        alert("Please sign in first to resend verification.");
        setResendLoading(false);
        return;
      }
      await sendEmailVerification(auth.currentUser);
      alert("Verification email resent. Check your inbox.");
    } catch (err) {
      console.error("Resend error:", err);
      alert(err.message || "Could not resend email");
    } finally {
      setResendLoading(false);
    }
  };

  const handleCheck = async () => {
    // user may have clicked the link — refresh user state
    try {
      if (!auth.currentUser) {
        alert("Please sign in first.");
        return;
      }
      // reload user to get latest emailVerified value
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        // verified — go to dashboard
        navigate("/dashboard");
      } else {
        alert("Email not verified yet. Please check your inbox (and spam).");
      }
    } catch (err) {
      console.error("Check verification error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-3">Verify your email</h2>
        <p className="mb-4">A verification link has been sent to <strong>{email}</strong>.</p>
        <p className="text-sm text-gray-600 mb-4">Please open your email and click the link. After verifying, come back and press "I verified — Check".</p>

        <div className="flex gap-3 justify-center">
          <button onClick={handleResend} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={resendLoading}>
            {resendLoading ? "Resending..." : "Resend link"}
          </button>
          <button onClick={handleCheck} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            I verified — Check
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">If you still don't get email, check spam or try another email provider.</p>
      </div>
    </div>
  );
}
