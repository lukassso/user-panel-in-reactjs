import React from "react"
import PropTypes from "prop-types"
import { GithubContext } from "../context/context"

const Info = (props) => {
  const data = React.useContext(GithubContext)
  console.log(data)
  return <div>Info component</div>
}
 
Info.propTypes = {}

export default Info
