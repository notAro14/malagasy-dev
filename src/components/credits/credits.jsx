import React from "react"
import Link from "@material-ui/core/Link"
import { Typography } from "@material-ui/core"

const Credits = ({ userName, platform, userUrl, platformUrl }) => {
  return (
    <Typography color="textPrimary" variant="caption" component="p">
      Photo by{" "}
      <Link
        color="secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={userUrl}
      >
        {userName}
      </Link>{" "}
      on{" "}
      <Link
        color="secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={platformUrl}
      >
        {platform}
      </Link>
    </Typography>
  )
}

export default Credits
