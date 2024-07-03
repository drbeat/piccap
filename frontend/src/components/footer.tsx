function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
