import React from "react"

import main from "../styles/darkMode/main.module.scss"
import Layout from "../components/layout"
import Counter from "../components/Counter"

export default () => {
  return (
    <Layout>
      <div className={main.text}>
        <Counter />
      </div>
    </Layout>
  )
}
