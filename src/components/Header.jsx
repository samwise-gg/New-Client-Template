import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gray-100 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Ground Gigs</h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header
