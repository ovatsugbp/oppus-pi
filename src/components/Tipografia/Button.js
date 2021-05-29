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

const buttonStyle = {
   
            color: '#FFF',
            backgroundColor: '#04BF58',
            borderStyle: 'none',
            borderRadius: '10px',
            padding: '15px 64px',
            margin: '10px 5px',
            textAlign: 'center',
            fontFamily: 'Roboto, sans serif',
            display: 'inline-block',
            fontSize: '24px',
            fontWeight: 'bold',
} 

export default Button;
