import React from 'react'

export default class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      character: props.character,
      showCharacterDetails: false
    }
  }
  toggleSelected() {
    this.setState({showCharacterDetails: !this.state.showCharacterDetails})
  }
  render() {
    let {character, showCharacterDetails} = this.state
    let {name, height} = character
    return (
      <div>
        <li onClick={(e) => this.toggleSelected()}><a href="#" >{name}</a></li>
        {showCharacterDetails && <div className="additionalDetails">
          <h3>height: {height} cm</h3>
        </div>}
      </div>
    )
  }
}
