import { Avatar } from '../types/piccapTypes';

function Avatars({
  elem,
} : {
  elem: Avatar,
}) {
  return (
    <a href={elem.html_url} className="avatar tooltip" data-tip={elem.login}>
      <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
        <img
          src={elem.avatar_url}
          alt={elem.login}
          title={elem.login}
        />
      </div>
    </a>
  );
}

export default Avatars;
