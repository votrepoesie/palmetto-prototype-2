function PhotoCluster({ cluster, onClick, isHighlighted, highlightedImageIndexes = [], selectedChecklistItem }) {
  const { title, images } = cluster;
  
  // Show at most 4 images in the cluster preview (Google Photos style)
  const previewImages = images.slice(0, 4);
  
  // Helper to render appropriate thumbnail for an item
  const renderThumbnail = (item, index, additionalClasses = '') => {
    if (typeof item === 'object' && item.type === 'pdf') {
      return (
        <div className={`relative w-full h-full ${additionalClasses}`}>
          <iframe
            src={`${item.url}#page=1&view=FitH`}
            className="absolute inset-0 w-full h-full"
            title={item.title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
            <span className="text-xs text-white font-semibold truncate block">{item.title}</span>
          </div>
        </div>
      );
    }
    
    return (
      <img 
        src={item} 
        alt={`${title} image ${index + 1}`}
        className={`w-full h-full object-cover ${additionalClasses}`}
      />
    );
  };

  return (
    <div 
      onClick={onClick}
      className={`cluster-card bg-white hover:bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all ${
        isHighlighted ? 'ring-2 ring-blue-500 transform scale-[1.02]' : 
        selectedChecklistItem ? 'opacity-60 hover:opacity-90' : ''
      }`}
    >
      {/* Main image grid - Google Photos style */}
      <div className="relative">
        {previewImages.length === 1 && (
          <div className="aspect-[4/3] overflow-hidden">
            {renderThumbnail(
              previewImages[0], 
              0, 
              isHighlighted && highlightedImageIndexes.includes(0) ? 'brightness-110' : ''
            )}
            {isHighlighted && highlightedImageIndexes.includes(0) && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        )}
        
        {previewImages.length === 2 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            {previewImages.map((item, index) => (
              <div key={index} className="overflow-hidden relative">
                {renderThumbnail(
                  item, 
                  index, 
                  isHighlighted && highlightedImageIndexes.includes(index) ? 'brightness-110' : ''
                )}
                {isHighlighted && highlightedImageIndexes.includes(index) && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md z-10">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {previewImages.length === 3 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            <div className="row-span-2 overflow-hidden relative">
              {renderThumbnail(
                previewImages[0], 
                0, 
                isHighlighted && highlightedImageIndexes.includes(0) ? 'brightness-110' : ''
              )}
              {isHighlighted && highlightedImageIndexes.includes(0) && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {previewImages.slice(1).map((item, i) => {
              const index = i + 1; // Adjust index to account for the slice
              return (
                <div key={index} className="overflow-hidden relative">
                  {renderThumbnail(
                    item, 
                    index, 
                    isHighlighted && highlightedImageIndexes.includes(index) ? 'brightness-110' : ''
                  )}
                  {isHighlighted && highlightedImageIndexes.includes(index) && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        
        {previewImages.length >= 4 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            {previewImages.map((item, index) => (
              <div key={index} className="overflow-hidden relative">
                {renderThumbnail(
                  item, 
                  index, 
                  isHighlighted && highlightedImageIndexes.includes(index) ? 'brightness-110' : ''
                )}
                {isHighlighted && highlightedImageIndexes.includes(index) && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Badge to indicate this cluster has highlighted images */}
        {isHighlighted && (
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold shadow-lg z-10">
            {highlightedImageIndexes.length} match{highlightedImageIndexes.length !== 1 ? 'es' : ''}
          </div>
        )}
      </div>
      
      {/* Title area */}
      <div className="p-3">
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{images.length} items</p>
      </div>
    </div>
  );
}

export default PhotoCluster; 