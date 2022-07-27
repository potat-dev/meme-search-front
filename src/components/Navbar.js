import React from 'react'

function Navbar() {
  return (
    <div class="w-full navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <div class="flex-none lg:hidden">
            <label for="my-drawer" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="/#">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
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
      <div class="navbar-end">
        <a class="btn" href="/#">Test Button</a>
      </div>
    </div>
  )
}

export default Navbar