"use client";
import React, { useState, useEffect, useRef } from "react";

const InvoicePreview = ({ htmlCode }) => {
  const [scale, setScale] = useState(1);
  const previewContainerRef = useRef(null);
  const previewContentRef = useRef(null);

  useEffect(() => {
    const previewContainer = previewContainerRef.current;

    const handleWheel = (event) => {
      event.preventDefault();

      if (event.deltaY < 0) {
        setScale((prevScale) => Math.min(2, prevScale + 0.1));
      } else {
        setScale((prevScale) => Math.max(0.5, prevScale - 0.1));
      }
    };

    previewContainer.addEventListener("wheel", handleWheel);

    return () => {
      previewContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(2, prevScale + 0.1));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(0.5, prevScale - 0.1));
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute top-4 right-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleZoomOut}>
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleZoomIn}>
          +
        </button>
      </div>
      <div ref={previewContainerRef} className="flex-grow overflow-hidden">
        <div
          ref={previewContentRef}
          className="transform-origin-top-left"
          style={{ transform: `scale(${scale})` }}
          dangerouslySetInnerHTML={{ __html: htmlCode }}
        />
      </div>
    </div>
  );
};

export default InvoicePreview;
