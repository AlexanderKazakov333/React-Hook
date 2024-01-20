import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Characters = () => {

  const data = JSON.parse(localStorage.getItem('data'))

  const navigate = useNavigate()

  useEffect(() => {
    
    if (!data) {
      navigate('/')
    }
  }, [])
  
  const exitF = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <h1>Данные пользователя</h1>
      <div>{data && data.city}</div>
      <div>{data && data.fullName}</div>
      <div>{ data && data.job}</div>
      <div>{data && data.language}</div>
      <div>{ data && data.sex}</div>

      <div>
        <input type="button" value='Выйти' onClick={exitF} />
      </div>
    </div>

    
  )
}

export default Characters