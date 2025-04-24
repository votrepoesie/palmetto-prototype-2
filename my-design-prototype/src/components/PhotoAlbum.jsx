import { useState } from 'react';
import PhotoCluster from './PhotoCluster';
import ImageModal from './ImageModal';
import inverterImage1 from '../assets/inverter-type-1.png';
import inverterImage2 from '../assets/inverter-type-2.png';
import inverterImage3 from '../assets/inverter-type-3.png';
import inverterImage4 from '../assets/inverter-type-4.png';
import inverterImage5 from '../assets/inverter-type-5.png';
import inverterImage6 from '../assets/inverter-type-6.png';
import interconnectionImage1 from '../assets/interconnection-1.png';
import interconnectionImage2 from '../assets/interconnection-2.png';
import inverterLabelImage from '../assets/inverter-label-1.png';
import meterImage from '../assets/meter.png';
import pullbackImage1 from '../assets/pullback-1.png';
import pullbackImage2 from '../assets/pullback-2.png';
import pullbackImage3 from '../assets/pullback-3.png';
import wiringImage1 from '../assets/wiring-1.png';
import wiringImage2 from '../assets/wiring-2.png';

function PhotoAlbum() {
  const [activeCluster, setActiveCluster] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample data for 5 photo clusters
  const clusters = [
    {
      id: 1,
      title: 'Enter from Contract',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 2,
      title: 'Permit',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 3,
      title: 'Production Model',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 4,
      title: 'Design Package Docs',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 5,
      title: 'Project Site',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 6,
      title: 'Roof',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    },
    {
      id: 7,
      title: 'Electrical',
      images: [
        inverterImage1,
        inverterImage2,
        inverterImage3,
        inverterImage4,
        inverterImage5,
        inverterImage6,
        inverterLabelImage,
        meterImage,
        wiringImage1,
        wiringImage2,
        interconnectionImage1,
        interconnectionImage2,
        pullbackImage1,
        pullbackImage2,
        pullbackImage3,
      ]
    },
    {
      id: 8,
      title: 'Storage',
      images: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
      ]
    }
  ];

  const handleClusterClick = (clusterId) => {
    if (activeCluster === clusterId) {
      setActiveCluster(null); // Close if already open
    } else {
      setActiveCluster(clusterId); // Open the clicked cluster
    }
  };

  const handleImageClick = (image, clusterTitle) => {
    setSelectedImage({
      url: image,
      title: clusterTitle
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Find active cluster object
  const activeClusterObj = clusters.find(c => c.id === activeCluster);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 sticky top-0 z-10 py-2 h-[40px]">
        <h2 className="text-xl font-medium text-gray-800">M1 Checklist Items</h2>
        {activeCluster && (
          <button 
            onClick={() => setActiveCluster(null)}
            className="bg-transparent hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full flex items-center text-sm"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        )}
      </div>
      
      {activeCluster ? (
        // Expanded view for active cluster - Google Photos style
        <div className="transition-all duration-300">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">{activeClusterObj.title}</h3>
            <p className="text-sm text-gray-500">{activeClusterObj.images.length} items</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {activeClusterObj.images.map((img, index) => (
              <div 
                key={index} 
                className="overflow-hidden cursor-pointer group relative"
                onClick={() => handleImageClick(img, `${activeClusterObj.title} - Image ${index + 1}`)}
              >
                <div className="aspect-square w-full">
                  <img 
                    src={img} 
                    alt={`${activeClusterObj.title} ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:brightness-95 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Grid view of all clusters - Google Photos style
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clusters.map(cluster => (
            <PhotoCluster 
              key={cluster.id}
              cluster={cluster}
              onClick={() => handleClusterClick(cluster.id)}
            />
          ))}
        </div>
      )}
      
      {/* Image modal for zoomed view */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage.url}
          title={selectedImage.title}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default PhotoAlbum; 