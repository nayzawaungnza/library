import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './styles.css'
export default function Layout() {
    const location = useLocation();

  return (
    <div>
     <Navbar/>
      <SwitchTransition>
        <CSSTransition timeout={1000} classNames='fade' key={location.pathname}>
            <div className='max-w-6xl mx-auto p-3'>
                <Outlet/>
            </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
