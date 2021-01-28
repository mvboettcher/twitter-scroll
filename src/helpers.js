import dayjs from 'dayjs'

export function displayPublishedDate(date) {
  const now = dayjs()
  const createdAt = dayjs(date)
  const diff = now.diff(createdAt, 'hour')

  if (diff < 24) {
    return `${diff}h`
  } else {
    return dayjs('2019-01-25').format('MMM d')
  }
}
