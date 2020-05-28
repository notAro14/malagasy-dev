import React from "react"
import TopLayout from "./src/components/topLayout"
import "prismjs/themes/prism-tomorrow.css"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
