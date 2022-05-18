import React, {useState} from 'react'
import './../styles/sass/App.scss';
// Story book doesn't works well with emoji library and throw an error due to React 18 incompatibilities
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
    margin = "5%", 
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

  // Hover state to apply the styles when mouse is over the group component
  const [hover, setHover] = useState(false)
  // Get the emoji from the word stored in json data
  const symbol = emoji.getUnicode(emo)
   
  const tagList = tags.map((tag,idx) => (
    <Tag key={idx} label={tag} />
  ))
 
  return (   
    <section
    className={`group ${hover && 'group:hover'}`} // Conditional classes
    style={style}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)} 
    onClick={handleClick} // Function prepared for when action is defined
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