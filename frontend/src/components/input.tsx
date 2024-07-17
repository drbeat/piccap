import { ChangeEventHandler } from 'react';

function Input({
  label,
  value,
  onChange,
} : {
  label: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}) {
  return (
    <div className="form-control">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
}

export default Input;
