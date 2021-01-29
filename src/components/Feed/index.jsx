import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TweetCard from '../TweetCard'

function Feed({ screenName }) {
  const classes = useStyles()

  const [tweets, setTweets] = useState([])
  const [maxId, setMaxId] = useState(null)
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getTweets()
  }, [])

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    )
  } else {
    return (
      <div className={classes.feedContainer}>
        {tweets.map((tweet, idx) => (
          <TweetCard tweet={tweet} key={idx} />
        ))}
      </div>
    )
  }
}

const useStyles = makeStyles({
  loading: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedContainer: {
    paddingTop: 60,
  },
})

export default Feed
