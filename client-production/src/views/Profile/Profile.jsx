import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.sass'
import axios from 'axios'
import { API_URL } from '../../App'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    const [decode, setDecode] = useState(null);
    const [loading, setLoading] = useState(false);

    const requestVerification = async () => {
        setLoading(true)
        try {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
            const res = await axios.get(`${API_URL}/auth/verify`)

            setDecode(res.data.decode)
            console.log(res.data.decode.initiated);
        } catch (err) {
            setError(err.response.data.message)
        }
        setLoading(false)
    }

    const logout = async e => {
        localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => {
        requestVerification()
    }, [])

  return (
    <>
        <div className="profile">
            <Navbar />
            <h1 className="profile__title">
                My Profile
            </h1>
            {!loading && decode &&
                <div className="profile__details">
                    <h5 className='profile__label'>Fist Name:</h5>
                    <h3 className="profile__detail">{decode?.fname}</h3>
                    
                    <h5 className="profile__label">Last Name:</h5>
                    <h3 className="profile__detail">{decode?.lname}</h3>

                    <h5 className="profile__label">Username:</h5>
                    <h3 className="profile__detail">{decode?.username}</h3>

                    <button className="profile__btn gradient-btn" onClick={() => navigate('/timetable')}>MY TIMETABLE</button>
                    <button className="profile__btn gradient-btn" onClick={logout}>LOG OUT</button>
                </div>
            }
            {loading &&
                <h1 className="profile__loading">Loading...</h1>
            }
        </div>
    </>
  )
}

export default Profile