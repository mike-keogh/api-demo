import React from 'react'

import People from './People'
import Planets from './Planets'
import Films from './Films'
import {people} from '../api'

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>Star Wars development has begun!</h1>
          <div>
            <People />
            <Planets />
            <Films />
          </div>
      </div>
    )
  }
}

export default App
