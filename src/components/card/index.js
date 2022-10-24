import React from 'react';

function Card({ card, img, keys, handleClick })  {

   return (
      <div className={`card ${card.complete}`} onClick={() => handleClick(keys)}>
         <img src={img} alt=""/>

      </div>
   );
}

export default Card;