import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Paper, Typography, Link } from '@material-ui/core'

import { displayPublishedDate, linkChecker } from '../../helpers'

export default function TweetCard({ tweet }) {
  const classes = useStyles()
  const tweetBody = linkChecker(tweet.full_text)
  const image = tweet.entities.media
    ? tweet.entities.media.filter((m) => m.type === 'photo')[0]
    : null

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.title}>
          <Typography className={classes.userName}>
            {tweet.user.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.screenName}
          >
            {`@${tweet.user.screen_name}`}
          </Typography>
          <Typography color="textSecondary" className={classes.date}>
            {displayPublishedDate(tweet.created_at)}
          </Typography>
        </div>
        {/* DISPLAY TWEET BODY */}
        {tweetBody.map((t, idx) => {
          if (t.type === 'link') {
            return (
              <Link key={idx} href={t.text} variant="body2">
                {t.text}
              </Link>
            )
          } else {
            return (
              <Typography key={idx} variant="body2" component="p">
                {t.text}
              </Typography>
            )
          }
        })}
        {/* DISPLAY IMAGE (IF AVAILABLE) */}
        {image && (
          <Paper className={classes.imageContainer}>
            <img src={image.media_url} height={200} alt="" />
          </Paper>
        )}
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 40,
  },
  title: {
    display: 'flex',
  },
  userName: {
    fontWeight: 'bold',
    paddingRight: 4,
  },
  screenName: {
    alignSelf: 'center',
  },
  date: {
    paddingLeft: 4,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#333',
    marginTop: 10,
    borderRadius: 8,
  },
})
