import { useState } from 'react';
import PhotoAlbum from './components/PhotoAlbum'
import QAChecklist from './components/QAChecklist'
import checklistImageMapping from './data/checklistImageMapping'

function App() {
  const [selectedChecklistItem, setSelectedChecklistItem] = useState(null);
  const [checklistMapping, setChecklistMapping] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleChecklistItemClick = (itemId, mapping) => {
    setSelectedChecklistItem(itemId);
    setChecklistMapping(mapping);
  };

  const handleSidebarToggle = (isCollapsed) => {
    setSidebarCollapsed(isCollapsed);
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
        <QAChecklist 
          onChecklistItemClick={handleChecklistItemClick} 
          onToggleCollapse={handleSidebarToggle}
        />
        
        {/* Main Content */}
        <main className={`flex-1 px-6 py-6 transition-all duration-300 ${sidebarCollapsed ? 'ml-0' : ''}`}>
          <PhotoAlbum 
            selectedChecklistItem={selectedChecklistItem} 
            checklistMapping={checklistMapping} 
          />
        </main>
      </div>
    </div>
  )
}

export default App
