import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import users from '../users.json'

function FavoriteGame ({ match: {params: {name}}}) {
  return (
    <h3>{users[name].faveVideoGame}</h3>
  )
}

function Age ({ match: {params: {name}}}) {
  return (
    <h3>{users[name].age}</h3>
  )
}

function Hair ({ match: {params: {name}}}) {
  return (
    <h3>{users[name].hair}</h3>
  )
}

export default function User ({ match: {params: {name}}}) {
  console.log(users)
  const user = users[name]
  return (
    <div>
      <h2>{name}'s page!</h2>
      {!user ? <div>No user named {name}!</div> :
        <Router>
          <div>
            <ul>
              <li><Link to={`/users/${name}/age`}>Age</Link></li>
              <li><Link to={`/users/${name}/hair`}>Hair</Link></li>
              <li><Link to={`/users/${name}/video-game`}>Favorite Video Game</Link></li>
            </ul>

            <Route path="/users/:name/video-game" component={FavoriteGame}/>
            <Route path="/users/:name/age" component={Age}/>
            <Route path="/users/:name/hair" component={Hair}/>
          </div>
        </Router>
      }
    </div>
  )
}
