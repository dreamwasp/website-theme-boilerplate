import React from "react"

import layout from "../styles/darkMode/layout.module.scss"
import Navbar from "./Navbar"

export default ({ children }) => {
  return (
    <div className={layout.site}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
