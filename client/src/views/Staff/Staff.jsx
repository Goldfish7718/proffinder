import React from 'react'
import './Staff.sass'

const Staff = () => {

  return (
    <>
        <div className="staff">
            <h1 className="staff__prof-name">Prof SD Jadhav</h1>

            <div className="staff__days">
            <h2 className="staff__day-name">$Monday</h2>
                <div className="staff__time-slot">
                    <div className="staff__time-slot-input">
                        <h3 className="staff__time-slot-name">1025TO1120</h3>
                        <input type="text" className="staff__location-input" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Staff