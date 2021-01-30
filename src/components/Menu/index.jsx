import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

function Menu({ value, handleChange }) {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Dogfish Head" index={0} />
        <Tab label="Backpacker Magazine" index={1} />
      </Tabs>
    </AppBar>
  )
}

export default withStyles(styles)(Menu)
