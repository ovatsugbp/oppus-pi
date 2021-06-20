import React, {useState} from 'react'
import './style.scss'

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
               <li className={`menu-itens menu-top ${status}`}>Menu</li>
               {children.map((objValue,index)=>{
                  return (
                     <a href={objValue.url}><li className={`menu-itens ${status}`}>{objValue.item}</li></a>
                  )
               })}
            </ul>
         </div>
      </div>
   )
}

export default Menu