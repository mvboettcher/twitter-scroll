import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { twitterAccounts } from '../../API'
import TwitterIcon from '@material-ui/icons/Twitter'

function Menu({ value, handleChange, scrollTop }) {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
      <Tabs centered value={value} onChange={handleChange}>
        {twitterAccounts.map((acct, index) => (
          <Tab
            icon={<TwitterIcon style={{ color: '#90caf9' }} />}
            key={index}
            label={`@${acct}`}
            index={index}
            onClick={() => scrollTop(index)}
          />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default withStyles(styles)(Menu)
