import React from 'react'
import ThemeChange from './ThemeChange';

function Navbar() {
  return (
    <div class="w-full navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <div class="flex-none lg:hidden">
            <label for="my-drawer" class="btn btn-ghost rounded-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <div class="hidden md:block lg:hidden normal-case ml-3">Menu</div>
            </label>
          </div>
        </div>
        <div class="hidden lg:block">
          <a class="btn btn-ghost normal-case text-xl" href="/#">daisyUI</a>
        </div>
      </div>
      <div class="navbar-center">
        <div class="hidden lg:flex">
          <ul class="menu menu-horizontal p-0 space-x-2">
            <li><a class="btn btn-ghost normal-case" href="/#">Item 1</a></li>
            <li tabindex="0">
              <a href="/#">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li><a href="/#">Submenu 1</a></li>
                <li><a href="/#">Submenu 2</a></li>
              </ul>
            </li>
            <li><a href="/#">Item 3</a></li>
          </ul>
        </div>
        <div class="flex lg:hidden">
          <a class="btn btn-ghost normal-case text-xl" href="/#">daisyUI</a>
        </div>

      </div>
      <div class="navbar-end">
        <ThemeChange themes={
          [
            { "name": "Light", "id": "winter", "icon": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
            { "name": "Dark", "id": "dark", "icon": "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
            { "name": "Synthwave", "id": "synthwave", "icon": "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            { "name": "Cyberpunk", "id": "cyberpunk", "icon": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
          ]
        } />
      </div>
    </div>
  )
}

export default Navbar