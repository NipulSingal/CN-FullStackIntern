import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import Grid from '@material-ui/core/Grid'
// import Upcoming from './components/upcoming'

import { callApi } from '../utils/api'

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  tabs: {
    display: 'flex'
  },
  eventCategories: {
    padding: '20px 18px'
  }
}))
export default function App (props) {
  const classes = useStyles()
  console.log(props.match);
  // const [eventCategory] = 'ALL_EVENTS'
  // const [value] = ''

  // const eventBar = [
  //   {
  //     name: 'All Events',
  //     route: `/events?event_category=${eventCategory}`,
  //     Icon: 'https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg'
  //   },
  //   {
  //     name: 'Webinars',
  //     route: `/events?event_category=${eventCategory}`,
  //     Icon: 'https://www.codingninjas.com/assets-landing/images/webinars-unselected.svg'
  //   },
  //   {
  //     name: 'Coding Events',
  //     route: `/events?event_category=${eventCategory}`,
  //     Icon: 'https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg'
  //   },
  //   {
  //     name: 'Bootcamp Events',
  //     route: `/events?event_category=${eventCategory}`,
  //     Icon: 'https://www.codingninjas.com/assets-landing/images/bootcamp-events-unselected.svg'
  //   },
  //   {
  //     name: 'Workshop',
  //     route: `/events?event_category=${eventCategory}`,
  //     Icon: 'https://www.codingninjas.com/assets-landing/images/workshop-unselected.svg'
  //   },
  // ]

  const downloadData = () => {
    callApi(`https://api.codingninjas.com/api/v3/event_tags`)
      .then(e => {
        if(e.success){
          console.log(e);
        }
      })
  }
  React.useEffect(() => downloadData())
  return (
    <div className={classes.app}>
      {/* <Grid container>
        <Grid item xs={12} md={4}><Upcoming/></Grid>
        <Grid item xs={12} md={4}><Upcoming/></Grid>
      </Grid> */}
      {/* <div className={clsx(classes.tabs, classes.eventCategories)}>
        <Tabs
          value={value}
          // onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {eventBar.map(e => {
            return(
              <><Tab label={e.name} /></>
            )
          })}
        </Tabs>
      </div> */}
    </div>
  )
}
