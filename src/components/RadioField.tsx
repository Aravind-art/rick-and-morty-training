import { RadioGroup, RadioGroupItem } from "./atoms/RadioGroup";

export function RadioField({ options, onChange, value }) {
  return (
    <div className="flex items-center px-2 space-x-2">
      {options.map((val) => (
        <>
          <input
            checked={value === val}
            onChange={onChange}
            type="radio"
            name={"status"}
            value={val}
            id={val}
          />
          <label className="cursor-pointer4" htmlFor={val}>
            {val}
          </label>
        </>
      ))}
    </div>
  );
}
