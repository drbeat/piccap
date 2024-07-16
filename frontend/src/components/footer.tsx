import { EnumWebOSRequests } from '../types/enums';
import { piccapRequests } from '../util/webOSRequests';

function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-4">
      <nav className="grid-flow-col gap-3 place-self-center justify-self-start">
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={() => piccapRequests(EnumWebOSRequests.START)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          Start
        </button>
        <button
          type="button"
          className="btn btn-sm btn-error"
          onClick={() => piccapRequests(EnumWebOSRequests.STOP)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
          </svg>
          Stop
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={() => piccapRequests(EnumWebOSRequests.GETSETTINGS)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Reload
        </button>
      </nav>
      <nav className="grid-flow-col gap-3 place-self-center justify-self-end">
        <p>State: </p>
        <p id="txtInfoState">Loading..</p>

        <p> | Receiver: </p>
        <p id="txtInfoReceiver">n/a</p>

        <p> | UI: </p>
        <p id="txtInfoUI">n/a</p>

        <p> | Video: </p>
        <p id="txtInfoVideo">n/a</p>

        <p> | FPS: </p>
        <p id="txtInfoFPS">n/a</p>
      </nav>
    </footer>
  );
}

export default Footer;
