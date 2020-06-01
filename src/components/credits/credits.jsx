import React from "react"
import Link from "@material-ui/core/Link"
import { Typography } from "@material-ui/core"

const Credits = ({ userName, platform, userUrl }) => {
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
      on {platform}
    </Typography>
  )
}

export default Credits
