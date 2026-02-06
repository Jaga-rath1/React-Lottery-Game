import { useState } from "react";
import { GetRandomTkt,Total } from "./Helper.Js";
import "./Lottery.css";
export default function Lottery(){
    let[Ticket,SetTicket] = useState(GetRandomTkt(3));
    let WinningTkt = Total(Ticket)===15;
    let GenerateTkt = (()=>{
        SetTicket(GetRandomTkt(3));
    })
    
    return(
        <>
        <h2>Lottery Game Using React</h2>
        <br />
        <br />
        <div className="tkt">
        <div className="tktnum">
            <span>{Ticket[0]}</span>
            <span>{Ticket[1]}</span>
            <span>{Ticket[2]}</span>
        </div>
        </div>
        <br />
        <br />
        <p>{WinningTkt && "Congratulations You Won"}</p>
        <br />
        <br />
        <br />
        <button onClick={GenerateTkt}>Generate Ticket</button>

        </>
    )
}