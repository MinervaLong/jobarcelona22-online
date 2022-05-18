import './../styles/sass/App.scss';
import PropTypes from "prop-types";

const GroupTitle = ({label, margin = '0', fontWeigth = '500', getIcon}) => {
    const style = {
        margin,
        fontWeigth,
    }
    return <h3 className='group__title' style={style}>{label} {getIcon}</h3>
}

GroupTitle.propTypes = {
    label: PropTypes.string,
    margin: PropTypes.string,
    fontWeigth: PropTypes.string,
}

export default GroupTitle;
