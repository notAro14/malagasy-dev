import React from "react"
import Link from "@material-ui/core/Link"
import { Typography } from "@material-ui/core"

const Credits = ({ userName, platform, userUrl, platformUrl }) => {
  return (
    <Typography color="textPrimary" variant="caption" component="p">
      Photo by{" "}
      <Link
        color="initial"
        target="_blank"
        underline="none"
        rel="noopener noreferrer"
        href={userUrl}
      >
        {userName}
      </Link>{" "}
      on{" "}
      <Link
        color="initial"
        underline="none"
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
