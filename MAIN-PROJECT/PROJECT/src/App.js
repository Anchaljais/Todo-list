import React, { useContext } from 'react'; // Import useContext
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { DarkModeContext } from './components/Darkmode'; // Import DarkModeContext
import './App.css';

function App() {
  const { isDarkMode } = useContext(DarkModeContext); // Consume the context

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}> {/* Apply .dark-mode class dynamically */}
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="main-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Content />
      </div>
    </div>
  );
}

export default App;