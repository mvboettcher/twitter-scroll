import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Paper, Typography } from '@material-ui/core'

import { displayPublishedDate } from '../../helpers'
import data from '../../data'

export default function TweetCard() {
  const classes = useStyles()
  const image = data.entities.media.filter((m) => m.type === 'photo')[0]

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.title}>
          <Typography className={classes.userName}>{data.user.name}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.screenName}
          >
            {`@${data.user.screen_name}`}
          </Typography>
          <Typography color="textSecondary" className={classes.date}>
            {displayPublishedDate(data.created_at)}
          </Typography>
        </div>
        <Typography variant="body2" component="p">
          {data.full_text}
        </Typography>
        {image && (
          <Paper className={classes.imageContainer}>
            <img
              src={image.media_url}
              placeholder={
                <h2 style={{ fontWeight: 'bold', color: 'white' }}>picture</h2>
              }
              height={200}
            />
          </Paper>
        )}
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 60, //
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
