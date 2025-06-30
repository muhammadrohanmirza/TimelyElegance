'use client';
import { useEffect, useState } from 'react';
import { User } from 'lucide-react';

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<{ name: string; email: string } | null>(null);

  // Load login data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('loginData');
    if (storedData) {
      setLoggedInUser(JSON.parse(storedData));
    }
  }, []);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!name.trim()) {
      alert('Please enter your name');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      const userData = { name, email };
      setLoggedInUser(userData);
      localStorage.setItem('loginData', JSON.stringify(userData));
      setShowLogin(false);
      setName('');
      setEmail('');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loginData');
    setShowLogin(false);
  };

  return (
    <div className="relative">
      {/* Button with user icon and name/email */}
      <button
        className="flex flex-col sm:flex-row sm:space-x-2 text-gray-400 hover:text-white items-center sm:items-start text-center sm:text-left mx-auto"
        onClick={() => setShowLogin(!showLogin)}
      >
        <User size={20} />
        {loggedInUser && (
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-white text-[20px] leading-tight">{loggedInUser.name}</span>
            <span className="text-gray-300 text-[15px] sm:text-[9px]">{loggedInUser.email}</span>
          </div>
        )}
      </button>

      {/* Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>

            {/* Show Logout Button if already logged in */}
            {loggedInUser ? (
              <>
                <h2 className="text-xl text-black font-semibold text-center mb-6">You are logged in</h2>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 font-semibold text-white py-2 rounded-md hover:bg-black transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl text-black font-semibold text-center mb-4">Login</h2>

                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border text-black border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border text-black border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />

                <button
                  className="w-full bg-gray-500 font-semibold text-white py-2 rounded-md hover:bg-black transition"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
