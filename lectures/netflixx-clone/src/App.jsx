import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CardSlider from './components/CardSlider'

export const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function App() {
  const [data, setData] = useState([]) // ova ke go ucime ponataka

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVhZDllOGE1ZDlmNGFkYjVjNDQ1MTA0MzhhZGQ4MCIsIm5iZiI6MTczMjc0MjQ0NS4wODA4MjYsInN1YiI6IjY3NDYxZmE3MGFlZTZjMTUwNmE2YzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7cKLMICeKelyKo6mFsi7wskS-IyTijQjhhkDNwItMGE',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(data)
  const i = Math.floor(Math.random() * 20) // give me random number
  return (
    <div>
      <Header />
      <Banner
        img={data?.results?.[i]?.poster_path}
        title={data?.results?.[i]?.title}
        description={data?.results?.[i]?.overview}
      />
      <CardSlider data={data?.results} title={'TV Action & Adventure'} />
      <CardSlider data={data?.results} title={'Today Top Picks for you'} />
      <CardSlider data={data?.results} title={'TV Comedies'} />
      <CardSlider data={data?.results} title={'Your Netflix Watch'} />
    </div>
  )
}

export default App
