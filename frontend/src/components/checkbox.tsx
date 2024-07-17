import { ChangeEventHandler } from 'react';

function Checkbox({
  label,
  onChange,
  value,
} : {
  label: string,
  value: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input
          type="checkbox"
          defaultChecked={value}
          className="checkbox"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;
