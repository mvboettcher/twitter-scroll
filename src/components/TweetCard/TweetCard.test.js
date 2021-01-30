import { render } from '@testing-library/react'
import TweetCard from './index'

describe('TweetCard', () => {
  test('render TweetCard component', async () => {
    render(<TweetCard />)
  })
})
