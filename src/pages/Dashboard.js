import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Search, Info, User, Repos} from '../components'
import loadingImage from '../images/preloader.gif';
import {GithubContext} from '../context/context';

const Dashboard = props => {
  const {loading} = React.useContext(GithubContext);
  if(loading){
    return <main>
      <Navbar/> 
      <Search/>
      <img src={loadingImage} className='loading-img' alt='loading'/>
    </main>
  }
  return (
    <div>
      <Navbar></Navbar>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </div>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
