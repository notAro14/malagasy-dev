import React from "react"
import "typeface-open-sans"
import TopLayout from "./src/components/topLayout"
import "prismjs/themes/prism-tomorrow.css"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
