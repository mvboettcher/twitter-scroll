import dayjs from 'dayjs'

export function displayPublishedDate(date) {
  const now = dayjs()
  const createdAt = dayjs(date)
  const hourDiff = now.diff(createdAt, 'hour')
  const minDiff = now.diff(createdAt, 'minute')

  if (hourDiff < 1) {
    return `${minDiff}min`
  } else if (hourDiff < 24) {
    return `${hourDiff}h`
  } else {
    return dayjs(date).format('MMM DD')
  }
}

export function tweetParser(text, range) {
  const textToCheck = text.slice(range[0], range[1] + 1)
  const reUrl = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  const reHash = /(?:\s|^)?#[A-Za-z0-9\-\.\_]+(?:\s|$)/g
  const reMention = /([@][\w_-]+)/g

  const textArray = textToCheck.split(' ').map((t) => {
    if (t.match(reUrl)) {
      return { type: 'link', text: t + ' ' }
    } else if (t.match(reHash)) {
      return {
        type: 'hashtag',
        url: `https://twitter.com/hashtag/${t.slice(1)}?src=hashtag_click`,
        text: t + ' ',
      }
    } else if (t.match(reMention)) {
      return {
        type: 'mention',
        url: `https://twitter.com/${t.slice(1)}`,
        text: t + ' ',
      }
    } else {
      return { type: 'text', text: t + ' ' }
    }
  })

  return textArray
}
