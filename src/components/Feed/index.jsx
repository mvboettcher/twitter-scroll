import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import TweetCard from '../TweetCard'

function Feed({ value, index, classes, screenName }) {
  const [tweets, setTweets] = useState([])
  const [maxId, setMaxId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isBottom, setIsBottom] = useState(false)
  const [fetchingMore, setFetchingMore] = useState(false)

  function getTweets() {
    if (maxId) {
      setFetchingMore(true)
    }

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
        setIsBottom(false)
        setFetchingMore(false)
      })
      .catch((err) => console.log(err))
  }

  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight

    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true)
    }
  }

  useEffect(() => {
    getTweets()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isBottom && value === index) {
      getTweets()
    }
  }, [isBottom, value])

  return (
    <Box
      component="div"
      style={{ marginBottom: 60 }}
      display={value === index ? 'block' : 'none'}
    >
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress data-testid="custom-element" color="secondary" />
        </div>
      ) : (
        <div className={classes.feedContainer}>
          {tweets.map((tweet, idx) => (
            <TweetCard tweet={tweet} key={idx} />
          ))}
          <Box
            component="div"
            className={classes.fetchingMore}
            display={fetchingMore ? 'block' : 'none'}
          >
            <CircularProgress color="secondary" />
          </Box>
        </div>
      )}
    </Box>
  )
}

export default withStyles(styles)(Feed)
