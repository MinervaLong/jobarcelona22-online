import './../styles/sass/App.scss';
import PropTypes from "prop-types";

const HeaderListView = (
    {
    textAlign = "center",
    height = "270px",
    marginBottom = "5%",
    backgroundColor = "#B7DD9B",
    }) => {

    const style = {
        height,
        marginBottom,
        backgroundColor,
        textAlign
    }
    return (
        <header style={style}>
            <div className='listView__titleWrapper'>
                <h1 className='listView__title'>PRESENTS MANAGEMENT</h1>
            </div>
            
        </header>
    )
}

HeaderListView.propTypes = {
    textAlign: PropTypes.string,
    marginBottom: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
    
}

export default HeaderListView;

// Photo by <a href="https://unsplash.com/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">FLY:D</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  