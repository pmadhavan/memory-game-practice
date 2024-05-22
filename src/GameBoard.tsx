import { useState } from "react";

interface CardProps {
value: number;
}
const Card = ({value}:CardProps) => {
    const [canShow, setCanShow] = useState(false);
    return <div className="child" onClick={()=> setCanShow(true)}>{canShow && value}</div>
}

const GameBoard = () => {
    const deck1 = [...Array(18).keys()].map((item) => item =  item+1);
const GRID = [...Array(18).keys()].map((item) => item =  item+1).concat(deck1);

    return <div>
    <h1>Memory Game</h1>
    <div className="parent">
        {GRID.map((item) => {
            return  <Card value={item}></Card>
        })}
       
    </div>
        </div>
}

export default GameBoard