import React from "react";
import ThemeChange from "./ThemeChange";
import Icon from "./Icon";

import config from "../Config";

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
            {config.app_name}
          </a>
        </div>
      </div>
      <div class="navbar-center">
        <div class="hidden lg:flex">
          <div class="menu menu-horizontal p-0 space-x-2">
              <a role="button" class="btn btn-ghost normal-case" href="/#">Item 1</a>
              <a role="button" class="btn btn-ghost normal-case" href="/#">Item 2</a>
              <a role="button" class="btn btn-ghost normal-case" href="/#">Item 3</a>
          </div>
        </div>
        <div class="flex lg:hidden">
          <a class="btn btn-ghost normal-case text-xl" href="/#">
            {config.app_name}
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <ThemeChange themes={config.themes} />
      </div>
    </div>
  );
}

export default Navbar;
