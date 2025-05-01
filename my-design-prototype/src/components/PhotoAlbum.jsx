import { useState, useEffect } from 'react';
import PhotoCluster from './PhotoCluster';
import ImageModal from './ImageModal';
// Electrical images
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
// Documents
import sampleContractPdf from '../assets/sample-contract.pdf';
import planSetPdf from '../assets/plan-set.pdf';
import productionReportPdf from '../assets/production-report.pdf';
// Roof images
import arrayCompletionImage1 from '../assets/array-completion-1.png';
import arrayCompletionImage2 from '../assets/array-completion-2.png';
import modelLabelImage from '../assets/model-label.png';
import modelSerialImage from '../assets/model-serial-number.png';
import mountingImage1 from '../assets/mounting-1.png';
import mountingImage2 from '../assets/mounting-2.png';
import mountingWireImage1 from '../assets/mounting-wire-1.png';
import mountingWireImage2 from '../assets/mounting-wire-2.png';
import sealingImage from '../assets/sealing.png';
import underArrayImage from '../assets/under-array.png';

// ------------------------------------------------------------------------------------------------
// PhotoAlbum Component
// ------------------------------------------------------------------------------------------------
function PhotoAlbum({ selectedChecklistItem, checklistMapping, onChecklistItemClick }) {
  const [activeCluster, setActiveCluster] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pinnedDocument, setPinnedDocument] = useState(null);
  const [highlightedImages, setHighlightedImages] = useState([]);
  
  // Sample data for photo clusters
  const clusters = [
    {
      id: 1,
      title: 'Enter from Contract',
      images: [
        {
          type: 'pdf',
          url: sampleContractPdf,
          title: 'Sample Solar Contract'
        },
      ]
    },
    // {
    //   id: 2,
    //   title: 'Permit',
    //   images: [
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //   ]
    // },
    // {
    //   id: 3,
    //   title: 'Production Model',
    //   images: [
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //   ]
    // },
    // {
    //   id: 4,
    //   title: 'Design Package Docs',
    //   images: [
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //   ]
    // },
    // {
    //   id: 5,
    //   title: 'Project Site',
    //   images: [
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //   ]
    // },
    {
      id: 6,
      title: 'Roof',
      images: [
        arrayCompletionImage1,
        arrayCompletionImage2,
        modelLabelImage,
        modelSerialImage,
        mountingImage1,
        mountingImage2,
        mountingWireImage1,
        mountingWireImage2,
        sealingImage,
        underArrayImage,
      ]
    },
    {
      id: 7,
      title: 'Electrical',
      images: [
        inverterImage1,
        inverterImage2,
        inverterImage3,
        // inverterImage4,
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
    // {
    //   id: 8,
    //   title: 'Storage',
    //   images: [
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //     'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%23E5E7EB"/%3E%3C/svg%3E',
    //   ]
    // }
  ];

  // Documents for quick actions
  const quickActionDocuments = [
    {
      title: 'Plan Set',
      type: 'pdf',
      url: planSetPdf,
      description: 'View the complete plan set'
    },
    {
      title: 'Production Report',
      type: 'pdf',
      url: productionReportPdf,
      description: 'View the production report'
    },
    {
      title: 'Contract',
      type: 'pdf',
      url: sampleContractPdf,
      description: 'View the solar contract'
    }
  ];

  // Process the selected checklist item and update highlighted images
  useEffect(() => {
    if (selectedChecklistItem && checklistMapping) {
      // Extract cluster and image indexes from the mapping
      const newHighlightedImages = [];
      
      checklistMapping.imageIds.forEach(mapping => {
        // Auto-open the relevant cluster if not already open
        if (mapping.clusterId && mapping.imageIndexes.length > 0) {
          setActiveCluster(mapping.clusterId);
          
          // Store highlighted images for this cluster
          mapping.imageIndexes.forEach(imageIndex => {
            newHighlightedImages.push({
              clusterId: mapping.clusterId,
              imageIndex
            });
          });
        }
      });
      
      setHighlightedImages(newHighlightedImages);
    } else {
      // Clear highlights when no item is selected
      setHighlightedImages([]);
    }
  }, [selectedChecklistItem, checklistMapping]);

  const handleClusterClick = (clusterId) => {
    if (activeCluster === clusterId) {
      setActiveCluster(null); // Close if already open
    } else {
      setActiveCluster(clusterId); // Open the clicked cluster
    }
  };

  const handleItemClick = (item, clusterTitle, index) => {
    if (typeof item === 'object' && item.type === 'pdf') {
      setSelectedPdf({
        url: item.url,
        title: item.title || `${clusterTitle} - Document ${index + 1}`
      });
      setSelectedImage(null);
    } else {
      setSelectedImage({
        url: item,
        title: `${clusterTitle} - Image ${index + 1}`
      });
      setSelectedPdf(null);
    }
  };

  const handleQuickActionClick = (document) => {
    // Instead of opening a modal, pin the document to half the screen
    setPinnedDocument({
      url: document.url,
      title: document.title
    });
    // Close any open modals
    setSelectedPdf(null);
    setSelectedImage(null);
  };

  const unpinDocument = () => {
    setPinnedDocument(null);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedPdf(null);
  };

  // Find active cluster object
  const activeClusterObj = clusters.find(c => c.id === activeCluster);

  // Check if an image is highlighted
  const isImageHighlighted = (clusterId, imageIndex) => {
    return highlightedImages.some(
      highlight => highlight.clusterId === clusterId && highlight.imageIndex === imageIndex
    );
  };

  // Helper to get thumbnail for an item
  const getThumbnail = (item) => {
    if (typeof item === 'object' && item.type === 'pdf') {
      return (
        <div className="flex items-center justify-center bg-red-50 w-full h-full">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <span className="mt-2 text-xs text-red-700 font-semibold">{item.title}</span>
          </div>
        </div>
      );
    }
    return (
      <img 
        src={item} 
        alt="Thumbnail"
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <div className="w-full">
      {/* Split view layout with pinned document and main content */}
      <div className={`flex ${pinnedDocument ? 'space-x-4' : ''}`}>
        {/* Pinned document section */}
        {pinnedDocument && (
          <div className="w-1/2 flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
            <div className="p-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="font-medium text-gray-800">{pinnedDocument.title}</h3>
              <button 
                onClick={unpinDocument}
                className="text-gray-500 hover:text-gray-700 p-1 rounded"
                aria-label="Unpin document"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src={`${pinnedDocument.url}#view=FitH`}
                title={pinnedDocument.title}
                className="w-full h-full border-0"
                style={{ height: 'calc(100vh - 150px)' }}
              />
            </div>
          </div>
        )}

        {/* Main content - adjust width based on whether a document is pinned */}
        <div className={`flex flex-col ${pinnedDocument ? 'w-1/2' : 'w-full'}`}>
          {/* Quick Actions Section - Moved above the Documents & Images header */}
          <div className="mb-4 p-5 border border-gray-200 rounded-lg bg-white">
            <h3 className="font-medium text-gray-700 mb-4">Quick Actions</h3>
            <div className="flex gap-3">
              {quickActionDocuments.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickActionClick(doc)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors duration-200"
                >
                  {doc.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4 sticky top-0 z-10 py-2 h-[40px]">
            <h2 className="text-xl font-semibold text-gray-800">Documents & Images</h2>
            {activeCluster && (
              <button 
                onClick={() => setActiveCluster(null)}
                className="bg-transparent hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center text-sm"
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </button>
            )}
            
            {/* Show info about selected checklist item if any - now as a filter chip */}
            {selectedChecklistItem && (
              <div className="ml-4 flex-1">
                <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  <span className="font-medium mr-1">Showing:</span>
                  <span className="mr-2">{checklistMapping?.name || selectedChecklistItem}</span>
                  <button 
                    onClick={() => onChecklistItemClick(null, null)} 
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    title="Clear filter"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {activeCluster ? (
            // Expanded view for active cluster - Google Photos style
            <div className="transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800">{activeClusterObj.title}</h3>
                <p className="text-sm text-gray-500">{activeClusterObj.images.length} items</p>
              </div>
              
              {/* Make thumbnails larger when a document is pinned */}
              <div className={`grid ${pinnedDocument ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-2`}>
                {activeClusterObj.images.map((item, index) => {
                  const isHighlighted = isImageHighlighted(activeCluster, index);
                  
                  return (
                    <div 
                      key={index} 
                      className={`overflow-hidden cursor-pointer group relative transition-all duration-200 ${
                        isHighlighted ? 'ring-4 ring-blue-500 ring-offset-2 z-10 scale-105' : ''
                      }`}
                      onClick={() => handleItemClick(item, activeClusterObj.title, index)}
                    >
                      <div className="aspect-square w-full">
                        {getThumbnail(item)}
                      </div>
                      
                      {/* Show indicator for highlighted images */}
                      {isHighlighted && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Grid view of all clusters - Google Photos style
            <div className={`grid grid-cols-1 ${pinnedDocument ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
              {clusters.map(cluster => {
                // Determine if this cluster has highlighted images
                const hasHighlightedImages = highlightedImages.some(
                  highlight => highlight.clusterId === cluster.id
                );
                
                return (
                  <PhotoCluster 
                    key={cluster.id}
                    cluster={cluster}
                    onClick={() => handleClusterClick(cluster.id)}
                    isHighlighted={hasHighlightedImages}
                    highlightedImageIndexes={
                      hasHighlightedImages 
                        ? highlightedImages
                            .filter(h => h.clusterId === cluster.id)
                            .map(h => h.imageIndex)
                        : []
                    }
                    selectedChecklistItem={selectedChecklistItem}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Image modal for zoomed view */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage.url}
          title={selectedImage.title}
          onClose={closeModal}
        />
      )}

      {/* PDF viewer modal - only shown when not using the pinned view */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium">{selectedPdf.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-0">
              <iframe
                src={`${selectedPdf.url}#view=FitH`}
                title={selectedPdf.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoAlbum; 