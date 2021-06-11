import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
  }
}))
export default function App () {
  const classes = useStyles()

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
      {/* <h1>Events Page</h1> */}
      <div className={classes.header}>
        <div className={classes.textHeader}>Events & News</div>
        <div className={classes.subHeader}>Learn, Compete & Grow</div>
      </div>
    </div>
  )
}
