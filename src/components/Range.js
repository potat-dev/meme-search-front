import React, { useState, useEffect } from "react";

export default function Range({
  name,
  placeholder = name,
  min = 0,
  max = 100,
  step = 1,
  step_plus_func = (x, step) => x + step,
  step_minus_func = (x, step) => x - step,
  defaultValue = max / 2,
  onChange,
}) {
  const [value, setValue] = useState(
    localStorage.getItem(name) || defaultValue
  );

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    // ensure the value is between the min and max
    var norm_value = Math.min(Math.max(newValue, min), max);
    setValue(norm_value);
    localStorage.setItem(name, norm_value);
    onChange(norm_value);
  };

  // handle the plus and minus buttons
  const handlePlus = () => {
    const newValue = step_plus_func(value, step);
    let norm_value = Math.min(Math.max(newValue, min), max);
    setValue(norm_value);
    localStorage.setItem(name, norm_value);
    onChange(norm_value);
  };

  const handleMinus = () => {
    const newValue = step_minus_func(value, step);
    let norm_value = Math.min(Math.max(newValue, min), max);
    setValue(norm_value);
    localStorage.setItem(name, norm_value);
    onChange(norm_value);
  };

  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text">{name}</span>
      </label>
      <div class="input-group">
        <button class="btn btn-square" onClick={handleMinus}>
          -
        </button>
        <input
          type="number"
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          class="input input-bordered w-full focus:outline-none text-center focus:placeholder-transparent"
        />
        <button class="btn btn-square" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
}
