export const initialState ={
    activeRoom:null,
}

function reducer(state,action) {
        switch (action.type) {
            case "ACTIVE_ROOM":
               return{
                   ...state,
                activeRoom : action.roomInfo
               }
               
        
            default:
                return{
                    state
                }
        }
}

export default reducer