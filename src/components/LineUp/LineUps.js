import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLineUp, selectLineUp } from '../../features/lineup/lineUpSlice'
import { selectPlayers } from '../../features/players/playersSlice'
import EachLineUp from './LineUp'
import './LineUps.css'

export default function LineUp() {
    const lineUps = useSelector(selectLineUp)
    const players = useSelector(selectPlayers)
    const totalLineUp = Object.keys(lineUps).length + 1
    const dispatch = useDispatch()

    const [lineUpName, setLineUpName] = useState()
    const [playersToAdd, setPlayersToAdd] = useState({0: null, 1: null, 2: null, 3: null, 4:null})
    const [searchLineUp, setSearchLineUp] = useState()
    
    const handlePositionChange = (padd,value) => {
        setPlayersToAdd({...playersToAdd, [Number(padd)]:value})
    }

    // useEffect(() => {
    //     console.log('first')
    //     // return
    // },[searchLineUp])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Object.values(playersToAdd).includes(null) && lineUpName !== undefined) {
            if (Object.values(playersToAdd).length === new Set(Object.values(playersToAdd)).size){
                dispatch(addLineUp({
                    playersInLineUp: Object.values(playersToAdd),
                    lineUpName: lineUpName,
                    lineUpId: totalLineUp
                }))
                setLineUpName()
                setPlayersToAdd({0: null, 1: null, 2: null, 3: null, 4:null})
                document.getElementById('lineups-formbox').reset()
            } else {
                alert('Duplicates found')
            }
        } else {
            alert('Choose 5 Players')
        }
        
    }

    return (
        <div className='lineups'>
            <div className='lineups-banner'>
                <h3>Lineups</h3>
                <input id='search-lineup' placeholder='Search Lineup' value={searchLineUp} onChange={(e) => setSearchLineUp(e.target.value)}/>
            </div>
            {searchLineUp ? Object.keys(lineUps).filter((n) => {return lineUps[n].lineUpName.toLowerCase().includes(searchLineUp.toLowerCase())
            }).map((b) => (<EachLineUp lDesc={b}/>)) : Object.keys(lineUps).map((n)=> (
                <EachLineUp lDesc={n}/>
            ))}
            
            <div className='lineups-form'>
                <h3>Add Lineup</h3>
                <form id="lineups-formbox" onSubmit={handleSubmit}>
                    <input required placeholder='Line Up Name' value={lineUpName} onChange={(e) => setLineUpName(e.target.value)}/>
                    {Object.keys(playersToAdd).map((padd) => (
                        <select defaultValue="default" required onChange={(e) => (handlePositionChange(padd,e.target.value))}>
                            <option value="default" disabled hidden>Choose a Player</option>
                            {Object.keys(players).map((ap) => (
                                <option key={ap} value={ap}>{players[ap].player}</option>
                            ))}
                        </select>
                    ))}
                    
                    <button>Create line up</button>
                </form>
            </div>
            
        </div>
    )
}