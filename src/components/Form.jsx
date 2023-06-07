import React from 'react'
import { useLocation } from 'react-router-dom'
import "../App.css"

const Form = ({props}) => {

    const location = useLocation()
    const propsData = location.state

  return (
    <div className="form-container">
      <h1>Book Your Ticket Now!</h1>
    <form>
    <div className="mb-3">
      <label  className="form-label">Movie Name</label>
      <input type="text"value={propsData.name}  className="form-control" id="name" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Language</label>
      <input type="text" className="form-control" id="language" value={propsData.language} />
    </div>

    <div className="mb-3">
      <label  className="form-label">Type</label>
      <input type="text" className="form-control" id="type" value={propsData.type} />
    </div>
    <button type="submit" className="btn btn-primary">Book Now</button>
  </form>
  </div>
  )
}

export default Form
