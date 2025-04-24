function PhotoCluster({ cluster, onClick }) {
  const { title, images } = cluster;
  
  // Show at most 3 images in the cluster preview
  const previewImages = images.slice(0, 3);
  
  return (
    <div 
      onClick={onClick}
      className="cluster-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="p-3 pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{images.length} photos</p>
      </div>
      
      <div className="relative">
        {/* Main image display */}
        {previewImages.length > 0 && (
          <div className="w-full aspect-square overflow-hidden">
            <img 
              src={previewImages[0]} 
              alt={`${title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Additional image thumbnails (if more than 1 image) */}
        {previewImages.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            {previewImages.slice(1).map((img, index) => (
              <div 
                key={index} 
                className="w-12 h-12 rounded-md overflow-hidden border-2 border-white shadow"
              >
                <img 
                  src={img} 
                  alt={`${title} thumbnail ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoCluster; 