const API_URL = process.env.REACT_APP_API_URL

export const twitterAccounts = ['dogfishbeer', 'foundersbrewing']

export const fetchTweets = async (screenName, id) => {
  try {
    const getRequest = await fetch(
      `${API_URL}${screenName}${id ? '?max_id=' + id : ''}`
    )
    const data = await getRequest.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
