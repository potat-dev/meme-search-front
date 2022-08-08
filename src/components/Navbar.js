import React from "react";
import ThemeChange from "./ThemeChange";
import Icon from "./Icon";

function Navbar() {
  return (
    <div class="w-full navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <div class="flex-none lg:hidden">
            <label for="my-drawer" class="btn btn-ghost rounded-btn">
              <Icon name="menu" />
              <div class="hidden md:block lg:hidden normal-case ml-3">Menu</div>
            </label>
          </div>
        </div>
        <div class="hidden lg:block">
          <a class="btn btn-ghost normal-case text-xl" href="/#">
            daisyUI
          </a>
        </div>
      </div>
      <div class="navbar-center">
        <div class="hidden lg:flex">
          <ul class="menu menu-horizontal p-0 space-x-2">
            <li>
              <a class="btn btn-ghost normal-case" href="/#">
                Item 1
              </a>
            </li>
            <li>
              <a href="/#">Item 2</a>
            </li>
            <li>
              <a href="/#">Item 3</a>
            </li>
          </ul>
        </div>
        <div class="flex lg:hidden">
          <a class="btn btn-ghost normal-case text-xl" href="/#">
            daisyUI
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <ThemeChange
          themes={[
            { name: "Light", id: "winter", icon: "sun" },
            { name: "Dark", id: "dark", icon: "moon" },
            { name: "Synthwave", id: "synthwave", icon: "star" },
            { name: "Cyberpunk", id: "cyberpunk", icon: "code" },
          ]}
        />
      </div>
    </div>
  );
}

export default Navbar;
