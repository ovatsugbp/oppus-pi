import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const Button = ({ text, onClick }) => {
    return ( 
        <button  style={buttonStyle} onClick={onClick}>{text}</button>
    );
};

Button.defaultProps = {
    text: 'button',
    onClick: () => { console.log('click')},
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

