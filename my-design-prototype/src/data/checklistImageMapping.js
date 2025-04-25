// This file maps checklist items to the images that satisfy them
// Each checklist item can map to multiple images (array of image IDs)
// Image IDs correspond to the index within the photo cluster

const checklistImageMapping = {
  // Contract category mappings
  'customer-name': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0] }, // Enter from Contract cluster, first image
    ]
  },
  'address': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0, 1] }
    ]
  },
  'system-size': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0, 2] }
    ]
  },
  'annual-production': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0, 2] }
    ]
  },
  'contract-type': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0] }
    ]
  },
  'utility-bill-matches': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [1] }
    ]
  },
  'battery-status': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0] },
      { clusterId: 8, imageIndexes: [0, 1, 2] } // Storage cluster images
    ]
  },
  'pv-system-adders': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0, 2] }
    ]
  },
  'second-system-status': {
    categoryId: 'contract',
    imageIds: [
      { clusterId: 1, imageIndexes: [0] }
    ]
  },

  // Permit category mappings
  'permit-validity': {
    categoryId: 'permit',
    imageIds: [
      { clusterId: 2, imageIndexes: [0] }
    ]
  },

  // Production Model category mappings
  'shade-report': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0] }
    ]
  },
  'design-software': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 1] }
    ]
  },
  'shading-analysis': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 1] }
    ]
  },
  'horizon-shading': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 1] }
    ]
  },
  'lidar-shading': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 1] }
    ]
  },
  'weather-dataset': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 2] }
    ]
  },
  'inverter-efficiency': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 2] },
      { clusterId: 7, imageIndexes: [0, 1, 2] } // Also link to electrical inverter images
    ]
  },
  'dc-ac-ratio': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 2] },
      { clusterId: 7, imageIndexes: [0, 1, 2] } // Also link to electrical inverter images
    ]
  },
  'system-loss': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 2] }
    ]
  },
  'snow-load': {
    categoryId: 'production-model',
    imageIds: [
      { clusterId: 3, imageIndexes: [0, 2] }
    ]
  },

  // Design Package Documents category mappings
  'planset-production-match': {
    categoryId: 'design-package-documents',
    imageIds: [
      { clusterId: 4, imageIndexes: [0, 1] },
      { clusterId: 3, imageIndexes: [0] } // Link to Production Model
    ]
  },
  'installed-production-match': {
    categoryId: 'design-package-documents',
    imageIds: [
      { clusterId: 4, imageIndexes: [0, 1] },
      { clusterId: 3, imageIndexes: [0] }, // Link to Production Model
      { clusterId: 6, imageIndexes: [0, 1, 2] } // Link to Roof for installation photos
    ]
  },
  'planset-installation-match': {
    categoryId: 'design-package-documents',
    imageIds: [
      { clusterId: 4, imageIndexes: [0, 1] },
      { clusterId: 6, imageIndexes: [0, 1, 2] } // Link to Roof for installation photos
    ]
  },
  'on-array-pitch': {
    categoryId: 'design-package-documents',
    imageIds: [
      { clusterId: 4, imageIndexes: [0, 2] },
      { clusterId: 6, imageIndexes: [0, 1, 2] } // Link to Roof for array pitch photos
    ]
  },
  'installed-array-pitches': {
    categoryId: 'design-package-documents',
    imageIds: [
      { clusterId: 4, imageIndexes: [0, 2] },
      { clusterId: 6, imageIndexes: [0, 1, 2] } // Link to Roof for array pitch photos
    ]
  },

  // Project Site category mappings
  'trenching': {
    categoryId: 'project-site',
    imageIds: [
      { clusterId: 5, imageIndexes: [0] }
    ]
  },

  // Roof category mappings
  'mounting-type': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [0, 1] }, // Roof cluster, first two images
    ]
  },
  'racking-avl': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [2, 3] }
    ]
  },
  'attachment': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [4, 5] }
    ]
  },
  'opto-micro': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [6] }
    ]
  },
  'egc-path': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [7, 8] }
    ]
  },
  'array-completion': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [9, 10] }
    ]
  },
  'under-array': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [11] }
    ]
  },
  'junction-box': {
    categoryId: 'roof',
    imageIds: [] // No images yet (status is missing)
  },
  'tesla-map': {
    categoryId: 'roof',
    imageIds: [] // No images yet (status is missing)
  },
  'module-label': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [12] }
    ]
  },
  'module-serial': {
    categoryId: 'roof',
    imageIds: [
      { clusterId: 6, imageIndexes: [13, 14] }
    ]
  },

  // Electrical category mappings
  'inverter-type': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [0, 1, 2] } // Electrical cluster, first three images (inverter types)
    ]
  },
  'inverter-labels': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [3, 4, 6] }
    ]
  },
  'production-meter': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [7] }
    ]
  },
  'iq-combiner': {
    categoryId: 'electrical',
    imageIds: [] // No images yet (status is missing)
  },
  'ac-disconnect': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [5, 8] }
    ]
  },
  'combiner-panel': {
    categoryId: 'electrical',
    imageIds: [] // No images yet (status is missing)
  },
  'main-service': {
    categoryId: 'electrical',
    imageIds: [] // No images yet (status is missing)
  },
  'interconnection': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [10, 11] }
    ]
  },
  'equipment-pullback': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [12, 13, 14] }
    ]
  },
  'consumption-cts': {
    categoryId: 'electrical',
    imageIds: [
      { clusterId: 7, imageIndexes: [9] }
    ]
  },
};

export default checklistImageMapping; 