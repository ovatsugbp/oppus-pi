import React, {useState} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function Menu({children}){
   const [status, setStatus] = useState('close')
   return (
      <div className="menu-container">
         <div className="menu-button" role="button" onClick={()=> setStatus((status === 'open' )? 'close':'open')}>
            <ul>
               <li className={status}></li>
               <li className={status}></li>
               <li className={status}></li>
            </ul>
         </div>
         <div className={`menu-body ${status}`}>
            <ul>
               <li className={`menu-itens menu-item-top ${status}`}>Menu</li>
               {children.map(({item,rout},index)=>{
                  return (
                     <Link key={index} to={rout}><li className={`menu-itens ${status}`}>{item}</li></Link>
                  )
               })}
               <Link to="/como-funciona"><li className={`menu-itens menu-item-bottom ${status}`}>Como funciona</li></Link>
            </ul>
         </div>
      </div>
   )
}

export default Menu
