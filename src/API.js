import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const fetchTweets = async (screenName, id) => {
  try {
    const getRequest = await axios.get(
      `${API_URL}${screenName}${id ? '?max_id=' + id : ''}`
    )
    const data = await getRequest.data
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
