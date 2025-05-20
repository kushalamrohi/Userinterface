// app/page.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DataTable from './components/DataTable';
import '../styles/components.css';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <DataTable />
      </div>
    </div>
  );
}
