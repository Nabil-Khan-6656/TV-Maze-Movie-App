import React, { useEffect, useState } from 'react'
import Card from './Card'
import "../App.css"
const Home = () => {
    const [ shows , setShows] = useState([])
    const fetchShows = async() =>{
        const res = await fetch('https://api.tvmaze.com/search/shows?q=all',{
            method:"GET",
        })

        const data = await res.json()
        setShows(data)
        
    }
    useEffect(()=>{
        fetchShows()
    })
  return (
    <>
      <div className="row">

  

      {
        shows.map((show)=>{
            return(
              //  <div key={show.show.id}>
              //    <h1>{show.show.name}</h1>
              //  </div>

              <div className='col-md-3'key={show.show.id}>
            <Card  name={show.show.name} 
             type={show.show.type}
             language={show.show.language}
             runtime={show.show.runtime}
             image={show.show.image.medium}
             summary={show.show.summary}
            />
               </div>
            )
        })
      }
          </div>
    </>
  )
}

export default Home
