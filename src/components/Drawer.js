import React from 'react'

function Drawer() {
  return (
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <div class="menu p-4 space-y-2 overflow-y-auto w-80 bg-base-100">
        {/* <!-- Sidebar content here --> */}
        <a role="button" class="btn btn-ghost" href="/#">Sidebar Item 1</a>
        <a role="button" class="btn btn-ghost" href="/#">Sidebar Item 2</a>
      </div>
    </div>
  )
}

export default Drawer