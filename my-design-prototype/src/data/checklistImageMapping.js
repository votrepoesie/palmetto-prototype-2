// This file maps checklist items to the images that satisfy them
// Each checklist item can map to multiple images (array of image IDs)
// Image IDs correspond to the index within the photo cluster

const checklistImageMapping = {
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