import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Menu from '../Menu'
import Feed from '../Feed'
import TweetCard from '../TweetCard'
import data from '../../data'

function App() {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Container maxWidth="sm" style={{ paddingBottom: 40 }}>
      <TweetCard tweet={data} />
      {/* <Menu value={value} handleChange={handleChange} />
      {value === 0 && <Feed screenName="dogfishbeer" />}
      {value === 1 && <Feed screenName="BackpackerMag" />} */}
    </Container>
  )
}

export default App
