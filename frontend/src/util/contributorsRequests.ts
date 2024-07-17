import { Avatar } from '../types/piccapTypes';
import githubjson from '../mock/github.json';

function getContributors(
  owner: string,
  repo: string,
  setData: React.Dispatch<React.SetStateAction<Avatar[]>>,
) {
  if (import.meta.env.DEV) {
    return setData(githubjson);
  }

  if (import.meta.env.PROD) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

    fetch(url).then((response) => response.json()).then((data) => setData(data));
  }
}

export default getContributors;
