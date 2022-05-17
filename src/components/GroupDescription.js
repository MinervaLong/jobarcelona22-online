import './../styles/sass/App.scss';
import PropTypes from "prop-types";

const GroupDesc = ({text, marginTop = '5%', marginBottom = '9%',fontSize = '12pt', getIcon}) => {
    const style = {
        marginTop,
        marginBottom,
        fontSize,        
    }

    return <p style={style}>{text} {getIcon}</p>
}

GroupDesc.propTypes = {
    text: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    fontSize: PropTypes.string,
}

export default GroupDesc;
