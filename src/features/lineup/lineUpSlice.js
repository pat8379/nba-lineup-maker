import { createSlice } from "@reduxjs/toolkit";

export const lineUpSlice = createSlice({
    name: 'lineUp',
    initialState: {
        lineUp: {
            1: {
                playersInLineUp: [1,2,3,4,5],
                lineUpName: "First Line Up",
                lineUpId: 1
            }
        }
    },
    reducers: {
        addLineUp: (state,action) => {
            const {lineUpId} = action.payload
            if (Object.keys(state.lineUp).every((n) => {
                return state.lineUp[n].lineUpName !== action.payload.lineUpName
            })) {
                state.lineUp[lineUpId] = action.payload
            } else {
                console.log('Line Up name already exists')
            }
        },
        addPlayersToLineUp: (state,action) => {
            const {lineUpId, playersId, playerToReplace} = action.payload
            const index = state.lineUp[lineUpId].playersInLineUp.indexOf(playerToReplace)
            state.lineUp[lineUpId].playersInLineUp[index] = playersId
        }
    }
})

export default lineUpSlice.reducer;
export const {addLineUp, addPlayersToLineUp} = lineUpSlice.actions
export const selectLineUp = (state) => state.lineUp.lineUp

/* lineUp: {
    playersInLineUp: array, lineUpName: string, lineUpId: number, averageRating: number (cancelled)
}*/