import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import cn from "classnames";

import './style.scss'


const Button = ({ btnStyle, icon, onClick, children }) => {
    return ( 
        <button className={cn(`btn ${btnStyle}`)} onClick={onClick}>
            {icon && <img src={icon} alt='wpp' />}
            {children}
            </button>
    );
};

Button.defaultProps = {
    btnStyle: 'btn-primary',
    onClick: () => { console.log('click')},
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
