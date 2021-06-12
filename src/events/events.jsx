import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Upcoming from './components/upcoming'
// import Archived from './components/archived'

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  eventBody: {
    display: 'flex',
    margin: '24px'
  },
  eventCardsContainer: {
    width: '100%'
  },
  eventsContainer: {
    // flexDirection: 'column'
  }
}))
export default function Events (props) {
  const classes = useStyles()
  const {events, tags} = props
  console.log(events)
  console.log(tags)

  return (
    <div className={classes.app}>
      <div className={classes.eventBody}>
        <div className={classes.eventCardsContainer}>
          <Grid container className={classes.eventsContainer}>
            {events.map(e => {
              return(
                <Grid key={e} item xs={12} md={5}>
                  <Upcoming key={e} event={e} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  )
}
