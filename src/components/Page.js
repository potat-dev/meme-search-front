import React from 'react'
import Navbar from './Navbar'
import Drawer from './Drawer'

function Page({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        {children}
        {/* TODO: <Footer /> */}
      </div>
      <Drawer />
    </div>
  )
}

export default Page