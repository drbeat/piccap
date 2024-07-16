import { Avatar } from '../types/types';

function getContributors(
  owner: string,
  repo: string,
  setData: React.Dispatch<React.SetStateAction<Avatar[]>>,
) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

  fetch(url).then((response) => response.json()).then((data) => setData(data));
}

export default getContributors;
