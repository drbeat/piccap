import { useState } from 'react';
import { EnumLogs } from '../types/enums';

function Logs() {
  const [logView, setLogView] = useState(EnumLogs.PICCAP);

  return (
    <>
      <div role="alert" className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          Some very simple experimental feature to collect logs. Setup logging is needed after a reboot.
          <br />
          Will be reworked in newer versions. Press the load button to get last 200 log entries.
        </span>
      </div>
      <div role="tablist" className="tabs tabs-boxed my-3">
        <button
          type="button"
          role="tab"
          className={`tab ${logView === EnumLogs.PICCAP ? 'tab-active' : ''}`}
          onClick={() => setLogView(EnumLogs.PICCAP)}
        >
          PicCap
        </button>
        <button
          type="button"
          role="tab"
          className={`tab ${logView === EnumLogs.HYPERION ? 'tab-active' : ''}`}
          onClick={() => setLogView(EnumLogs.HYPERION)}
        >
          Hyperion-WebOS
        </button>
      </div>
      {logView === EnumLogs.PICCAP && (
        <div>
          <textarea className="textarea textarea-primary w-full" rows={15} />
        </div>
      )}
      {logView === EnumLogs.HYPERION && (
        <div>
          <button
            type="button"
            className="btn btn-neutral"
            onClick="startStopLogging()"
          >
            Setup logging
          </button>
          <button
            type="button"
            className="btn btn-neutral"
            onClick="reloadHyperionLog()"
          >
            Load last 200
          </button>
          <button
            type="button"
            className="btn btn-neutral"
            onClick="restartHyperion()"
          >
            Full service restart
          </button>
          <textarea className="textarea textarea-primary w-full" rows={15} />
        </div>
      )}
    </>
  );
}

export default Logs;
