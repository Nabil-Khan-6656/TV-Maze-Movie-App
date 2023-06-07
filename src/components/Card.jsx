import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name , type , language , runtime , image , summary}) => {
  const cardData = {
    name : name,
    type: type,
    language : language,
    runtime : runtime,
    image: image,
    summary : summary
  }

  // console.log(cardData);
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={image} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Type : {type}</p>
      <p className="card-text">Language : {language}</p>
      <p className="card-text">Runtime : {runtime}</p>
      <Link to="/details" className="btn btn-primary" state={cardData}>View Details</Link>
    </div>
  </div>
  )
}

export default Card
