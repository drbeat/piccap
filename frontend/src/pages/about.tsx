import React, { useEffect, useState } from 'react';

function About() {
  const [contributors, setContributors] = useState([]);

  async function getContributors(owner: string, repo: string) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      setContributors(await response.json());
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getContributors('webosbrew', 'hyperion-webos');
    getContributors('tbsniller', 'piccap');
  }, []);
  
  return (
    <div id="about" className="About">
      <div className="sub_title">
        <p>Some info about this project</p>
      </div>
      <br />
      <div className="aboutItems">
        <ul>
          <li>
            <p>
              PicCap is the frontend app, which you have installed on your TV and you can see here, to make things as easy as possible. It ships and controls the seperated hyperion-webos background service, which controls the capture interfaces on your TV based on reverse engineering, proccesses the output and sends the resulting low quality image data to a receiver like Hyperion's flatbuffer server.
              <br />
              On newer TVs there is no official way for capturing DRM-protected content like Netflix or Amazon. This restriction doesn't take place for content comming from an HDMI input.
              <br />
              So currently as a workaround you can play your media using your PC, FireTV-Stick or Chromecast and still enjoy your LEDs.
              <br />
              <u>This app requires to be run as root and tries to do this at the first start using the Homebrew Channel.</u>
            </p>
          </li>
        </ul>
        <ul>
          <li><p>_______________________________________________</p></li>
        </ul>
        <br />
        <ul>
          <li>
            <p>
              <br />
              Feel free to raise an issue or pull request, or come to the OpenLG-Discord, if you have some questions.
            </p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>
              GitHub-Links:
              <a href="https://github.com/webosbrew/hyperion-webos">github.com/webosbrew/hyperion-webos</a>
              {' '}
              |
              <a href="https://github.com/TBSniller/piccap">github.com/TBSniller/piccap</a>
            </p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>
              OpenLG-Discord:
              <a href="https://discord.gg/9sqAgHVRhP">discord.gg/9sqAgHVRhP</a>
            </p>
          </li>
        </ul>
        <br />
        <ul>
          <li><p>_______________________________________________</p></li>
        </ul>
        <br />
        <ul>
          <li>
            <p>
              <br />
              Some love to everyone who was, or still is involved into this project and of course the OpenLG-/Hyperion-Community! ♥
            </p>
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            <p style={{ textAlign: 'left' }}>hyperion-webos</p>
            <div className="hyperionwebosContributors avatars">
              {contributors.map(elem => console.log(elem))}
            </div>
          </li>
          <li>
            <p style={{ textAlign: 'left' }}>PicCap</p>
            <div className="piccapContributors avatars" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
