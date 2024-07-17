import { useEffect, useState } from 'react';
import { EnumPages } from '../types/enums';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Logs from './logs';
import About from './about';
import Settings from './settings';
import { Avatar } from '../types/piccapTypes';
import getContributors from '../util/contributorsRequests';

function App() {
  const [view, setView] = useState(EnumPages.SETTINGS);
  const [hyperionContributors, setHyperionContributors] = useState<Avatar[]>([]);
  const [piccapContributors, setPiccapContributors] = useState<Avatar[]>([]);

  useEffect(() => {
    if (hyperionContributors.length === 0) {
      getContributors('webosbrew', 'hyperion-webos', setHyperionContributors);
    }
    if (piccapContributors.length === 0) {
      getContributors('tbsniller', 'piccap', setPiccapContributors);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navigation viewHandle={setView} />
      <div className="h-full container mb-auto mx-auto py-2">
        {view === EnumPages.SETTINGS && <Settings />}
        {view === EnumPages.LOGS && <Logs />}
        {view === EnumPages.ABOUT && (
          <About 
            hyperionCont={hyperionContributors}
            piccapCont={piccapContributors}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
