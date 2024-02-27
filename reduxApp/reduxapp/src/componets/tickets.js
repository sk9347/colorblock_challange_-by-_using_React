import { useDispatch, useSelector } from "react-redux"
import { buTickets, cancelTickets, holdTickets } from "./action"


const Tickets=()=>{

    const reduxstate=useSelector(state=>state.moviedata)//to importing state from reducer
    console.log(reduxstate)
    

    const ticketdispatch=useDispatch()//to importing actions
  

    const buyhandler=()=>{
    ticketdispatch(buTickets())
    }

    const cancelTicket=()=>{
        ticketdispatch(cancelTickets())
    }
     
    const holdhadlar=()=>{
        ticketdispatch(holdTickets())
    }


    return(
        <>

        <h1>Tickets booking</h1>
        <h1>totaltickets;{reduxstate.totalTickets}</h1>
        <h1>filledtickets:{reduxstate.filledTickets}</h1>
        <h1>unfilledTickets:{reduxstate.unfilledTickets}</h1>
        <h1>hold:{reduxstate.holdTickets}</h1>

        <button onClick={buyhandler}>buy tickets</button>
        <button onClick={cancelTicket}>cancelTicket</button>
        <button onClick={holdhadlar}> holdTickets</button>
     </>
    )
}
export default Tickets