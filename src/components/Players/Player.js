import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectLineUp, addPlayersToLineUp } from '../../features/lineup/lineUpSlice'
import { selectPlayers } from '../../features/players/playersSlice'
import './Player.css'

export default function Player({pDesc}){
    const playersList = useSelector(selectPlayers)
    const {player,height,rating,position,team} = playersList[pDesc]
    const lineUps = useSelector(selectLineUp)
    const dispatch = useDispatch()
    const [lineUpValue, setLineUpValue] = useState() //value will be the ID of lineup
    const [playerToReplace, setPlayerToReplace] = useState()
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (lineUpValue !== undefined && playerToReplace !== undefined) {
            if (!lineUps[lineUpValue].playersInLineUp.includes(player)){
                dispatch(addPlayersToLineUp({
                    lineUpId: lineUpValue,
                    playersId: pDesc,
                    playerToReplace: playerToReplace
                }))
                navigate("/lineup")
            } else {
                alert('Duplicates in lineup found, choose a different player')
            }            
        } 
    }

    const handleLineUpChange = (e) => {
        const temp = e.target.value
        setLineUpValue(temp)
    }
    return (
        <div className='player'>
            <p>Name: {player}</p>
            <p>Height: {height}</p>
            <p>Rating: {rating}</p>
            <p>Position: {position}</p>
            <p>Team: {team}</p>
            <form id='add-to-lineup-form' onSubmit={handleSubmit}>
                <select defaultValue="default" onChange={handleLineUpChange}>
                    <option value="default" disabled hidden>Add to Line Up</option>
                    {Object.keys(lineUps).map((n) => (
                        <option key={n} value={n}>{lineUps[n].lineUpName}</option>
                    ))}
                </select>
                {lineUpValue ?
                <select className="player-form-replace" defaultValue="default" onChange={(e) => setPlayerToReplace(e.target.value)} required>
                    <option value="default" disabled hidden>Player to Replace</option>
                    {lineUps[lineUpValue].playersInLineUp.map((b) => (
                        <option key={b} value={b}>{playersList[b].player}</option>
                    ))}
                </select> :
                <select className="player-form-replace" defaultValue="default" onChange={(e) => setPlayerToReplace(e.target.value)} disabled>
                    <option value="default" disabled hidden>Player to Replace</option>
                </select>
                }
                
                {playerToReplace?<button>Change Line Up</button> : <button disabled>Change Line Up</button>}
            </form>
        </div>
    )
}
// ternary condition