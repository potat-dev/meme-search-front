import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Icon from './Icon';

function ThemeChange({ themes }) {
  useEffect(() => { themeChange(false) }, []);
  // false parameter is required for react project

  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost rounded-btn">
        <div class="hidden md:block normal-case mr-3">Theme</div>
        <Icon name="moon" />
      </label>
      <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4">
        { themes.map((theme) => {
            return <li>
              <a data-set-theme={theme.id} href="/#">
                <Icon name={theme.icon} />
                {theme.name}
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default ThemeChange