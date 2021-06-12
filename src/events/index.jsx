import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import ListItemText from '@material-ui/core/ListItemText'

import Footer from './footer'
import EventBody from './events'
// import { callApi } from '../utils/api'

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
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    overflow: 'scroll',
  },
  eventCategories: {
    padding: '20px 18px'
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
  navIcon: {
    marginRight: '8px',
    width: '20px'
  },
  navSelectedIcon: {
    marginRight: '8px',
    width: '20px',
    color: '#fa7328'
  },
  navText: {
    fontSize: '19px',
    paddingRight: '84px',
    display: 'flex',
    alignItems: 'center',
    color: '#9e9e9e',
    textDecoration: 'none'
  },
  navSelectedText: {
    fontSize: '19px',
    paddingRight: '84px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fa7328'
  },
  eventSubCategories: {
    padding: '14px 24px',
    background: '#fafafa',
    marginBottom: '34px',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0'
  },
  subNav: {
    fontSize: "16px", 
    fontWeight: 700, 
    paddingRight: "20px", 
    marginRight: 0, 
    display: "flex", 
    alignItems: "center", 
    textAlign: "center",
    cursor: 'pointer'
  },
  subNavText: {
    fontSize: '16px',
    fontWeight: 700,
    paddingRight: '20px',
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#9e9e9e'
  },
  subNavSelectedText: {
    fontSize: '16px',
    fontWeight: 700,
    paddingRight: '20px',
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fa7328'
  },
  footer: {
    boxSizing: 'border-box',
    marginBottom: 0
  }
}))
export default function App () {
  const classes = useStyles()
  const [eventCategory, setEventCategory] = React.useState('ALL_EVENTS')
  const [subEventCategory, setSubEventCategory] = React.useState('Upcoming')
  // const [tags, setTags] = React.useState([])
  // const [events, setEvents] = React.useState([])

  const handleChange = (s) => {
    setEventCategory(s)
    setSubEventCategory('Upcoming')
    // fetchEvents()
    // fetchTags()
  }
  const handleSubChange = (s) => {
    setSubEventCategory(s)
    // fetchEvents()
    // fetchTags()
  }
  // console.log(events)
  // console.log(tags)

  // const fetchTags = () => {
  //   return fetch(`https://api.codingninjas.com/api/v3/event_tags`)
  //     .then((response) => response.json())
  //     .then((e) => {
  //       setTags(e.data && e.data.tags ? e.data.tags : [])
  //     });
  // }
  // const fetchEvents = () => {
  //   return fetch(`https://api.codingninjas.com/api/v3/events?event_category=${eventCategory}&event_sub_category=${subEventCategory}&tag_list=Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0`)
  //     .then((response) => response.json())
  //     .then((e) => {
  //       setEvents(e.data && e.data.events ? e.data.events : [])
  //     });
  // }

  // React.useEffect(() => {
  //   fetchTags()
  //   fetchEvents()
  // }, [])
  const eventBar = [
    {
      name: 'All Events',
      value: 'ALL_EVENTS',
      Icon: 'https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg',
      selectIcon: 'https://www.codingninjas.com/assets-landing/images/all-events-selected.svg'
    },
    {
      name: 'Webinars',
      value: 'WEBINAR',
      Icon: 'https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg',
      selectIcon: 'https://www.codingninjas.com/assets-landing/images/webinar-selected.svg'
    },
    {
      name: 'Coding Events',
      value: 'CODING_EVENT',
      Icon: 'https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg',
      selectIcon: 'https://www.codingninjas.com/assets-landing/images/coding-events-selected.svg'
    },
    {
      name: 'Bootcamp Events',
      value: 'BOOTCAMP_EVENT',
      Icon: 'https://files.codingninjas.in/bootcamp_events_unselected-5397.png',
      selectIcon: 'https://files.codingninjas.in/bootcamp_events_selected-5398.png'
    },
    {
      name: 'Workshop',
      value: 'WORKSHOP',
      Icon: 'https://files.codingninjas.in/workshop_unselected-5395.png',
      selectIcon: 'https://files.codingninjas.in/workshop_selected-5396.png'
    },
  ]

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

  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <div className={classes.textHeader}>Events & News</div>
        <div className={classes.subHeader}>Learn, Compete & Grow</div>
      </div>

      <div className={classes.events}>
        <div className={classes.eventsWrapper}>
          <div className={clsx(classes.tabs, classes.eventCategories)}>
            {eventBar.map(s => {
              return(
                <div key={s.name} onClick={() => handleChange(s.value)} className={classes.nav}>
                  {s.value == eventCategory ? (
                    <>
                      <img className={classes.navIcon} src={s.selectIcon}/>
                      <ListItemText primary={s.name} className={classes.navSelectedText} />
                    </>
                  ) : (
                    <>
                      <img className={classes.navIcon} src={s.Icon}/>
                      <ListItemText primary={s.name} className={classes.navText} />
                    </>
                  )}
                </div>
              )
            })}
          </div>
          <div className={clsx(classes.tabs, classes.eventSubCategories)}>
            {subEventBar.map(s => {
              return(
                <div key={s.name} onClick={() => handleSubChange(s.name)} className={classes.subNav}>
                  {s.name == subEventCategory ? (
                    <>
                      <ListItemText primary={s.name} className={classes.subNavSelectedText} />
                    </>
                  ) : (
                    <>
                      <ListItemText primary={s.name} className={classes.subNavText} />
                    </>
                  )}
                </div>
              )
            })}
          </div>
          <EventBody eventCategory={eventCategory} subEventCategory={subEventCategory} />
        </div>
      </div>

      <div className={classes.footer}>
        <Footer/>      
      </div>
    </div>
  )
}
