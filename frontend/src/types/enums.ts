export enum EnumPages {
  SERVICE = 'service',
  SETTINGS = 'settings',
  LOGS = 'logs',
  ABOUT = 'about',
}

export enum EnumTheme {
  BLUE = 'blueMode',
  BLACK = 'blackMode',
  DARK = 'darkMode',
}

export enum EnumQuirks {
  // DILE_VT
  QUIRK_DILE_VT_CREATE_EX = '0x1',
  QUIRK_DILE_VT_NO_FREEZE_CAPTURE = '0x2',
  QUIRK_DILE_VT_DUMP_LOCATION_2 = '0x4',
  // vtCapture
  QUIRK_VTCAPTURE_FORCE_CAPTURE = '0x100',
}

export enum EnumWebOSRequests {
  START = 'start',
  STOP = 'stop',
  REBOOT = 'reboot',
  EXEC = 'exec',
  STATUS = 'status',
  GETSETTINGS = 'getSettings',
  SETSETTINGS = 'setSettings',
}
