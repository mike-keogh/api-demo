import React from 'react'


export default class PlanetInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        planet: props.planet,
        showPlanetDetails: false
    }
  }

  togglePlanets() {
    this.setState(
      {showPlanetDetails: !this.state.showPlanetDetails}
    )
  }

  formatNumber(number) {
    if (isNaN(number)) return number
    var a = number.split('')
    let l = a.length
    a.forEach((n, i)=>((((i-l)*-1)%3)==0)&&i!=0?a.splice(i-l,0,','):'')
    return a.join('')
  }

  render() {
    let {planet, showPlanetDetails} =this.state
    this.formatNumber('6000000')
    return (
      <div>
        <li onClick={(e) => this.togglePlanets()}><a href='#'>{planet.name}</a></li>
        {showPlanetDetails && <div className='planetDetails'>
          <h3>Population: {this.formatNumber(planet.population)}</h3>
          <h3>Size: {planet.diameter}</h3>
          <h3>Gravity: {planet.gravity}</h3>
          <h3>Climate: {planet.climate}</h3>
        </div>}

      </div>

    )
  }
}
