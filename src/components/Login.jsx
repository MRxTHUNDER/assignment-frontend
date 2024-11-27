import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimage from "../assets/bgimage1.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if the user is already logged in

  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   // Sign in the user using Firebase authentication
    //   const userCredential = await signInWithEmailAndPassword(auth, email, password);

    //   // If "Remember Me" is checked, save the user's session in localStorage
    //   if (rememberMe) {
    //     localStorage.setItem("rememberedUser", JSON.stringify(userCredential.user));
    //   }

    //   // Redirect to the dashboard upon successful login
    navigate("/dashboard/emailform");
    // } catch (error) {
    //   if (error instanceof Error) {
    //     setError(error.message);
    //   } else {
    //     setError("An unknown error occurred.");
    //   }
    // }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg bg-white">
        {/* Left side - Form Section */}
        <div className="w-1/2 p-8">
          <div className="mb-6">
            {/* <img src={Logo} alt="FirstList" className="w-25 h-12 mb-4" /> */}
            <h1 className="text-4xl font-bold pb-8">
  <span className="text-purple-400">CONTRO</span>
  <span className="text-gray-800">SEPTICON</span>
</h1>
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-gray-500">
              Please login to continue with your account
            </p>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="jonas.kahnwald@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember Me
              </label>
            </div> */}

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-purple-400 text-white py-2 rounded-md hover:bg-blue-400 transition"
              onClick={handleLogin}
            >
              Login
            </button>

            {/* Sign in option */}
            <p className="text-center text-gray-500 mt-4">
              Need an account?{" "}
              <Link to="/Signup" className="text-blue-600">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* Right side - Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src={bgimage}
            alt="Background"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
