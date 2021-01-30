import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

function Menu({ classes, value, handleChange }) {
  return (
    <AppBar position="fixed">
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Dogfish Head" value={0} index={0} />
        <Tab label="Backpacker Magazine" value={1} index={1} />
      </Tabs>
    </AppBar>
  )
}

export default withStyles(styles)(Menu)
