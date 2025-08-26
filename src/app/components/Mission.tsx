import React from 'react';

const Mission = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-0">
        
        {/* Feature 1 - Payment Options */}
        <div className="pl-0 p-8 border-r border-b border-dashed border-gray-300">
          <div className="flex space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold"></span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Human-Centered Applications
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Tools that make complex processes more personal and intuitive.
          </p>
        </div>

        {/* Feature 2 - Down Payments */}
        <div className="p-8 border-b border-dashed border-gray-300">
          <div className="mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold"></span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Experience Platforms
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Digital spaces designed around how people actually think and feel.
            </p>
        </div>

        {/* Feature 3 - Klarna */}
        <div className="pl-0 p-8 border-r border-dashed border-gray-300">
          <div className="mb-4">
            <div className="w-10 h-10 bg-pink-400 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Thoughtful Interfaces
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Technology that adapts to human behavior, not the other way around. </p>
        </div>

        {/* Feature 4 - Recurring Payments */}
        <div className="p-8">
          <div className="mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold"></span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Professional Assistance Applications
          </h3>
          <p className="text-gray-600 leading-relaxed">
            AI-powered tools that simplify complex workflows across different industries.</p>
        </div>

      </div>
    </div>
  );
};

export default Mission;