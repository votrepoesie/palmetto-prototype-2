function PhotoCluster({ cluster, onClick }) {
  const { title, images } = cluster;
  
  // Show at most 4 images in the cluster preview (Google Photos style)
  const previewImages = images.slice(0, 4);
  
  return (
    <div 
      onClick={onClick}
      className="cluster-card bg-white hover:bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all"
    >
      {/* Main image grid - Google Photos style */}
      <div className="relative">
        {previewImages.length === 1 && (
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={previewImages[0]} 
              alt={`${title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {previewImages.length === 2 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            {previewImages.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img 
                  src={img} 
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
        
        {previewImages.length === 3 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            <div className="row-span-2 overflow-hidden">
              <img 
                src={previewImages[0]} 
                alt={`${title} main image`}
                className="w-full h-full object-cover"
              />
            </div>
            {previewImages.slice(1).map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img 
                  src={img} 
                  alt={`${title} image ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
        
        {previewImages.length >= 4 && (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3]">
            {previewImages.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img 
                  src={img} 
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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