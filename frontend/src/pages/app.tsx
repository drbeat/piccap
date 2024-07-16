import { useState } from 'react';
import { EnumPages } from '../types/enums';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Logs from './logs';
import About from './about';
import Settings from './settings';

function App() {
  const [view, setView] = useState(EnumPages.SETTINGS);

  return (
    <div className="flex flex-col h-screen">
      <Navigation viewHandle={setView} />
      <div className="h-full container mb-auto mx-auto">
        {view === EnumPages.SETTINGS && <Settings />}
        {view === EnumPages.LOGS && <Logs />}
        {view === EnumPages.ABOUT && <About />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
