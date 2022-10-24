import React, {useState, useRef} from 'react';
import jery from "./../../assets/jery.jpg";
import jery2 from "./../../assets/jery2.jpg";
import tom from "./../../assets/tom.jpg";
import volk from "./../../assets/volk.jpg";
import volk2 from "./../../assets/volk2.jpg";
import zayec from "./../../assets/zayec.jpg";

import Card from "../card";
import {matches} from "@testing-library/jest-dom/dist/utils";


function Cards() {

   const [cards, setCards] = useState([
      {id: 1, keys: 1, name: "Jery", complete: "", img: jery},
      {id: 2, keys: 1, name: "Jery", complete: "", img: jery},
      {id: 3, keys: 2, name: "Jery2", complete: "", img: jery2},
      {id: 4, keys: 2, name: "Jery2", complete: "", img: jery2},
      {id: 5, keys: 3, name: "tom", complete: "", img: tom},
      {id: 6, keys: 3, name: "tom", complete: "", img: tom},
      {id: 7, keys: 4, name: "volk", complete: "", img: volk},
      {id: 8, keys: 4, name: "volk", complete: "", img: volk},
      {id: 9, keys: 5, name: "volk2", complete: "", img: volk2},
      {id: 10, keys: 5, name: "volk2", complete: "", img: volk2},
      {id: 11, keys: 6, name: "zayec", complete: "", img: zayec},
      {id: 12, keys: 6, name: "zayec", complete: "", img: zayec},
   ].sort(() => Math.random() - 0.5));

   const [prevCardState, setPrevCardsState] = useState(-1)
   const previousKeys = useRef(-1)

   function checkCards(currentCard)  {

     if(cards[currentCard].keys === cards[prevCardState].keys) {
        cards[prevCardState].complete ="active matched"
        cards[currentCard].complete = "active matched"
        setPrevCardsState(-1)
     }else{
        cards[currentCard].complete = "active"
        setCards([...cards])
        setTimeout(() => {
           setPrevCardsState(-1)
           cards[currentCard].complete = "unmatch"
           cards[prevCardState].complete = "unmatch"
           setCards([...cards])
        }, 1000)
     }
   }

   function handleClick (keys) {
      if(keys !== previousKeys){
         if(cards[keys].complete === "active matched"){
            console.log("already match")
         }else{
            if(prevCardState === -1){
               previousKeys.current = keys
               cards[keys].complete = "active"
               setCards([...cards])
               setPrevCardsState(keys)
            }else{
               checkCards(keys)
               previousKeys.current = -1
            }
         }
      }else {
         console.log("card currently selected")
      }
   }

   return (
      <div className={"container"}>
         {cards.map(elem =>
            <Card
               card={elem}
               key={elem.id}
               img={elem.img}
               keys={elem.keys}
               handleClick={handleClick}
            />)}
      </div>
   );
}

export default Cards;