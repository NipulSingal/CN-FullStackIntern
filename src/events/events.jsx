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
  tagsContainer: {
    height: 'auto',
  },
  tagsHeading: {
    fontWeight: 700,
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#616161',
    marginBottom: '14px'
  },
  tagsWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    color: '#424242',
    fontSize: '14px',
    padding: '6px 12px',
    fontWeight: 400,
    borderRadius: '2px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#eee',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tagText: {
    margin: '0 !important'
  }
}))
export default function Events (props) {
  const classes = useStyles()
  const [events, setEvents] = React.useState([])
  const {eventCategory, subEventCategory} = props
  const [tags, setTags] = React.useState([])
  // const {events, tags} = props
  // console.log(events)
  // console.log(tags)

  const fetchEvents = () => {
    return fetch(`https://api.codingninjas.com/api/v3/events?event_category=${eventCategory}&event_sub_category=${subEventCategory}&tag_list=Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0`)
      .then((response) => response.json())
      .then((e) => {
        setEvents(e.data && e.data.events ? e.data.events : [])
      });
  }
  const fetchTags = () => {
    return fetch(`https://api.codingninjas.com/api/v3/event_tags`)
      .then((response) => response.json())
      .then((e) => {
        setTags(e.data && e.data.tags ? e.data.tags : [])
      });
  }
  React.useEffect(() => {
    fetchEvents()
    fetchTags()
  }, [])

  return (
    <div className={classes.app}>
      <div className={classes.eventBody}>
        <div className={classes.eventCardsContainer}>
          <Grid container className={classes.eventsContainer}>
            <Grid item md={10}>
              <Grid container>
                {events.map(e => {
                  return(
                    <Grid key={e} item xs={12} md={6}>
                      <Upcoming key={e} event={e} />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid item md={2}>
              <div className={classes.tagsContainer}>
                <div className={classes.tagsHeading}>Tags</div>
                <div className={classes.tagsWrapper}>
                  {tags.map(tag => (
                    <div key={tag} className={classes.tag}>
                      <p className={classes.tagText}> {tag} </p>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
            
          </Grid>
        </div>
      </div>
    </div>
  )
}
