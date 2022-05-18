import React, {useState} from 'react'
import './../styles/sass/App.scss';
import emoji from 'emoji-dictionary';
import Tag from './Tag';
import GroupTitle from './GroupTitle';
import GroupDesc from './GroupDescription';
import PropTypes from "prop-types";

const PresentsGroup = (
  { title, 
    emo, 
    description, 
    tags, 
    border = "1px solid rgb(48, 13, 87)", 
    borderRadius = "5px", 
    margin = "8%", 
    padding = "3%", 
    width = "85%", 
    handleClick,
  }
    ) => {
      
  const style = {
    border, 
    borderRadius, 
    margin, 
    padding, 
    width, 
  }


  const [hover, setHover] = useState(false)
  const symbol = emoji.getUnicode(emo) // Story book doesn't accept this property
  const tagList = tags.map((tag,idx) => (
    <Tag key={idx} label={tag} />
  ))
 
  return (   
    <section
    className={`group ${hover && 'group:hover'}`} 
    style={style}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)} 
    onClick={handleClick}
    >
    
      <GroupTitle label={title} getIcon={symbol} />
      <GroupDesc text={description} getIcon={symbol} />
      <div className='group__tagsContainer'>
        {tagList}
      </div>
    </section>    

  )
}

PresentsGroup.propTypes = {
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
}

export default PresentsGroup;