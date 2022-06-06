import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from "./Player";
import { addPlayers, selectPlayers} from "../../features/players/playersSlice";
import './Players.css'

const teamList = ['GSW','NUGGETS','BULLS','CELTICS','BUCKS','JAZZ','HEAT']
export default function Players() {
    const [playerName,setPlayerName] = useState()
    const [height,setHeight] = useState()
    const [rating, setRating] = useState()
    const [position, setPosition] = useState()
    const [team, setTeam] = useState()

    const [searchPlayer, setSearchPlayer] = useState()
    const [searchTeam, setSearchTeam] = useState()
    const [searchPosition, setSearchPosition] = useState()

    const playersList = useSelector(selectPlayers)
    // const fetchStatus = useSelector(selectStatus)
    const dispatch = useDispatch()

    // const handleFetchClick  = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:4000/player')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)

    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(rating) < 101 && Number(rating) > 0){
            const newLength = Object.keys(playersList).length + 1
            dispatch(addPlayers({
                player: playerName,
                rank: newLength,
                height: height,
                rating: Number(rating),
                position: position,
                team: team
            }))
            // console.log('submitted')
            setPlayerName()
            setHeight()
            setRating()
            setPosition()
            setTeam()
            document.getElementById('add-player-form').reset()
            // document.querySelectorAll('.add-player-input').value = ''
        } else {
            alert("Rating ain't right")
        }
        
    }
    return (
        <div className="players">
            <div className="players-banner">
                <h3>Players</h3>
                <div className="players-banner-search">
                    <input placeholder="Search Player" id="search-player" value={searchPlayer} onChange={(e) => setSearchPlayer(e.target.value)}/>
                    <input placeholder="Search Team" id="search-team" value={searchTeam} onChange={(e) => setSearchTeam(e.target.value)}/>
                    <input placeholder="Search Position" id="search-position" value={searchPosition} onChange={(e) => setSearchPosition(e.target.value)}/>
                </div>
            </div>
            <div className="players-form">
                <h3>Add Custom Player</h3>
                <form id="add-player-form" onSubmit={handleSubmit}>
                    <input className="add-player-input" required placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                    <input className="add-player-input" required placeholder="Height" maxLength="4" value={height} onChange={(e)=> setHeight(e.target.value)}/>
                    <input className="add-player-input" required placeholder="Rating" value={rating} type="number" maxLength="2" onChange={(e) => setRating(e.target.value)}/>
                    <select required placeholder="Position" onChange={(e) => setPosition(e.target.value)} defaultValue="default">
                        <option value="default" disabled hidden>
                            Choose a Position
                        </option>
                        <option key="Guard" value="Guard">Guard</option>
                        <option key="Center" value="Center">Center</option>
                        <option key="Forward" value="Forward">Forward</option>
                    </select>
                    <select required defaultValue="default" onChange={(e) => setTeam(e.target.value)}>
                        <option value="default" disabled hidden>
                            Choose a Team
                        </option>
                        {teamList.map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    <button type="submit">Add Player</button>
                </form>
            </div>
            <div className="players-list-container">
                <div className="players-list">
                    {searchPlayer ? Object.keys(playersList).filter((n) => {return playersList[n].player.toLowerCase().includes(searchPlayer.toLowerCase())
                    }).map((player) => (<Player pDesc={player}/>)) : Object.keys(playersList).map((player) => (
                        <Player pDesc={player}/>
                    )
                    )}
                    
                </div>
            </div>
            
            {/* <div>
                <button onClick={handleFetchClick}>Fetch</button>
            </div> */}
            
        </div>
    )
}

