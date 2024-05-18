import React, { useState, useEffect } from 'react';
import { readDocument } from '../../services/UserServices';




function ReadScreenComponent() {


  const textId = localStorage.getItem("textId")
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      const response = await readDocument(textId);
      if (response.status === 200) {
        setText(response.data.content);
      }
    };
    fetchText();
  }
  , [textId]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto flex"> {/* Main content container */}

        {/* Sidebar (Summary/Notes) */}
        <div className="w-96 mr-8"> 
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            {/* ... content for the Summary section ... */}
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Notes</h2>
            {/* ... content for the Notes section ... */}
          </div>
        </div>

        {/* Reading View Area */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 relative"> {/* Relative for icon positioning */}

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Untitled</h1>
            <div className="flex items-center">
           
              
            </div>
          </div>

          {/* Text Content */}
          <div className="whitespace-pre-wrap">
            {text}
          </div>

          {/* Vertical Button List (Positioned) */}
          
        </div>

        <div className="absolute top-20 right-8 flex flex-col space-y-3">
            <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
              Hi
            </button>
            <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
              2
            </button>
            <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
              3
            </button>
            <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
              4
            </button>
          </div> 
      </div>
    </div>


    
    
  );
}

export default ReadScreenComponent;
