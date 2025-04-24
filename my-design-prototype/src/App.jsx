import { useState } from 'react';
import PhotoAlbum from './components/PhotoAlbum'

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Checklist data structure
  const checklistData = [
    {
      id: 'roof',
      name: 'Roof',
      items: [
        { id: 'mounting-type', name: 'Mounting Type', status: 'found' },
        { id: 'racking-avl', name: 'Racking on AVL', status: 'found' },
        { id: 'attachment', name: 'Closeup of attachment, sealed+installed', status: 'found' },
        { id: 'opto-micro', name: 'Opto/Micro Mounted + Wire Management', status: 'found' },
        { id: 'egc-path', name: 'EGC Path (roof only)', status: 'found' },
        { id: 'complete-arrays', name: 'Complete Arrays: all mods + rail trimmed', status: 'found' },
        { id: 'under-array', name: 'Under Array Wire Management', status: 'found' },
        { id: 'j-box', name: 'J-Box - grounding/terminations/bonding (each array)', status: 'missing' },
        { id: 'mci-rsd', name: 'MCI/RSD Map (TESLA ONLY) Correct?', status: 'missing' },
        { id: 'module-label', name: 'Module Label, Model Type', status: 'found' },
        { id: 'module-serial', name: 'Module Serial #', status: 'found' },
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical',
      items: [
        { id: 'inverter-type', name: 'Inverter Type', status: 'found' },
        { id: 'inverter-labels', name: 'Inverter/MicroInverter Labels', status: 'found' },
        { id: 'rgm-meter', name: 'RGM Production Meter present?', status: 'found' },
        { id: 'iq-combiner', name: 'IQ Combiner Box', status: 'missing' },
        { id: 'ac-disconnect', name: 'AC Disconnect Wiring - Fusible Only', status: 'found' },
        { id: 'combiner-panel', name: 'Combiner Panel for Multiple Inverters', status: 'missing' },
        { id: 'main-service', name: 'Main Service Panel: MB/Busbar ratings', status: 'missing' },
        { id: 'interconnection', name: 'Interconnection/Wiring Photos', status: 'found' },
        { id: 'equipment-pullback', name: 'Electrical Equipment Pullback', status: 'found' },
        { id: 'consumption-cts', name: 'Consumption CTs Installed Correctly?', status: 'found' },
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? 'all' : categoryId);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center gap-2">
            {/* Sun Logo */}
            <svg className="w-8 h-8 text-amber-500 sun-rotate" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <h1 className="text-xl font-bold portal-heading">QA ASSISTANT</h1>
          </div>
          <div className="ml-auto flex-1 max-w-xl mx-4">
            <input 
              type="text" 
              placeholder="Search your photos" 
              className="w-full bg-gray-100 rounded-full py-2 px-6 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
          </div>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-80 border-r border-gray-200 bg-white h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">QA Checklist</h2>
            
            {/* All filter option */}
            <button 
              onClick={() => setActiveCategory('all')}
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
                      {category.items.map(item => (
                        <li key={item.id} className="py-1.5 px-3 hover:bg-gray-50 rounded-md my-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">{item.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.status === 'found' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {item.status === 'found' ? 'Found' : 'Missing'}
                            </span>
                          </div>
                        </li>
                      ))}
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
                <span className="text-xs font-medium">16/21</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-3 mb-1">
                <span className="text-xs text-gray-500">Missing</span>
                <span className="text-xs font-medium">5/21</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 px-6 py-6">
          <PhotoAlbum />
        </main>
      </div>
    </div>
  )
}

export default App
