import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Menu from '../Menu'
import Feed from '../Feed'
import { twitterAccounts } from '../../API'

function App() {
  const [value, setValue] = useState(0)
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  function scrollTop(num) {
    window.scrollTo({ top: 0, behavior: num === value ? 'smooth' : 'auto' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Container maxWidth="sm">
      <Menu value={value} scrollTop={scrollTop} handleChange={handleChange} />
      {twitterAccounts.map((acct, index) => (
        <Feed key={index} value={value} index={index} screenName={acct} />
      ))}
    </Container>
  )
}

export default App
