import { useEffect, useState } from "react";

interface itemProps {
    id: number, value: number, isOpen:boolean, isRemoved: boolean
}
interface CardProps {
item: itemProps
onCardClickHandler: (item:itemProps)=> void;
}
const Card = ({item, onCardClickHandler}:CardProps) => {
console.log("Rerenderig", item.value===2 && item);
  if(item.isRemoved){
    return <div>R</div>;
}

 return <div className={item.isRemoved ? 'blank': 'child'} onClick={()=> onCardClickHandler(item)}>{item.isOpen && item.value}</div>
}


const GameBoard = () => {
    const deck1 = [...Array(18).keys()].map((item) => item =  item+1);
    const GRID = [...Array(18).keys()].map((item) => item =  item+1).concat(deck1);
    const initialGame = GRID.map((item, id)=> ({id:id, value:item, isOpen:false, isRemoved: false}));
    const [matches, setMatches] = useState<itemProps[]>([]);
    const [gameStatus, updateGameStatus] = useState<itemProps[]>(initialGame);
    
    const onCardClickHandler =(item:itemProps) => {
        if(matches.length ===2) {
            return;
        }
        const newMatches= [...matches, item]
        setMatches(newMatches);
        const newStatus = [...gameStatus].map((nitem) => {
          if(nitem.id===item.id){
            return {...nitem, isOpen:true}
          }
          return nitem;
        });
        updateGameStatus(newStatus);
    }
    const isMatch = ()=> {
        if (matches[0] === matches[1]){
            return true
        }
        return false;
    }
    const getUpdatedStatus = () => {
        let newStatus;
        if (isMatch()){
             newStatus = [...gameStatus].map((item) => item.value === matches[0].value ? {...item, isRemoved:true}: item);
        } else{
            newStatus = [...gameStatus].map((item) => {
              let nItem = {...item};
              matches.forEach((match) => {
                if(item.id=== match.id) {
                    nItem= {...item, isOpen:false}
                }
              }
              )  
              return nItem;

            });
        }
        return newStatus;
    }
    useEffect(()=>{
        if(matches.length ===2) {
            setTimeout(()=>{
                updateGameStatus(getUpdatedStatus());
                setMatches([]);
            },3000)        }
       
    },[gameStatus])
    return <div>
    <h1>Memory Game</h1>
    <div className="parent">
        {gameStatus.map((item, index) => {
            return  item && <Card item={item} onCardClickHandler={onCardClickHandler} key={index}></Card>
        })}
       
    </div>
        </div>
}

export default GameBoard