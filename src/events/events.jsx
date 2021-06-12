import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
import ListItemText from '@material-ui/core/ListItemText'

import { callApi } from '../utils/api'

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  tabs: {
    display: 'flex'
  },
  eventSubCategories: {
    padding: '14px 24px',
    background: '#fafafa',
    marginBottom: '34px',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0'
  },
  nav: {
    fontSize: "16px", 
    fontWeight: 700, 
    paddingRight: "20px", 
    marginRight: 0, 
    display: "flex", 
    alignItems: "center", 
    textAlign: "center",
    cursor: 'pointer'
  },
  navText: {
    fontSize: '16px',
    fontWeight: 700,
    paddingRight: '20px',
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#9e9e9e'
  },
  navSelectedText: {
    fontSize: '16px',
    fontWeight: 700,
    paddingRight: '20px',
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fa7328'
  },
}))
export default function App (props) {
  const classes = useStyles()
  console.log(props.eventCategory);
  const [subEventCategory, setSubEventCategory] = React.useState('Upcoming')

  const subEventBar = [
    {
      name: 'Upcoming'
    },
    {
      name: 'Archived'
    },
    {
      name: 'All Time Favorites',
    }
  ]

  const downloadTags = () => {
    callApi(`https://api.codingninjas.com/api/v3/event_tags`)
      .then(e => {
        if(e.success){
          console.log(e);
        }
      })
  }
  React.useEffect(() => downloadTags())

  const handleChange = (s) => {
    setSubEventCategory(s)
  }
  return (
    <div className={classes.app}>
      <div className={clsx(classes.tabs, classes.eventSubCategories)}>
        <Tabs
          value={subEventCategory}
          variant="scrollable"
          scrollButtons="auto"
        >
          {subEventBar.map(s => {
            return(
              <div key={s.name} onClick={() => handleChange(s.name)} className={classes.nav}>
                {s.name == subEventCategory ? (
                  <>
                    <ListItemText primary={s.name} className={classes.navSelectedText} />
                  </>
                ) : (
                  <>
                    <ListItemText primary={s.name} className={classes.navText} />
                  </>
                )}
              </div>
            )
          })}
            </Tabs>
          </div>

      {/* <Grid container>
        <Grid item xs={12} md={4}><Upcoming/></Grid>
        <Grid item xs={12} md={4}><Upcoming/></Grid>
      </Grid> */}
      
    </div>
  )
}
