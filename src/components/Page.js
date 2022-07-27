import React from 'react'
import Navbar from './Navbar'
import Drawer from './Drawer'

function Page({ children }) {
  return (
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <Navbar />
        {children}
      </div>
      <Drawer />
    </div>
  )
}

export default Page