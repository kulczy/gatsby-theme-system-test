import React from "react"
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default ({ children }) => (
  <div className="layout">
    <header className="layout__navbar"><Header /></header>
    <div className="layout__body">
      <nav className="layout__sidebar"><Sidebar /></nav>
      <main className="layout__content">{children}</main>
    </div>
  </div>
);
