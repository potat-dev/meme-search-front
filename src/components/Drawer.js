import React from "react";

function Drawer() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="menu p-4 space-y-2 overflow-y-auto w-80 bg-base-100">
        {/* <!-- Sidebar content here --> */}
        <a
          role="button"
          className="btn btn-ghost normal-case justify-start"
          href="/#"
        >
          Sidebar Item 1
        </a>
        <a
          role="button"
          className="btn btn-ghost normal-case justify-start"
          href="/#"
        >
          Sidebar Item 2
        </a>
      </div>
    </div>
  );
}

export default Drawer;
