import React from 'react'

import {films} from '../api'
import FilmCrawl from './FilmCrawl'


export default class Films extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      showVisible: false
    }
  }

  componentDidMount () {
    films('films', (films) => {
      this.setState({films: films.results})
    })
  }

  toggleShowFilms() {
    this.setState({showVisible: !this.state.showVisible})
  }

  render() {
    let {films, showVisible} = this.state
    const renderFilm = (film, i) => (<FilmCrawl key={i} film={film}/>)
    const renderFilmList = films => films.map(renderFilm)
    return (
      <div>
        <h3><a href="#" onClick={(e) => this.toggleShowFilms()}>Films</a></h3>
        {showVisible && <div><ul>{renderFilmList(films)}</ul></div>}
      </div>


    )
  }
}
