import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.sass'

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="home">
            <h1 className="home__title">ProfFinder</h1>
            <br /><br />
            <button onClick={() => navigate('/addstaff')} className="home__addstaff-btn">Add Staff</button>
        </div>
    </>
  )
}

export default Home