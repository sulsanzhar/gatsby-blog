import React from "react"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <h2>Gatsby Blog</h2>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
