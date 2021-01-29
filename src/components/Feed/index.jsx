import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress, Box } from '@material-ui/core'
import TweetCard from '../TweetCard'

function Feed({ value, index, screenName }) {
  const [tweets, setTweets] = useState([])
  const [maxId, setMaxId] = useState(null)

  const getTweets = () => {
    axios
      .get(
        `http://localhost:5000/${screenName}${maxId ? '?max_id=' + maxId : ''}`
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

  return (
    <Box
      component="div"
      style={{ marginBottom: 60 }}
      display={value === index ? 'block' : 'none'}
    >
      {tweets ? (
        tweets.map((tweet, idx) => <TweetCard tweet={tweet} key={idx} />)
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

export default Feed
