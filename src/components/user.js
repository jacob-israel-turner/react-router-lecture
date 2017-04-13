import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import users from '../users.json'

const apiKey = "7oJDyRaPmBmshYAu4I7TFWXBw2svp1Yj2yZjsnj4SYjDsmCHTn"

const getUrl = gameId => `https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,url,summary,rating&search=${gameId}`

class FavoriteGame extends React.Component {
  state = {
    game: null
  }

  async componentDidMount() {
    const name = this.props.match.params.name
    const user = users[name]
    const url = getUrl(user.faveVideoGame)
    const headers = {
      "X-Mashape-Key": apiKey,
      "Accept": "application/json"
    }
    const {data: [game]} = await axios.get(url, {headers})
    this.setState({game})
  }

  render() {
    const {game} = this.state
    return !game ? null : (
      <div>
        <h2><a href={game.url} target="_blank">{game.name}</a> - {game.rating}</h2>
        <p>{game.summary}</p>
      </div>
    )
  }
}

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
