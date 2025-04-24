import { useEffect } from 'react';

function ImageModal({ image, title, onClose }) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image container */}
        <div className="relative">
          <img 
            src={image} 
            alt={title || 'Enlarged image'} 
            className="max-h-[85vh] max-w-full mx-auto object-contain"
          />
          
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageModal; 