import React from 'react'


export default class FilmCrawl extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        filmCrawl: props.film,
        showFilmCrawl: false
      }
  }

  toggleSelected(){
    this.setState({showFilmCrawl: !this.state.showFilmCrawl})
  }

  render() {
    let {filmCrawl, showFilmCrawl} = this.state

    return (
      <div>
        <li onClick={(e) => this.toggleSelected()}><a href='#'>{filmCrawl.title}</a></li>
        {showFilmCrawl && <div>
          <p>{filmCrawl.opening_crawl}</p>
        </div>}
      </div>
    )
  }
}
