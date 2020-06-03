import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './home'
// import User from './user'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard"> Go to Dashboard</Link>
      <Link to="/dashboard/profile/b884d575-2fc5-4bf1-ae02-04d600d43a12"> Go to Profile</Link>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
