import "./Characters.css";
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
    <div className="about">
      <h1>Данные пользователя</h1>
      <div>Город: {data && data.city}</div>
      <div>Имя: {data && data.fullName}</div>
      <div>Работа: {data && data.job}</div>
      <div>Язык: {data && data.language}</div>
      <div>Пол: {data && data.sex}</div>

      <div className="exit-btn">
        <input className="btn-exit" type="button" value='Выйти' onClick={exitF} />
      </div>
    </div>

    
  )
}

export default Characters