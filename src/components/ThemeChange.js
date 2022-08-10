import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import Icon from "./Icon";

function ThemeChange({ themes }) {
  useEffect(() => {
    themeChange(false);
  }, []);
  // false parameter is required for react project

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost rounded-btn">
        <div className="hidden md:block normal-case mr-3">Theme</div>
        <Icon name="moon" />
      </label>
      <div
        tabIndex="0"
        className="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4"
      >
        {themes.map((theme) => {
          return (
            <a
              key={theme.name}
              role="button"
              className="btn btn-ghost gap-2 justify-start normal-case"
              data-set-theme={theme.id}
              href="/#"
            >
              <Icon name={theme.icon} />
              {theme.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeChange;
