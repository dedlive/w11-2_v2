import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './home'
// import User from './user'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/main"> Go to Main</Link>
      <Link to="/dashboard/profile/b884d575-2fc5-4bf1-ae02-04d600d43a12"> Go to Profile</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
