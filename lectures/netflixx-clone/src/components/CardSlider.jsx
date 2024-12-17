import React from 'react'
import './CardSlider.css'
import { BASE_URL } from '../App'

const CardSlider = ({ title, data }) => {
  return (
    <div className='cardSlider--view'>
      <h4>{title}</h4>
      <div className='slider-car-show'>
        {data?.map((movie) => (
          <div key={movie.id} className='slider'>
            <img src={BASE_URL + movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardSlider
