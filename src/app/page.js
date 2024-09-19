'use client'; 
import { useEffect, useState } from "react";

export default function Home() {
  const lights = ['red', 'yellow', 'green'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycleLights = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % lights.length);
    };

    const interval = setInterval(cycleLights, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [lights.length]);

  const currentLight = lights[currentIndex]; // Determine the current light color

  // Define messages for each light
  const messages = {
    red: "Stop",
    yellow: "Caution",
    green: "Go",
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Traffic Light */}
      <div className="flex flex-col items-center justify-around w-20 h-60 bg-gray-800 rounded-lg p-4 mb-4">
        {/* Red Light */}
        <div
          className={`w-12 h-12 rounded-full transition-opacity duration-1000 ${
            currentLight === 'red' ? 'bg-red-500 opacity-100' : 'bg-red-900 opacity-30'
          }`}
        ></div>

        {/* Yellow Light */}
        <div
          className={`w-12 h-12 rounded-full transition-opacity duration-1000 ${
            currentLight === 'yellow' ? 'bg-yellow-500 opacity-100' : 'bg-yellow-900 opacity-30'
          }`}
        ></div>

        {/* Green Light */}
        <div
          className={`w-12 h-12 rounded-full transition-opacity duration-1000 ${
            currentLight === 'green' ? 'bg-green-500 opacity-100' : 'bg-green-900 opacity-30'
          }`}
        ></div>
      </div>

      {/* Message Display */}
      <div className="text-xl font-bold text-gray-700">
        {messages[currentLight]} {/* Display the message based on the current light */}
      </div>
    </div>
  );
}
