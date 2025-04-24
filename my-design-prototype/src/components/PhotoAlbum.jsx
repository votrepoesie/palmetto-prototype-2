import { useState } from 'react';
import PhotoCluster from './PhotoCluster';
import ImageModal from './ImageModal';

function PhotoAlbum() {
  const [activeCluster, setActiveCluster] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample data for 5 photo clusters
  const clusters = [
    {
      id: 1,
      title: 'Enter from Contract',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80',
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80',
      ]
    },
    {
      id: 2,
      title: 'Permit',
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&q=80',
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80',
      ]
    },
    {
      id: 3,
      title: 'Production Model',
      images: [
        'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&q=80',
        'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&q=80',
      ]
    },
    {
      id: 4,
      title: 'Design Package Docs',
      images: [
        'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=500&q=80',
        'https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=500&q=80',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&q=80',
      ]
    },
    {
      id: 5,
      title: 'Project Site',
      images: [
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80',
        'https://images.unsplash.com/photo-1507908708918-778587c9e563?w=500&q=80',
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500&q=80',
      ]
    },
    {
      id: 6,
      title: 'Roof',
      images: [
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80',
        'https://images.unsplash.com/photo-1507908708918-778587c9e563?w=500&q=80',
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500&q=80',
      ]
    },
    {
      id: 7,
      title: 'Electrical',
      images: [
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80',
        'https://images.unsplash.com/photo-1507908708918-778587c9e563?w=500&q=80',
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500&q=80',
      ]
    },
    {
      id: 8,
      title: 'Storage',
      images: [
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80',
        'https://images.unsplash.com/photo-1507908708918-778587c9e563?w=500&q=80',
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500&q=80',
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
      <div className="flex items-center justify-between mb-4 sticky top-0 bg-white z-10 py-2">
        <h2 className="text-xl font-medium text-gray-800">Photos</h2>
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