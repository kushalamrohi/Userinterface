// app/components/Topbar.tsx
import React from 'react'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="tabs">
        <button className="tab active">Generated Articles</button>
        <button className="tab">Published Articles</button>
        <button className="tab">Scheduled Articles</button>
        <button className="tab">Archived Articles</button>
      </div>
      <input className="search-input" type="text" placeholder="Search for Title & Keywords..." />
    </div>
  )
}
