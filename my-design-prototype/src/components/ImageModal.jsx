import { useEffect, useState } from 'react';

function ImageModal({ image, title, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

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
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full" aria-label="Info">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Image container */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={image} 
          alt={title || 'Image'} 
          className="max-h-full max-w-full object-contain transition-opacity duration-300"
          style={{ opacity: isLoading ? 0 : 1 }}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

export default ImageModal; 