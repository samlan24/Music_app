import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {

    axios.get('http://localhost:5000/')
      .then(res =>{
        setMessage(res.data.message);
      })
      .catch(err => {
        console.log('There was an error fetching the data:', err);
      });
  }, [])
  return (
    <div>
      <p>{ message }</p>
    </div>
  )
}

export default App