import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Menu from '../Menu'
import Feed from '../Feed'

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
    if (num === value) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
    <Container maxWidth="sm" style={{ paddingBottom: 40 }}>
      <Menu value={value} scrollTop={scrollTop} handleChange={handleChange} />
      <Feed value={value} index={0} screenName="dogfishbeer" />
      <Feed value={value} index={1} screenName="BackpackerMag" />
    </Container>
  )
}

export default App
