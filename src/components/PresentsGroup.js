import React from 'react'
import './../styles/sass/App.scss';

const PresentsGroup = () => {
  return (
    <section className='group'>
      <h2 className='group__title'>Title</h2>
      <p className='group__description'>Description</p>
      <div className='group__tagsContainer'>
        <button className='group__tag'> Deportes de riesgo</button>
        <button className='group__tag'> Libros</button></div>
    </section>    
  )
}

export default PresentsGroup