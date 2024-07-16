import { useEffect, useState } from 'react';
import getContributors from '../util/contributorsRequests';
import Avatars from '../components/avatars';
import { Avatar } from '../types/piccapTypes';

function About() {
  const [hyperionContributors, setHyperionContributors] = useState<Avatar[]>([]);
  const [piccapContributors, setPiccapContributors] = useState<Avatar[]>([]);

  useEffect(() => {
    getContributors('webosbrew', 'hyperion-webos', setHyperionContributors);
    getContributors('tbsniller', 'piccap', setPiccapContributors);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 h-full items-center content-center">
      <div className="card bg-primary w-full text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Some info about this project</h2>
          <p>
            PicCap is the frontend app, which you have installed on your TV and you can see here, to make things as easy as possible.
            It ships and controls the seperated hyperion-webos background service, which controls the capture interfaces
            on your TV based on reverse engineering, proccesses the output and sends the resulting low quality image data to a
            receiver like Hyperion's flatbuffer server.
          </p>
          <p>
            On newer TVs there is no official way for capturing DRM-protected content like Netflix or Amazon. This restriction doesn't take place for content comming from an HDMI input.
          </p>
          <p>
            So currently as a workaround you can play your media using your PC, FireTV-Stick or Chromecast and still enjoy your LEDs.
          </p>
          <p>
            This app requires to be run as root and tries to do this at the first start using the Homebrew Channel.
          </p>
          <hr />
          <p>
            Feel free to raise an issue or pull request, or come to the OpenLG-Discord, if you have some questions.
          </p>
          <p>
            GitHub-Links:
            <a href="https://github.com/webosbrew/hyperion-webos">github.com/webosbrew/hyperion-webos</a>
            {' '}
            |
            <a href="https://github.com/TBSniller/piccap">github.com/TBSniller/piccap</a>
          </p>
          <p>
            OpenLG-Discord:
            <a href="https://discord.gg/9sqAgHVRhP">discord.gg/9sqAgHVRhP</a>
          </p>
        </div>
      </div>
      <div className="card bg-secondary w-full text-white shadow-xl">
        <div className="card-body">
          <p>
            Some love to everyone who was, or still is involved into this project and of
            course the OpenLG-/Hyperion-Community! ♥
          </p>
          <p className="font-semibold">hyperion-webos</p>
          <div className="avatars">
            {hyperionContributors.map((elem) => <Avatars elem={elem} />)}
          </div>

          <p className="font-semibold">PicCap</p>
          <div className="avatars">
            {piccapContributors.map((elem) => <Avatars elem={elem} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
