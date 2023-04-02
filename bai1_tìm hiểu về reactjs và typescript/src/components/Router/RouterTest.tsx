import React from 'react'
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Greet } from '../Greet'
import { About } from './About'
import { Setting } from './Setting'
import { NotFound } from './NotFound'

export const RouterTest = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/greet" element={<Greet name='Tin' messageCount={20} isLoggedIn={true} />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}
