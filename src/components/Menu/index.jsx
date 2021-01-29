import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'

function Menu({ value, handleChange }) {
  return (
    <AppBar position="fixed">
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Dogfish Head" index={0} />
        <Tab label="Backpacker Magazine" index={1} />
      </Tabs>
    </AppBar>
  )
}

export default Menu
