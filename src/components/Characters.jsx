import React from 'react'

const Characters = () => {

  // localStorage.getItem('data', JSON.parse(response.data.user))
  const data = JSON.parse(localStorage.getItem('data'))
  
  return (
    <div>
      <h1>Данные пользователя</h1>
      <div>{data.city}</div>
      <div>{data.fullName}</div>
      <div>{data.job}</div>
      <div>{data.language}</div>
      <div>{data.sex}</div>
    </div>
  )
}

export default Characters