import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../context/context.js'

const Content = props => {
  const [beers, setBeers] = useState([])
  const message = 'List of Beers'

  const { favoriteDispatch } = useContext(FavoriteContext)

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await axios.get(`https://api.punkapi.com/v2/beers`)
        setBeers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <h4>{message}</h4>
      {beers.map(beer =>
        <div key={beer.id}>
          <div className='row mt-1'>
            <div className='col'>
              {beer.name}
            </div>
            <div className='col'>
              <Link
                className='btn btn-outline-info btn-sm'
                to={{
                  pathname: `/detail/${beer.id}`,
                  state: {
                    beer: beer
                  }
                }}>
                Detailed info
              </Link>
            </div>
            <div className='col'>
              <button
                className='btn btn-primary btn-sm'
                onClick={(e) => favoriteDispatch({ type: 'ADD_BEER', beer: { id: beer.id, name: beer.name } })}
              >
                Favorite Beer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Content
