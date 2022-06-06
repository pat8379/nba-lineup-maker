import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { addPlayersInBulk } from '../features/players/playersSlice';
import { useDispatch } from 'react-redux';
import './App.css';
let firstTimeFetch = true

function App() {
  // const playersList = useSelector(selectPlayers)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      fetch('/player')
      .then(response => response.json())
      .then(data => {
          console.log('received')
          // console.log(data)
          dispatch(addPlayersInBulk(data))
          // console.log(data)
          // dispatch(addPlayers)
      })
      .catch(error => {
          console.log(error)
      })
    }
    if (firstTimeFetch) {
      firstTimeFetch = false
      return
    }
    // console.log(playersList.length === undefined)
    fetchData()
  }, [dispatch])
  return (
    <div className="App">
      <header>
        <h1>NBA Lineup Maker</h1>
      </header>
      <nav>
        <Link className='app-link' to="/">Home</Link> | {' '}
        <Link className='app-link' to="/lineup">Lineups</Link> | {' '}
        <Link className='app-link' to="/players">Players</Link> 
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Only the top 100 players in NBA2K 2021 are provided</p>
        <p>Source Code on <a target="_blank" href>Github</a></p>
      </footer>
    </div>
  );
}

export default App;
