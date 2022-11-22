import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Slider({apiKey,baseUrl}) {

const [upcomingMovies,setUpcomingMovies]=useState([])


useEffect(() => {
  axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
  .then(res=>{
    console.log(res.data.results)
    setUpcomingMovies(res.data.results)
  })
  .catch(err=>console.log(err))
}, [])


  return (
    <div>
      
    </div>
  )
}

export default Slider