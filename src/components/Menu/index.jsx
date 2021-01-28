import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'

function Menu({ value, handleChange }) {
  return (
    <>
      <AppBar position="fixed">
        <Tabs centered value={value} onChange={handleChange}>
          <Tab label="Item One" index={0} />
          <Tab label="Item Two" index={1} />
        </Tabs>
      </AppBar>
    </>
  )
}

export default Menu
