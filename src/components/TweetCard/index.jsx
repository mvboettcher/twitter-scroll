import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
  Avatar,
} from '@material-ui/core'
import styles from './styles'
import { displayPublishedDate, tweetParser } from '../../helpers'

function TweetCard({ classes, tweet }) {
  if (tweet) {
    const tweetBody = tweetParser(tweet.full_text, tweet.display_text_range)
    const profileImage = tweet.user.profile_image_url.replace('_normal', '')

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
          <div className={classes.header}>
            <Avatar alt={tweet.user.full_name} src={profileImage} />
            <div>
              <Typography className={classes.userName}>
                {tweet.user.name}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
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
          </div>
          {tweetBody.map((t, idx) => {
            if (t.type === 'link') {
              return (
                <Link
                  key={idx}
                  href={t.text}
                  variant="body2"
                  style={{ fontWeight: 'bold' }}
                >
                  {t.text}
                </Link>
              )
            } else if (t.type === 'hashtag') {
              return (
                <Link
                  key={idx}
                  href={t.url}
                  variant="body2"
                  style={{ fontWeight: 'bold' }}
                >
                  {t.text}
                </Link>
              )
            } else if (t.type === 'mention') {
              return (
                <Link
                  key={idx}
                  href={t.url}
                  variant="body2"
                  style={{ fontWeight: 'bold' }}
                >
                  {t.text}
                </Link>
              )
            } else {
              return (
                <Typography key={idx} variant="body2" component="span">
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
