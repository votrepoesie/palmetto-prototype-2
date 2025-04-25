import { useState, useEffect } from 'react';
import checklistImageMapping from '../data/checklistImageMapping';

function QAChecklist({ onChecklistItemClick, onToggleCollapse }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Notify parent component when collapse state changes
  useEffect(() => {
    if (onToggleCollapse) {
      onToggleCollapse(isCollapsed);
    }
  }, [isCollapsed, onToggleCollapse]);

  // Checklist data structure
  const checklistData = [
    {
      id: 'contract',
      name: 'Contract',
      items: [
        { id: 'customer-name', name: 'Customer Name', status: 'found' },
        { id: 'address', name: 'Address', status: 'found' },
        { id: 'system-size', name: 'System Size (kW)', status: 'found' },
        { id: 'annual-production', name: 'Estimated Annual Production (kWh)', status: 'found' },
        { id: 'contract-type', name: 'Contract Type', status: 'found' },
        { id: 'utility-bill-matches', name: 'Utility Bill Matches Contract', status: 'found' },
        { id: 'battery-status', name: 'Battery Inclusion and Installation Status', status: 'found' },
        { id: 'pv-system-adders', name: 'PV System & Adders Match', status: 'found' },
        { id: 'second-system-status', name: 'Existing or Second System Status', status: 'found' },
      ]
    },
    {
      id: 'permit',
      name: 'Permit',
      items: [
        { id: 'permit-validity', name: 'Permit Validity', status: 'found' },
      ]
    },
    {
      id: 'production-model',
      name: 'Production Model',
      items: [
        { id: 'shade-report', name: 'Shade Report Pitches', status: 'found' },
        { id: 'design-software', name: 'Design Software Platform', status: 'found' },
        { id: 'shading-analysis', name: 'Shading Analysis Engine', status: 'found' },
        { id: 'horizon-shading', name: 'Horizon Shading Method', status: 'found' },
        { id: 'lidar-shading', name: 'LIDAR Shading Status', status: 'found' },
        { id: 'weather-dataset', name: 'Weather Dataset Source', status: 'found' },
        { id: 'inverter-efficiency', name: 'Inverter Efficiency Percentage', status: 'found' },
        { id: 'dc-ac-ratio', name: 'Inverter DC-to-AC Ratio', status: 'found' },
        { id: 'system-loss', name: 'Total System Loss Percentage', status: 'found' },
        { id: 'snow-load', name: 'Snow Load Value', status: 'found' },
      ]
    },
    {
      id: 'design-package-documents',
      name: 'Design Package Documents',
      items: [
        { id: 'planset-production-match', name: 'Planset and Production Model Layout Match', status: 'found' },
        { id: 'installed-production-match', name: 'Installed and Production Model Layout Match', status: 'found' },
        { id: 'planset-installation-match', name: 'Planset and Installation Layout Match', status: 'found' },
        { id: 'on-array-pitch', name: 'On-Array Pitch Measurement', status: 'found' },
        { id: 'installed-array-pitches', name: 'Installed Array Pitches', status: 'found' },
      ]
    },
    {
      id: 'project-site',
      name: 'Project Site',
      items: [
        { id: 'trenching', name: 'Trenching', status: 'found' },
      ]
    },
    {
      id: 'roof',
      name: 'Roof',
      items: [
        { id: 'mounting-type', name: 'Mounting Type', status: 'found' },
        { id: 'racking-avl', name: 'Racking AVL Compliance', status: 'found' },
        { id: 'attachment', name: 'Attachment Sealing and Installation', status: 'found' },
        { id: 'opto-micro', name: 'Optimizer/Microinverter Mounting and Wire Management', status: 'found' },
        { id: 'egc-path', name: 'Equipment Grounding Conductor Path (Roof Only)', status: 'found' },
        { id: 'array-completion', name: 'Array Completion & Rail Trimming', status: 'found' },
        { id: 'under-array', name: 'Under-Array Wire Management', status: 'found' },
        { id: 'junction-box', name: 'Junction Box Grounding and Bonding', status: 'missing' },
        { id: 'tesla-map', name: 'Tesla MCI/RSD Map Accuracy', status: 'missing' },
        { id: 'module-label', name: 'Module Label and Model Type Verification', status: 'found' },
        { id: 'module-serial', name: 'Module Serial Numbers', status: 'found' },
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical',
      items: [
        { id: 'inverter-type', name: 'Inverter Model Type', status: 'found' },
        { id: 'inverter-labels', name: 'Inverter and Microinverter Labels', status: 'found' },
        { id: 'production-meter', name: 'Production Meter Presence', status: 'found' },
        { id: 'iq-combiner', name: 'IQ Combiner Box Installation', status: 'missing' },
        { id: 'ac-disconnect', name: 'AC Disconnect Wiring Verification', status: 'found' },
        { id: 'combiner-panel', name: 'Combiner Panel (for Multi-Inverter Systems)', status: 'missing' },
        { id: 'main-service', name: 'Main Service Panel Rating Verification', status: 'missing' },
        { id: 'interconnection', name: 'Interconnection and Wiring Photos', status: 'found' },
        { id: 'equipment-pullback', name: 'Electrical Equipment Pullback View', status: 'found' },
        { id: 'consumption-cts', name: 'Consumption CT Installation Accuracy', status: 'found' },
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? 'all' : categoryId);
  };

  const handleItemClick = (itemId) => {
    // Toggle selection if clicking the same item
    const newSelectedItem = selectedItem === itemId ? null : itemId;
    setSelectedItem(newSelectedItem);
    
    // Pass selection to parent with mapping data
    if (newSelectedItem) {
      const mappingData = checklistImageMapping[newSelectedItem];
      onChecklistItemClick(newSelectedItem, mappingData);
    } else {
      onChecklistItemClick(null, null);
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Calculate summary stats
  const totalItems = checklistData.reduce((sum, category) => sum + category.items.length, 0);
  const foundItems = checklistData.reduce((sum, category) => 
    sum + category.items.filter(item => item.status === 'found').length, 0);
  const missingItems = totalItems - foundItems;
  
  const foundPercentage = Math.round((foundItems / totalItems) * 100);
  const missingPercentage = 100 - foundPercentage;

  return (
    <aside className={`transition-all duration-300 ease-in-out border-r border-gray-200 bg-white h-[calc(100vh-64px)] sticky top-16 ${isCollapsed ? 'w-14' : 'w-80'} overflow-y-auto`}>
      <div className={`relative p-4 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        {/* Collapse/Expand button */}
        <button
          onClick={toggleCollapse}
          className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {!isCollapsed && (
          <>
            <h2 className="text-lg font-semibold mb-4">QA Checklist</h2>
            
            {/* All filter option */}
            <button 
              onClick={() => {
                setActiveCategory('all');
                setSelectedItem(null);
                onChecklistItemClick(null, null);
              }}
              className={`flex items-center w-full px-3 py-2 rounded-md text-left mb-2 ${
                activeCategory === 'all' 
                ? 'bg-blue-50 text-blue-700 font-medium' 
                : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">📋</span> All Requirements
            </button>
            
            <div className="space-y-4">
              {checklistData.map(category => (
                <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Category Header - clickable to expand/collapse */}
                  <button 
                    className={`w-full px-4 py-3 flex justify-between items-center font-medium text-left ${
                      activeCategory === category.id ? 'bg-blue-50 text-blue-700' : 'bg-gray-50'
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span>{category.name}</span>
                    <span>
                      <svg 
                        className={`w-5 h-5 transition-transform ${activeCategory === category.id ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Category Items */}
                  <div className={`transition-all duration-200 ${activeCategory === category.id || activeCategory === 'all' ? 'max-h-96 overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
                    <ul className="px-2 py-1">
                      {category.items.map(item => {
                        const hasImages = checklistImageMapping[item.id]?.imageIds.length > 0;
                        const isSelected = selectedItem === item.id;
                        
                        return (
                          <li 
                            key={item.id} 
                            className={`py-1.5 px-3 rounded-md my-1 transition-colors cursor-pointer ${
                              isSelected 
                                ? 'bg-blue-50 hover:bg-blue-100' 
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() => handleItemClick(item.id)}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <span className="text-sm">{item.name}</span>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                item.status === 'found' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {item.status === 'found' ? 'Found' : 'Missing'}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Status Summary */}
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Status Summary</h3>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">Found</span>
                <span className="text-xs font-medium">{foundItems}/{totalItems}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${foundPercentage}%` }}></div>
              </div>
              <div className="flex items-center justify-between mt-3 mb-1">
                <span className="text-xs text-gray-500">Missing</span>
                <span className="text-xs font-medium">{missingItems}/{totalItems}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: `${missingPercentage}%` }}></div>
              </div>
            </div>
          </>
        )}

        {isCollapsed && (
          <div className="mt-8 flex flex-col items-center space-y-10">
            <button 
              className="p-2 rounded-full bg-blue-50 text-blue-700"
              title="QA Checklist"
              onClick={toggleCollapse}
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="rotate-90 text-xs font-medium text-gray-500 tracking-wider">CHECKLIST</div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default QAChecklist; 