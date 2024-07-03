function Settings() {
  return (
    <div id="settings" className="settings">
      <div className="settingItems settingItemsNormal" id="settingItemsNormal">
        <ul>
          <li><p><b>Service settings</b></p></li>
        </ul>
        <br />
        <ul>
          <li>
            <div className="checkboxes checklabel">
              <br />
              <label htmlFor="checkSettingsLocalSocket">
                Local socket
                <input type="checkbox" id="checkSettingsLocalSocket" onChange="socketCheckChanged(this)" />
              </label>
            </div>
          </li>
          <div className="settingsocket" id="settingsocket">
            <li>
              <p>Socket</p>
              <select name="selectSettingsSocket" id="selectSettingsSocket" onChange="socketSelectChanged(this)">
                <option value="hyperhdr">/tmp/hyperhdr-domain</option>
                <option value="manual">manual</option>
              </select>
            </li>
            <div className="manualsocket" id="manualsocket">
              <li>
                <p>Socket path</p>
                <input type="text" id="txtInputSettingsSocketPath" />
              </li>
            </div>
          </div>
          <div className="settingaddressport" id="settingaddressport">
            <li>
              <p>Address</p>
              <input type="text" id="txtInputSettingsAddress" />
            </li>
            <li>
              <p>Port</p>
              <input type="text" id="txtInputSettingsPort" />
            </li>
          </div>
          <li>
            <p>Hyperion priority</p>
            <input type="text" id="txtInputSettingsPriority" />
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>Resolution</p>
            <select name="resolution" id="selectSettingsResolution" onChange="resolutionChanged(this)">
              <option value="320x180">320x180</option>
              <option value="256x144">256x144</option>
              <option value="192x108">192x108</option>
              <option value="128x78">128x78</option>
              <option value="manual">Manual</option>
            </select>
          </li>
          <div className="manualres" id="manualres">
            <li>
              <p>Width</p>
              <input type="text" id="txtInputSettingsWidth" />
            </li>
            <br />
            <li>
              <p>Height</p>
              <input type="text" id="txtInputSettingsHeight" />
            </li>
          </div>
          <li>
            <p>Maximal FPS</p>
            <input type="text" id="txtInputSettingsFPS" />
          </li>
        </ul>
        <br />
        <ul>
          <li><p>_______________________________________________</p></li>
        </ul>
        <br />
        <ul>
          <li>
            <p>Video capture backend</p>
            <select name="selectSettingsVideoBackend" id="selectSettingsVideoBackend">
              <option value="auto">Automatic detection</option>
              <option value="libdile_vt">libdile_vt (WebOS 3.x+)</option>
              <option value="libvtcapture">libvtcapture (WebOS 5.x+)</option>
              <option value="disabled">disabled</option>
            </select>
          </li>
          <li>
            <p>Graphical capture backend</p>
            <select name="selectSettingsGraphicalBackend" id="selectSettingsGraphicalBackend">
              <option value="auto">Automatic detection</option>
              <option value="libgm">libgm (WebOS 3.x+)</option>
              <option value="libhalgal">libhalgal (WebOS 5.x+)</option>
              <option value="disabled">disabled</option>
            </select>
          </li>
          <li>
            <div className="checkboxes checklabel">
              <label htmlFor="checkSettingsAutostart">
                Autostart
                <input type="checkbox" id="checkSettingsAutostart" />
              </label>
              <br />
              <label htmlFor="checkSettingsVSync">
                VSync
                <input type="checkbox" id="checkSettingsVSync" />
              </label>
            </div>
          </li>
        </ul>
        <br />
      </div>
      <div className="settingItems settingItemsAdv" id="settingItemsAdv">
        <ul>
          <li><p><b>Service advanced settings</b></p></li>
        </ul>
        <br />
        <br />
        <div className="dileVTCheckbox checklabel">
          <ul>
            <li>
              <label><b>DILE_VT quirks:</b></label>
            </li>
            <li>
              <div className="checkboxes">
                <label htmlFor="checkSettingsQUIRK_DILE_VT_NO_FREEZE_CAPTURE">
                  QUIRK_DILE_VT_NO_FREEZE_CAPTURE
                   <input type="checkbox" id="checkSettingsQUIRK_DILE_VT_NO_FREEZE_CAPTURE" />
                </label>
                <br />
                <label htmlFor="checkSettingsQUIRK_DILE_VT_CREATE_EX">
                  QUIRK_DILE_VT_CREATE_EX
                   <input type="checkbox" id="checkSettingsQUIRK_DILE_VT_CREATE_EX" />
                </label>
              </div>
            </li>
            <li>
              <div className="checkboxes">
                <label htmlFor="checkSettingsQUIRK_DILE_VT_DUMP_LOCATION_2">
                  QUIRK_DILE_VT_DUMP_LOCATION_2
                   <input type="checkbox" id="checkSettingsQUIRK_DILE_VT_DUMP_LOCATION_2" />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <ul>
          <li><p>_______________________________________________</p></li>
        </ul>
        <br />
        <br />
        <div className="vtCaptureCheckbox checklabel">
          <ul>
            <li>
              <label><b>vtCapture quirks:</b></label>
            </li>
            <li>
              <div className="checkboxes">
                <label htmlFor="checkSettingsQUIRK_VTCAPTURE_FORCE_CAPTURE">
                  QUIRK_VTCAPTURE_FORCE_CAPTURE
                   <input type="checkbox" id="checkSettingsQUIRK_VTCAPTURE_FORCE_CAPTURE" />
                </label>
              </div>
            </li>
          </ul>
          <br />
        </div>
        <ul>
          <li><p>_______________________________________________</p></li>
        </ul>
        <br />
        <br />
        <div className="GlobalCheckbox checklabel">
          <ul>
            <li>
              <div className="checkboxes">
                <label htmlFor="checkSettingsNoHDR">
                  Disable HyperHDR SDR/HDR switch
                   <input type="checkbox" id="checkSettingsNoHDR" />
                </label>
              </div>
            </li>
            <li>
              <div className="checkboxes">
                <label htmlFor="checkSettingsNoPowerstate">
                  Disable powerstate check
                   <input type="checkbox" id="checkSettingsNoPowerstate" />
                </label>
              </div>
            </li>
          </ul>
          <br />
        </div>
      </div>
      <div className="btns">
        <button onClick="serviceSaveSettings()" id="btnSettingsSave">Save</button>
        <button onClick="serviceResetSettings()" id="btnSettingsReset">Reset</button>
        <button onClick="toggleAdvanced()" id="btnSettingsAdvanced">Advanced</button>
      </div>
      <div className="btns">
        <button onClick="tvReboot()" id="btnSettingsReboot">Reboot</button>
      </div>
    </div>
  );
}

export default Settings;
