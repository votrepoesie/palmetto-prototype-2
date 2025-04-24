import { useEffect, useState, useRef } from 'react';

function ImageModal({ image, title, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  // Mock data for demonstration
  const mockData = {
    description: "This image shows a photovoltaic system with rapid shutdown labels. The red labels indicate safety requirements and technical specifications for the DC power source. Maximum voltage and circuit current values should be filled in on the center label. The HDWave inverter is visible at the bottom of the equipment.",
    tags: [
      { id: 1, name: "Required Labels", category: "compliance" },
      { id: 2, name: "NEC 2017 Compliant", category: "compliance" },
      { id: 3, name: "Rapid Shutdown", category: "safety" },
      { id: 4, name: "Inverter", category: "equipment" },
      { id: 5, name: "DC Power", category: "technical" }
    ]
  };

  // Reset zoom when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [image]);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom(prevZoom => prevZoom + 0.5);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(prevZoom => prevZoom - 0.5);
      // Reset position if we're going back to zoom level 1
      if (zoom <= 1.5) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Handle double click to zoom in
  const handleDoubleClick = (e) => {
    if (zoom === 1) {
      setZoom(2);
      
      // Calculate position to zoom in on click point
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = (rect.width / 2) - (e.clientX - rect.left);
        const y = (rect.height / 2) - (e.clientY - rect.top);
        setPosition({ x, y });
      }
    } else {
      handleResetZoom();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header toolbar */}
      <div className="h-16 w-full flex items-center justify-between px-6 text-white bg-black bg-opacity-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Close"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-lg truncate max-w-md">{title}</span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-full mr-2">
            <button 
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className={`p-2 rounded-l-full ${zoom <= 1 ? 'text-gray-500' : 'hover:bg-white hover:bg-opacity-10 text-white'}`}
              aria-label="Zoom out"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
              </svg>
            </button>
            <span className="px-2 text-sm font-medium">{Math.round(zoom * 100)}%</span>
            <button 
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className={`p-2 rounded-r-full ${zoom >= 3 ? 'text-gray-500' : 'hover:bg-white hover:bg-opacity-10 text-white'}`}
              aria-label="Zoom in"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full" aria-label="Info">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Content container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Image container - takes 2/3 of the space on larger screens */}
        <div 
          ref={imageContainerRef}
          className="flex-1 md:w-2/3 flex items-center justify-center p-4 relative overflow-hidden"
          onMouseDown={handleMouseDown}
          onDoubleClick={handleDoubleClick}
          style={{ cursor: zoom > 1 ? 'move' : 'default' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          <div 
            className="transition-transform duration-200 ease-out"
            style={{ 
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: 'center',
              willChange: 'transform'
            }}
          >
            <img 
              src={image} 
              alt={title || 'Image'} 
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
              style={{ opacity: isLoading ? 0 : 1 }}
              onLoad={handleImageLoad}
              draggable="false"
            />
          </div>
          
          {/* Zoom indicator that shows briefly when zoom changes */}
          {zoom > 1 && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none">
              <div className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                {zoom > 1 ? 'Double-click to reset zoom' : 'Double-click to zoom'}
              </div>
            </div>
          )}
        </div>
        
        {/* Text and tags sidebar - takes 1/3 of the space on larger screens */}
        <div className="md:w-1/3 bg-white text-gray-800 p-6 overflow-y-auto flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          
          {/* Description section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Description</h3>
            <p className="text-base text-gray-700">{mockData.description}</p>
          </div>
          
          {/* Tags section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {mockData.tags.map(tag => (
                <span 
                  key={tag.id} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    tag.category === 'compliance' ? 'bg-green-100 text-green-800' :
                    tag.category === 'safety' ? 'bg-red-100 text-red-800' :
                    tag.category === 'equipment' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal; 