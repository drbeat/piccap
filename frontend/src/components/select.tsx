import { ChangeEventHandler } from 'react';

function Select({
  label,
  options,
  value,
  onChange = () => {},
}
: {
  label: string,
  options: {
    value: string,
    label: string
  }[],
  onChange?: ChangeEventHandler<HTMLSelectElement>,
}) {
  return (
    <div className="form-control">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <select
          value={value}
          className="select select-bordered"
          onChange={onChange}
        >
          {options.map((elem) => <option value={elem.value}>{elem.label}</option>)}
        </select>
      </label>
    </div>
  );
}

export default Select;
