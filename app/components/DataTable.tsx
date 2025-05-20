'use client'
import React, { useState } from 'react'
import articles from '../data/articles.json'
import './DataTable.css'

export default function DataTable() {
  const [entriesPerPage, setEntriesPerPage] = useState(10)

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Articles</h2>
        <div className="entries-select">
          <label>Total {articles.length} Article Titles | Show </label>
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <label> entries per page</label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Article Title</th>
            <th>Keyword <span className="sort-icon">⇅</span></th>
            <th>Words <span className="sort-icon">⇅</span></th>
            <th>Created On <span className="sort-icon">⇅</span></th>
            <th>Action</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {articles.slice(0, entriesPerPage).map((article, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{article.title}</td>
              <td>{article.keyword}</td>
              <td>{article.words}</td>
              <td>{article.createdOn}</td>
              <td><button className="view-btn">View</button></td>
              <td><button className="publish-btn">📝</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
