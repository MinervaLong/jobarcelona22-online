import React from 'react'
import './../styles/sass/App.scss';
import emoji from 'emoji-dictionary'

const PresentsGroup = ({title, icon, description, tags}) => {
  const getEmoji = (em) =>{
    return emoji.getUnicode(em)
  }
  return (
    <section className='group'>
      <h2 className='group__title'>{title} {getEmoji(icon)}</h2>
      <p className='group__description'>{description} {getEmoji(icon)}</p>
      <div className='group__tagsContainer'>
        {tags.map(tag => (
          <button className='group__tag'>{tag}</button>
        ))}
      </div>
    </section>    
  )
}

export default PresentsGroup