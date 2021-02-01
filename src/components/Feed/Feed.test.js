import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Feed from './index'
import TweetCard from '../TweetCard'
import testData from '../../testData'

const mockTweetData = testData

describe('Feed', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockTweetData),
      })
    )
  })

  test('test fetch and render tweets', async () => {
    render(<Feed />)
  })
})
