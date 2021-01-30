import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Box,
} from '@material-ui/core'
import styles from './styles'
import { displayPublishedDate, linkChecker } from '../../helpers'

function TweetCard({ classes, tweet }) {
  if (tweet) {
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
              <img
                className={classes.media}
                src={image.media_url}
                height={image.sizes.medium.h}
                alt=""
              />
            )}
          </CardMedia>
        </CardContent>
      </Card>
    )
  } else {
    return <Box display="none" />
  }
}

export default withStyles(styles)(TweetCard)
