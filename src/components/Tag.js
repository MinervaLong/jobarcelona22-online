import './../styles/sass/App.scss';
import PropTypes from "prop-types";

const Tag = ({label, size = "sm", backgroundColor = "#6BD12F", color= '#FFF', handleClick}) => {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.2
    
    const style = {
      backgroundColor,
      padding: `${scale * 0.25}rem ${scale * 1}rem`,
      color: color,
      borderRadius: "15px",    
    }
    return(
        <button className='group__tag' onClick={handleClick} style={style}>{label}</button>
    )
}

Tag.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
}

export default Tag;