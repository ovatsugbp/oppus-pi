import React from 'react'
import './style.scss'
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import Icon from '../../assets/img/Whatsapp.png';
import Button from '../Button';



export const Card = ({name, profession, price}) => {
    return (
        <section className="card">
            <div className="card-top">
                <article className="profile">
                    <div className="profile-pic">
                        <img src="https://static1.purepeople.com.br/articles/0/33/26/0/@/374135-britney-spears-completa-33-anos-nesta-624x600-2.jpg" alt="" width="50" height="50"/>
                    </div>
                    <div className="profile-info">
                        <div className="profile-data">
                            <h2>{name}</h2>
                            <span>{profession}</span>
                        </div>                        
                        <div className="rating">
                            <StarIcon className="star-rating" fontSize="small" style={{color: yellow[500]}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: yellow[500]}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: yellow[500]}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: yellow[500]}}/>
                            <StarIcon className="star-rating" fontSize="small" style={{color: yellow[500]}}/>                            
                        </div>                        
                    </div>
                </article>
            </div>
            <div className="card-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, recusandae sint? Odit, tempore? Autem doloremque officia, voluptatem magnam delectus nisi molestias placeat aperiam possimus tempore, quidem maxime expedita unde natus exercitationem, ducimus distinctio accusantium vero quis architecto. Repudiandae excepturi eligendi laborum quam dolor sed in eum, provident, vel, expedita tenetur harum suscipit molestiae veniam officiis culpa eaque accusamus iure nostrum.</div>
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
