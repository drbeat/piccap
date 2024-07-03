function Logs() {
  return (
    <div id="logs" className="logs">
      <div className="upperTab">
        <p>
          Some very simple experimental feature to collect logs. Setup logging is needed after a reboot.
          <br />
          Will be reworked in newer versions. Press the load button to get last 200 log entries.
        </p>
        <div className="logsBtns btns" id="logsBtns">
          <button
            type="button"
            id="btnLogSwitchPicCap"
            onClick="switchLog('piccap')"
          >
            PicCap
          </button>
          <button
            type="button"
            id="btnLogSwitchHyperion"
            onClick="switchLog('hyperion')"
          >
            Hyperion-WebOS
          </button>
          <button
            type="button"
            id="btnLogStartStop"
            onClick="startStopLogging()"
          >
            Setup logging
          </button>
          <button
            type="button"
            id="btnLogReload"
            onClick="reloadHyperionLog()"
          >
            Load last 200
          </button>
          <button
            type="button"
            id="btnKillHyperion"
            onClick="restartHyperion()"
          >
            Full service restart
          </button>
        </div>
      </div>
      <div className="consoleLog logBox" id="consoleLog">
        <textarea id="textareaConsoleLog">
          Logs from PicCap
        </textarea>
      </div>
      <div className="hyperionLog logBox" id="hyperionLog">
        <textarea id="textareaHyperionLog">
          Logs from hyperion-webos - Log gathering must be started and reloaded manually.
        </textarea>
      </div>
    </div>
  );
}

export default Logs;
