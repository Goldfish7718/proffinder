import React from 'react'
import './AddStaff.sass'

const AddStaff = () => {
  return (
    <>
        <div className="addstaff">
            <input type="text" className="addstaff__input" placeholder='Staff Name Here'/><br />
            <button className="addstaff__btn">Add Staff</button>
        </div>
    </>
  )
}

export default AddStaff;