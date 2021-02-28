import React from "react"
import PropTypes from "prop-types"
import { GithubContext } from "../context/context"

const Info = (props) => {
  const data = React.useContext(GithubContext)
  return <div>Info component : {data}</div>
}

Info.propTypes = {}

export default Info
