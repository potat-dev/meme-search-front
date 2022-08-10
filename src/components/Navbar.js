import React from "react";
import ThemeChange from "./ThemeChange";
import Icon from "./Icon";

import config from "../Config";

function Navbar() {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost rounded-btn">
              <Icon name="menu" />
              <div className="hidden md:block lg:hidden normal-case ml-3">Menu</div>
            </label>
          </div>
        </div>
        <div className="hidden lg:block">
          <a className="btn btn-ghost normal-case text-xl" href="/#">
            {config.app_name}
          </a>
        </div>
      </div>
      <div className="navbar-center">
        <div className="hidden lg:flex">
          <div className="menu menu-horizontal p-0 space-x-2">
              <a role="button" className="btn btn-ghost normal-case" href="/#">Item 1</a>
              <a role="button" className="btn btn-ghost normal-case" href="/#">Item 2</a>
              <a role="button" className="btn btn-ghost normal-case" href="/#">Item 3</a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <a className="btn btn-ghost normal-case text-xl" href="/#">
            {config.app_name}
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeChange themes={config.themes} />
      </div>
    </div>
  );
}

export default Navbar;
