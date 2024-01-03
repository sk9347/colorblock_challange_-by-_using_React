

const intialState_tickets={
    totalTickets:100,
    filledTickets:50,
    unfilledTickets:50,
    holdTickets:1

}

export const ReducerFun=(state=intialState_tickets,action)=>{

    switch(action.type){
        case("BUY"):
        return {...state,filledTickets:state.filledTickets+1,unfilledTickets:state.unfilledTickets-1}
        
        case("CANCEL"):
        return {...state,unfilledTickets:state.unfilledTickets+1,filledTickets:state.filledTickets-1}

        case("HOLD"):
        return {...state,holdTickets:state.holdTickets+1}

        default:
            return state
    }

}