import dayjs from 'dayjs'

export function displayPublishedDate(date) {
  const now = dayjs()
  const createdAt = dayjs(date)
  const diff = now.diff(createdAt, 'hour')

  if (diff < 24) {
    return `${diff}h`
  } else {
    return dayjs(date).format('MMM DD')
  }
}

export function linkChecker(textToCheck) {
  const expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi
  const regex = new RegExp(expression)
  const splitText = []
  let match = ''
  let startIndex = 0

  while ((match = regex.exec(textToCheck)) != null) {
    splitText.push({
      text: textToCheck.substr(startIndex, match.index - startIndex),
      type: 'text',
    })

    let cleanedLink = textToCheck.substr(match.index, match[0].length)
    splitText.push({ text: cleanedLink, type: 'link' })

    startIndex = match.index + match[0].length
  }

  if (startIndex < textToCheck.length) {
    splitText.push({ text: textToCheck.substr(startIndex), type: 'text' })
  }

  return splitText
}
