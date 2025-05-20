// app/components/Sidebar.tsx
import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">abun</div>
      <select className="dropdown">
        <option>amazon.com</option>
        <option>flipkart.com</option>
      </select>

      <nav className="nav">
        <ul>
          <li>Articles</li>
          <ul className="submenu">
            <li>Create Article</li>
            <li className="active">Generated Articles</li>
          </ul>
          <li>Keyword Projects</li>
          <ul className="submenu">
            <li>All Keyword to Article</li>
            <li>Import Keyword from GSC</li>
            <li>Manual Keyword to Article</li>
          </ul>
          <li>Auto Blog</li>
          <li>Internal Links</li>
          <li>Free Backlinks</li>
          <li>Subscription</li>
          <li>Help Center</li>
          <li>Live Chat Support</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  )
}
