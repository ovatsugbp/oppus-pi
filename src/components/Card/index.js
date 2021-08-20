import React, {useState} from 'react'
import './style.scss'
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import Icon from '../../assets/img/Whatsapp.png';
import Button from '../Button';



export const Card = ({name, profession, price, urlImage, biography, score}) => {

    return (
        <section className="card">
            <div className="card-top">
                <article className="profile">
                    <div className="profile-pic">
                        <img src={urlImage} alt="" width="50" height="50"/>
                    </div>
                    <div className="profile-info">
                        <div className="profile-data">
                            <h2>{name}</h2>
                            <span>{profession}</span>
                        </div>
                        <div className="rating">
                            <StarIcon className="star-rating" fontSize="small" style={{color: score >= 1? yellow[500]: '#E1ECF2'}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: score >= 2? yellow[500]: '#E1ECF2'}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: score >= 3? yellow[500]: '#E1ECF2'}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: score >= 4? yellow[500]: '#E1ECF2'}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: score >= 5? yellow[500]: '#E1ECF2'}}/>                            
                        </div>                        
                    </div>
                </article>
            </div>
            <div className="card-medium" className="biography">{biography}</div>
            <div className="card-bottom">
                <div className="professional-price">
                    <p>Preço/Hora</p>
                    <p>R$ {price}</p>
                </div>   
                <div className="professional-contact">
                    <Button btnStyle="btn-primary" icon={Icon}>Entrar em contato</Button>
                </div>
            </div>            
        </section>
    )
}
