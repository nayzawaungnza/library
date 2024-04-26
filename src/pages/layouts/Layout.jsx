import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
