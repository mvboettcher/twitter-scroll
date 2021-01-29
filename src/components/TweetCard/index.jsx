import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from '@material-ui/core'
import { displayPublishedDate, linkChecker } from '../../helpers'

export default function TweetCard({ tweet }) {
  const classes = useStyles()
  const tweetBody = linkChecker(tweet.full_text)
  const image =
    tweet.entities && tweet.entities.media
      ? tweet.entities.media.filter((m) => m.type === 'photo')[0]
      : null
  const video =
    tweet.extended_entities && tweet.extended_entities.media
      ? tweet.extended_entities.media.filter((m) => m.type === 'video')[0]
      : null

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container className={classes.header}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.userName}>
              {tweet.user.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
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
          </Grid>
        </Grid>
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
        {/* DISPLAY MEDIA (IF AVAILABLE) */}
        <CardMedia className={classes.mediaContainer}>
          {video && (
            <ReactPlayer
              style={{ borderRadius: 8 }}
              playing
              loop
              muted
              url={video.video_info.variants[0].url}
            />
          )}
          {!video && image && (
            // <Paper className={classes.imageContainer}>
            <img
              className={classes.media}
              src={image.media_url}
              height={image.sizes.medium.h * 0.5}
              alt=""
            />
            // </Paper>
          )}
        </CardMedia>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  header: {
    paddingBottom: 10,
  },
  userName: {
    paddingRight: 4,
    fontWeight: 'bold',
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
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  mediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    paddingTop: 16,
  },
  media: {
    maxHeight: 400,
    borderRadius: 8,
  },
})
