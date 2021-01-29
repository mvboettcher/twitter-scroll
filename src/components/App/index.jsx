import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, CircularProgress } from '@material-ui/core'

// import Menu from '../Menu'
// import Feed from '../Feed'
import TweetCard from '../TweetCard'

function App() {
  const [value, setValue] = useState(0)
  const [tweets, setTweets] = useState([])
  const [maxId, setMaxId] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const getTweets = () => {
    axios
      .get(
        `http://localhost:5000/dogfishbeer${maxId ? '?max_id=' + maxId : ''}`
      )
      .then((res) => {
        let data = res.data
        if (maxId) {
          data = res.data.slice(1)
        }

        const newMaxId = data[data.length - 1].id

        setTweets([...tweets, ...data])
        setMaxId(newMaxId)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getTweets()
  }, [])

  if (maxId) {
    console.log(maxId)
  }

  return (
    <Container maxWidth="sm" style={{ paddingBottom: 60 }}>
      {tweets ? (
        tweets.map((tweet, idx) => <TweetCard tweet={tweet} key={idx} />)
      ) : (
        <CircularProgress />
      )}
      {/* <Menu value={value} handleChange={handleChange} /> */}
      {/* <Feed value={value} index={0} content="Twitter account #1" /> */}
      {/* <Feed value={value} index={1} content="Twitter account #2" /> */}
    </Container>
  )
}

export default App
