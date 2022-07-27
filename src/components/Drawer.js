import React from 'react'

function Drawer() {
  return (
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 space-y-2 overflow-y-auto w-80 bg-base-100">
        {/* <!-- Sidebar content here --> */}
        <li><a href="/#">Sidebar Item 1</a></li>
        <li><a href="/#">Sidebar Item 2</a></li>
      </ul>
    </div>
  )
}

export default Drawer