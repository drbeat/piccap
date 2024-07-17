import Checkbox from '../components/checkbox';
import Input from '../components/input';
import Select from '../components/select';

function Settings() {
  return (
    <>
      <Checkbox
        label="Local socket"
        onChange="socketCheckChanged(this)"
        value
      />

      <Select
        label="Socket"
        options={[
          { value: 'hyperhdr', label: '/tmp/hyperhdr-domain' },
          { value: 'manual', label: 'manual' },
        ]}
        onChange="socketSelectChanged(this)"
      />

      <Input
        label="Socket path"
      />

      <Input
        label="Address"
      />

      <Input
        label="Port"
      />

      <Input
        label="Hyperion priority"
      />

      <Select
        label="Resolution"
        options={[
          { value: '320x180', label: '320x180' },
          { value: '256x144', label: '256x144' },
          { value: '192x108', label: '192x108' },
          { value: '128x78', label: '128x78' },
          { value: 'manual', label: 'manual' },
        ]}
        onChange="resolutionChanged(this)"
      />

      <Input
        label="Width"
      />

      <Input
        label="Height"
      />

      <Input
        label="Maximal FPS"
      />

      <Select
        label="Video capture backend"
        options={[
          { value: 'auto', label: 'Automatic detection' },
          { value: 'libdile_vt', label: 'libdile_vt (WebOS 3.x+)' },
          { value: 'libvtcapture', label: 'libvtcapture (WebOS 5.x+)' },
          { value: 'disabled', label: 'disabled' },
        ]}
      />

      <Select
        label="Graphical capture backend"
        options={[
          { value: 'auto', label: 'Automatic detection' },
          { value: 'libgm', label: 'libgm (WebOS 3.x+)' },
          { value: 'libhalgal', label: 'libhalgal (WebOS 5.x+)' },
          { value: 'disabled', label: 'disabled' },
        ]}
      />

      <Checkbox
        label="Autostart"
      />

      <Checkbox
        label="VSync"
      />
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
    </>
  );
}

export default Settings;
