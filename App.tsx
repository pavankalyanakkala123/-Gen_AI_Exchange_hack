import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/landing/HeroSection';
import { FeaturesSection } from './components/landing/FeaturesSection';
import { ProfileIntakeForm } from './components/profile/ProfileIntakeForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { sampleProfile } from './data/sampleData';

type AppView = 'landing' | 'profile' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        {currentView === 'landing' && (
          <>
            <HeroSection onGetStarted={() => setCurrentView('profile')} />
            <FeaturesSection />
          </>
        )}
        
        {currentView === 'profile' && (
          <ProfileIntakeForm onComplete={() => setCurrentView('dashboard')} />
        )}
        
        {currentView === 'dashboard' && <Dashboard />}
        
        {/* Demo button for testing */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            Demo Dashboard
          </button>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
