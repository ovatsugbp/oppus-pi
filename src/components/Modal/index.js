import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ onClick, children }) => {

  
    return ReactDOM.createPortal(
        <div className="full-modal">
            <div className="modal-card">
                <button className="close-btn" type="button" onClick={onClick}>x</button>
                <div className="modal-content">
                    {children}
                </div>
        </div>
        </div>,
        portalRoot,
    );
};

export default Modal;