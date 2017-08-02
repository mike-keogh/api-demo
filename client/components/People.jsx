import React from 'react'
import {people} from '../api'
import Character from './Character'

class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      showVisible: false
    }
  }

  selectCharacter(character) {
    this.setState({activeCharacter: character, showCharacterDetails: true})
  }

  toggleShowCharacters(characters) {
    this.setState({
      showVisible: !this.state.showVisible
    })
  }

  componentDidMount() {
    people('people', (characters) => {
      this.setState(
        {characters: characters.results}
      )
    })
  }
  render() {
    let {characters} = this.state
    const renderCharacter = (character, i) => (<Character key={i} character={character} />)
    const renderCharacterList = characters => characters.map(renderCharacter)
    return (
      <div>
        <h3><a href='#' onClick={() => this.toggleShowCharacters()}>Characters</a></h3>

        <ul>{this.state.showVisible && renderCharacterList(characters)}</ul>
      </div>
    )
  }
}

export default People
