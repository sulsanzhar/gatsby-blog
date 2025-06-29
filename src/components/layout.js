import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h2>Gatsby Blog</h2>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
