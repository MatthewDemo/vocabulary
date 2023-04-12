import React from 'react'
import {Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <header>
        <Link to="/">All words</Link>
        <Link to="/add">Add a new word</Link>
        <Link to="/check">Check your knowledges</Link>
        <Link to="/history">History</Link>
      </header>
  )
}

export default Header
