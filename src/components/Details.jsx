import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Details = ({props}) => {
    const location = useLocation()
    const propsData = location.state
    // console.log(propsData);

    const movieData ={
        name : propsData.name,
        type: propsData.type,
        language : propsData.language,
        runtime : propsData.runtime,
        image: propsData.image,
        summary : propsData.summary
    }

  return (
    <div>
        <h1>{propsData.name}</h1>
        <img src={propsData.image}  />
        <h2>Type : {propsData.type}</h2>
        <h3>Summary : </h3> <p>{propsData.summary}</p>
        <Link className="btn btn-primary" to='/booknow' state={movieData}>Book Ticket Now</Link>
    </div>
  )
}

export default Details
