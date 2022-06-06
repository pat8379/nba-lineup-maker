import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(){
    return (
        <div>
            <p>Welcome to NBA Lineup Maker</p>
            <p>Head over to <Link className='home-link' to="/lineup">Lineup</Link> section to create different lineups</p>
            <p>A list of players are provided in the <Link className='home-link' to="/players">Players</Link> section where you can edit lineups or add a custom player</p>

        </div>    
    )
}