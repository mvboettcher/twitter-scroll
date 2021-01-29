import React, { useState } from 'react'
import { Container } from '@material-ui/core'

import Menu from '../Menu'
import Feed from '../Feed'

function App() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="sm" style={{ paddingBottom: 60 }}>
      <Menu value={value} handleChange={handleChange} />
      {value === 0 && <Feed screenName="dogfishbeer" />}
      {value === 1 && <Feed screenName="BackpackerMag" />}
    </Container>
  )
}

export default App
