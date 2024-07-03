import { useState } from "react";
import useTheme from "../../contexts/Theme"

export const ChatBox = () => {
  const { theme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    }, 2000); // Simulated delay
  };

  return (
    <div className="rounded-full text-white right-4 md:right-24 bottom-7 md:bottom-12 fixed z-[70] flex flex-col items-end">
      {/* ChatBox Content */}
      <div className={`transform transition-transform duration-1000 ease-in-out ${isChatOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white border'} md:mx-0 mx-4 mb-4 rounded-xl`}>
        {isChatOpen && (
          <div className="transition-opacity duration-300 ease-in-out">
            <div className={`bg-zinc-700 p-4 mb-6 rounded-t-xl`}>
              <h3 className={`font-semibold text-lg`}>Have a question? Drop in your message <span className="text-2xl">👇</span></h3>
              <p className="text-gray-300">Feel free to message me anytime 😄</p>
            </div>
            <div className="flex flex-col p-4">
              <label className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-normal mb-2`}>
                Email Address
              </label>
              <input placeholder="Enter your email" type="email" required className={`${theme==='dark'?'bg-zinc-800 border':""} rounded-xl border border-gray-200 px-1 py-2 mb-4 ps-2`}></input>
              <span className="absolute left-0 h-px bottom-0 w-full bg-gradient-to-r from-blue-400/0 via-blue-500 to-blue-400/0 transition-all duration-1000 button-hover-effect"></span>
              <small className="h-4 min-h-4 text-red-500 font-semibold"></small>
              {/* Enter your message */}
              <label className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-normal mb-2`}>
                Message
              </label>
              <textarea typeof="text" rows={4} required placeholder="Enter Your Message?" className={`mb-4 ${theme === 'dark' ? 'text-black bg-zinc-800 border rounded' : 'border text-black'} p-2`}></textarea>
              <small className="h-4 min-h-4 text-red-500 font-semibold"></small>
              <button
              onClick={handleSubmit}
              className={`relative border border-gray-200 rounded-2xl p-2 text-lg font-bold md:mb-10 mb-4  ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                 >
                 {isSubmitting ? 'Submitting...' : 'Submit'}
                 </button>
                 
              {isSubmitted && <small className="text-green-500 font-semibold">Submitted successfully, Great 🎉</small>}
            </div>
           
          </div>
        )}
      </div>

      <button onClick={() => { setIsChatOpen(!isChatOpen) }} className={`${theme === 'dark' ? 'bg-gray-800 border-blue-500' : 'bg-gray-200 border-blue-600'} p-4 rounded-full border hover:scale-110 transition duration-300 hover:shadow-lg`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
        </svg>
      </button>
       
    </div>
  );
};
