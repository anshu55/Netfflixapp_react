import React from 'react';
import Images from './Images';
function Card(props){
   return(
<>
<div className='cards'>
       <div className='card'>
       <Images imgsrc={props.imgsrc}/>
           <div className='card-info'>
           <span className='card-category'>{props.title}</span>
           <h3 className='card-title'>{props.sname}</h3>
           <a href={props.link} target='blank'>
               <button>Watch Now</button>
           </a>
           </div>
       </div>
       </div>
       </>
   );
}
export default Card;

