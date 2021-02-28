import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Search, Info, User, Repos} from '../components'

const Dashboard = props => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Search/> */}
      <Info/>
      <User/>
      {/* <Repos/> */}
    </div>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
