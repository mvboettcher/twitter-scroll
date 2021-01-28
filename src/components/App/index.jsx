import React, { useState } from 'react'
import { Container } from '@material-ui/core'

import Menu from '../Menu'
import Feed from '../Feed'
import TweetCard from '../TweetCard'

function App() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="sm">
      <TweetCard />
      {/* <Menu value={value} handleChange={handleChange} /> */}
      {/* <Feed value={value} index={0} content="Twitter account #1" /> */}
      {/* <Feed value={value} index={1} content="Twitter account #2" /> */}
    </Container>
  )
}

export default App
