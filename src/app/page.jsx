import React from 'react'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

const page = () => {
  return (
    <div>
      <Login> 
        <Dashboard></Dashboard>
      </Login>
    </div>
  )
}

export default page
