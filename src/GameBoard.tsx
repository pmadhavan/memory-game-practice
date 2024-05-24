import { useEffect, useState } from "react";

interface itemProps {
    id: number, value: number, isOpen:boolean, isRemoved: boolean
}
interface CardProps {
item: itemProps
onCardClickHandler: (item:itemProps)=> void;
}
const Card = ({item, onCardClickHandler}:CardProps) => {
  if(item.isRemoved){
    return <div></div>;
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
        if (matches[0].value === matches[1].value){
            return true
        }
        return false;
    }
    const getUpdatedStatus = () => {
        let newStatus;
            //  newStatus = [...gameStatus].map((item) => item.value === matches[0].value ? {...item, isRemoved:true}: item);
    
            newStatus = [...gameStatus].map((item) => {
                if(isMatch()){
                   return item.value === matches[0].value ? {...item, isRemoved:true}: item
                }else{
                    let nItem = {...item};
                    matches.forEach((match) => {
                      if(item.id=== match.id) {
                          nItem= {...item, isOpen:false}
                      }
                    }
                    )  
                    return nItem;
                }

            });
    
       return newStatus;
    }
    useEffect(()=>{
        let timerId: number;
        if(matches.length ===2) {
           timerId= setTimeout(()=>{
                updateGameStatus(getUpdatedStatus());
                setMatches([]);
            },3000)        }
            return ()=>{
                clearTimeout(timerId);
            }
       
    },[gameStatus, matches])
    return <div>
    <h1>Memory Game</h1>
    <div className="parent">
        {gameStatus.map((item, index) => {
            return <Card item={item} onCardClickHandler={onCardClickHandler} key={index}></Card>
        })}
       
    </div>
        </div>
}

export default GameBoard