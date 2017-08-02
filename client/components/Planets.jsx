import React from 'react'
import {planets} from '../api'
import PlanetInfo from './PlanetInfo'

export default class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      showVisible: false
    }
  }

  componentDidMount() {
    planets('planets', (planets) => {
      this.setState(
        {planets: planets.results}
      )
    })
  }

  toggleShowPlanets() {
    this.setState(
      {showVisible: !this.state.showVisible}
    )
  }

  render() {
    const renderPlanet = (planet, i) => (<PlanetInfo key={i} planet={planet} />)
    const renderPlanetList = planets => planets.map(renderPlanet)
    let {planets} = this.state
    return (
      <div>
        <h3><a href='#' onClick={() => this.toggleShowPlanets()}>Planets</a></h3>
        <ul>{this.state.showVisible && renderPlanetList(planets)}</ul>
      </div>
    )
  }
}
