'use client';
import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzhMIDWUf6wL3NRMkHzdQsk8uf0PnaeJAs5VGAD8bmPoJETpAineIyiqCFJ5T0hknJ_/exec';

  const handleSubscribe = async () => {
    if (email.trim() === '') return;

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (subscribed) {
      const timer = setTimeout(() => {
        setSubscribed(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [subscribed]);

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
      <p className="text-gray-400 mb-4">Subscribe for latest updates and offers</p>

      <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent px-3 py-2 w-full outline-none text-sm"
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 px-3 py-2 hover:bg-blue-700"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>

      {subscribed && (
        <p className="text-green-500 text-sm mt-2">Thanks for subscribing!</p>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
