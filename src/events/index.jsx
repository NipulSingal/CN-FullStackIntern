import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'

import EventsWrapper from './events'
import Footer from './footer'
import { callApi } from '../utils/api'

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  header: {
    height: '245px',
    paddingTop: '73px',
    paddingLeft: '65px',
    boxSizing: 'border-box',
    backgroundImage: `url("https://files.codingninjas.in/0000000000002471.png")`
  },
  textHeader: {
    margin: 0,
    fontSize: '60px',
    color: '#fff',
    fontWeight: 700
  },
  subHeader: {
    color: '#fff',
    fontSize: '20px',
    marginTop: '2px',
    marginLeft: '4px',
    fontWeight: 600
  },
  events: {
    padding: '70px 130px'
  },
  eventsWrapper: {
    fontWeight: 400,
    border: '1px solid #d0d0d0',
    background: '#fff',
    borderRadius: '6px'
  },
  tabs: {
    display: 'flex'
  },
  eventCategories: {
    padding: '20px 18px'
  },
  nav: {
    fontSize: '19px',
    paddingRight: '84px',
    display: 'flex',
    alignItems: 'center'
  },
  navIcon: {
    marginRight: '8px',
    width: '20px'
  },
  navText: {
    fontWeight: 400,
    color: '#9e9e9e',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none'
  },
  footer: {
    boxSizing: 'border-box',
    marginBottom: 0
  }
}))
export default function App () {
  const classes = useStyles()
  // const [eventCategory] = 'WORKSHOPS'
  const [value] = ''

  const eventBar = [
    {
      name: 'All Events',
      route: `/events?event_category=ALL_EVENTS`,
      Icon: 'https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg'
    },
    {
      name: 'Webinars',
      route: `/events?event_category=WEBINARS`,
      Icon: 'https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg'
    },
    {
      name: 'Coding Events',
      route: `/events?event_category=CODING_EVENTS`,
      Icon: 'https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg'
    },
    {
      name: 'Bootcamp Events',
      route: `/events?event_category=BOOTCAMP_EVENTS`,
      Icon: 'https://files.codingninjas.in/bootcamp_events_unselected-5397.png'
    },
    {
      name: 'Workshop',
      route: `/events?event_category=WORKSHOP`,
      Icon: 'https://files.codingninjas.in/workshop_unselected-5395.png'
    },
  ]

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
      <div className={classes.header}>
        <div className={classes.textHeader}>Events & News</div>
        <div className={classes.subHeader}>Learn, Compete & Grow</div>
      </div>

      <div className={classes.events}>
        <div className={classes.eventsWrapper}>
          <div className={clsx(classes.tabs, classes.eventCategories)}>
            <Tabs
              value={value}
              // onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {eventBar.map(s => {
                return(
                  <NavLink key={s.name} to={s.route} className={classes.nav}
                    // style={{ color: "#fff", margin: '0px 10px', borderRadius: '10px' }} 
                    // activeStyle={{ backgroundColor: '#1D1E7E' }}
                  >
                    <ListItem to={s.route} button key={s.name} >
                      <ListItemIcon>
                        <img src={s.Icon} className={classes.navIcon}
                          // style={{ opacity: 1.5, }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={s.name} className={classes.navText} />
                      {/* :active */}
                    </ListItem>
                  </NavLink>
                )
              })}
            </Tabs>
          </div>
          <EventsWrapper/>
        </div>
      </div>

      <div className={classes.footer}>
        <Footer/>      
      </div>
    </div>
  )
}
