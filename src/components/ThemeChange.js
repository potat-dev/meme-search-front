import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'

function ThemeChange({ themes }) {
  useEffect(() => { themeChange(false) }, []);
  // false parameter is required for react project

  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost rounded-btn">
        <div class="hidden md:block normal-case mr-3">Theme</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </label>
      <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4">
        { themes.map((theme) => {
            return <li>
              <a data-set-theme={theme.id} href="/#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={theme.icon} />
                </svg>
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