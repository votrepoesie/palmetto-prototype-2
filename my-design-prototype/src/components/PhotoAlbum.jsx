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
      <h2 className="text-2xl font-bold mb-6">M1 Checklist</h2>
      
      {activeCluster ? (
        // Expanded view for active cluster
        <div className="transition-all duration-300">
          <button 
            onClick={() => setActiveCluster(null)}
            className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Back
          </button>
          
          <div className="expanded-cluster">
            <h3 className="text-xl font-semibold mb-4">{activeClusterObj.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeClusterObj.images.map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleImageClick(img, `${activeClusterObj.title} - Image ${index + 1}`)}
                >
                  <img 
                    src={img} 
                    alt={`${activeClusterObj.title} ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Grid view of all clusters
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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