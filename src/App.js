import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import './assets/css/style.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="projects" element={<Projects />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
