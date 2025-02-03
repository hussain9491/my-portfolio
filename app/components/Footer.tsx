

'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [messages, setMessages] = useState<{ email: string; message: string }[]>([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (message.trim() === '') return;
    setMessages([...messages, { email, message }]);
    setEmail('');
    setMessage('');
  };

  return (
    <section className="text-gray-600 body-font relative">
      
      <div className="container px-5 py-24 mx-auto flex flex-col items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            drop your message here
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
            
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Send
            </button>
          </form>
        </div>
        <div className="mt-10 w-full max-w-lg">
          <h3 className="text-gray-900 text-lg font-medium mb-4">Messages</h3>
          {messages.length === 0 && <p className="text-gray-500">No messages yet.</p>}
          <ul className="space-y-4">
            {messages.map((msg, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800"><strong>{msg.email}</strong></p>
                <p className="text-gray-600">{msg.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
