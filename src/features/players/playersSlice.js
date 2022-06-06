import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addPlayersToLineUp } from "../lineup/lineUpSlice";

export const fetchAllPlayers = createAsyncThunk('players/fetchPlayers', async ()=> {
    const response = await fetch('/player/')
    // console.log('fetchAsync called')
    return await response.json()
})

export const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: {
            // refers to all players used in any lineup
            // 1: {
            //     rank: 1,
            //     player : "Steph Curry",
            //     team: "Warriors",
            //     position: "PG",
            //     rating: 97,
            //     height: "6'3",
            //     description: "Offensive Threat"
            //   },
            // 2: {
            //     rank: 2,
            //     player : "LeBron James",
            //     team: "Lakers",
            //     position: "SF",
            //     rating: 97,
            //     height: "6'9",
            //     description: "2-Way Slashing Playmaker"
            // },
            // 3: {
            //     rank: 3,
            //     player : "Kawhi Leonard",
            //     team: "Clippers",
            //     position: "SF",
            //     rating: 96,
            //     height: "6'7",
            //     description: "2-Way Scoring Machine"
            //     },
            // 4: {
            //     rank: 4,
            //     player : "Giannis Antetokounmpo",
            //     team: "Bucks",
            //     position: "PF",
            //     rating: 96,
            //     height: "6'11",
            //     description: "2-Way Slashing Playmaker"
            //     },
            // 5: {
            //     rank: 5,
            //     player : "Kevin Durant",
            //     team: "Nets",
            //     position: "SF",
            //     rating: 96,
            //     height: "6'10",
            //     description: "2-Way Scoring Machine"
            //     },
            // 6: {
            //     rank: 6,
            //     player : "Nikola Jokic",
            //     team: "Nuggets",
            //     position: "C",
            //     rating: 96,
            //     height: "7'0",
            //     description: "Mid-Range Maestro"
            //     }
            // 'Steph Curry':{
            //     playersName: 'Steph Curry',
            //     height: "6'3",
            //     rating: 97,
            //     position: 'Guard',
            //     team: 'GSW'
            // },
            // 'Robert Williams':{
            //     playersName: 'Robert Williams',
            //     height: "6'8",
            //     rating: 80,
            //     position: 'Forward',
            //     team: 'CELTICS'
            // },
            // 'Grant Hill':{
            //     playersName: 'Grant Hill',
            //     height: "6'0",
            //     rating: 85,
            //     position: 'Guard',
            //     team: 'JAZZ'
            // },
            // 'Giannis Antetokoumpo':{
            //     playersName: 'Giannis Antetokoumpo',
            //     height: "6'9",
            //     rating: 90,
            //     position: "Center",
            //     team: "BUCKS"
            // },
            // 'DeMar DeRozan': {
            //     playersName: 'DeMar DeRozan',
            //     height: "6'8",
            //     rating: 92,
            //     position: "Guard",
            //     team: "BULLS"
            // }
        },
        status: 'idle',
        error: null
    },
    reducers: {
        addPlayers: (state,action) => {
            const {rank} = action.payload
            state.players[rank] = action.payload
        }
    },
    extraReducers: {
        [fetchAllPlayers.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchAllPlayers.fulfilled]: (state,action) => {
            state.status = 'succeeded'
            state.players = action.payload
        },
        [fetchAllPlayers.rejected]: (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const addPlayersToLineUpFunction = (playersToAdd) => {
    const {playersName, lineUpIds} = playersToAdd
    return (dispatch) => {
        dispatch(playersSlice.actions.addPlayers(playersToAdd))
        lineUpIds.forEach(lineUpId => {
            addPlayersToLineUp({playersName: playersName, lineUpId: lineUpId })
        })
    }
}

export const addPlayersInBulk = (obj) => {
    return (dispatch) => {
        Object.keys(obj).forEach((id) => {
            dispatch(playersSlice.actions.addPlayers(obj[id]))
        })
    }
    
}

export default playersSlice.reducer
export const {addPlayers} = playersSlice.actions
export const selectPlayers = (state) => state.players.players
export const selectStatus = (state) => state.status

/* playersName = {
    playersName: string, height: str, rating: num, position: str, team: str
}*/