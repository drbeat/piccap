import { EnumPages } from '../types/enums';

function Navigation(
  { viewHandle } :
  { viewHandle: React.Dispatch<React.SetStateAction<EnumPages>> },
) {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl">
          <p>PicCap - Hyperion Sender App</p>
          <p id="txtPicCapVersion">loading...</p>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button
              type="button"
              className="btn btn-lg btn-ghost"
              onClick={() => viewHandle(EnumPages.SERVICE)}
            >
              Service
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-lg btn-ghost"
              onClick={() => viewHandle(EnumPages.SETTINGS)}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-lg btn-ghost"
              onClick={() => viewHandle(EnumPages.LOGS)}
            >
              Logs
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-lg btn-ghost"
              onClick={() => viewHandle(EnumPages.ABOUT)}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
