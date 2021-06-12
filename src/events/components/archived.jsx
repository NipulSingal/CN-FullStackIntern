import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  event: {
    width: '100%'
  },
  card: {
    background: '#fff',
    borderRadius: '5px',
    width: '95%',
    marginRight: '25px',
    marginBottom: '25px',
    boxShadow: '0 1px 19px 0 rgb(0 0 0 / 7%)',
    cursor: 'pointer',
    fontWeight: '400',
    transition: 'all .3s',
    "@media (max-width: 720px)": {
      width: '100%',
      marginBottom: '20px',
      marginRight: 0
    }
  },
  header: {
    height: '159px',
    position: 'relative'
  },
  glass: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  coverImageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  glassMain: {
    backgroundImage: 'linear-gradient(-180deg,rgba(3,3,3,0),#010101)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: '.2'
  },
  headerImg: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  eventStatus: {
    position: "absolute", 
    fontSize: "12px", 
    color: "#121212", 
    background: "#fff", 
    padding: "7px 13px", 
    borderRadius: "2px", 
    bottom: "7px", 
    right: "7px", 
    boxShadow: "0 1px 11px 0 rgb(0 0 0 / 11%)"
  },
  eventStatusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  circle: {
    borderRadius: "50%", 
    position: "relative", 
    width: "10px!important", 
    height: "10px", 
    top: "5px", 
    background: "red linear-gradient(#ff73ac,#ff274b)", 
    transition: "height .25s ease,width .25s ease", 
    transform: "translate(-50%,-50%)", 
    marginRight: "2px"
  },
  main: {
    padding: '20px 16px'
  },
  eventName: {
    margin: "0 0 9px", 
    fontSize: "18px", 
    letterSpacing: ".2px", 
    fontWeight: "700", 
    minHeight: "50px"
  },
  details: {
    display: "flex", 
    borderBottom: "1px solid #f3f3f3", 
    paddingBottom: "10px"
  },
  eventInfoItem: {
    display: "flex", 
    flexDirection: "column", 
    marginRight: "16px"
  },
  itemLabel: {
    fontSize: "13px", 
    color: "rgba(28,28,28,.6)", 
    margin: "0"
  },
  itemValue: {
    fontSize: "14px", 
    color: "#212121", 
    fontWeight: 700
  },
  shortDescription: {
    marginTop: "12px", 
    height: "57px", 
    fontSize: "14px", 
    lineHeight: "19px", 
    color: "#616161", 
    textOverflow: "ellipsis", 
    overflow: "hidden", 
    display: "-webkit-box", 
    WebkitLineClamp: "3", 
    WebkitBoxOrient: "vertical"
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '64px',
    marginTop: '20px'
  },
  tag: {
    height: "fit-content", 
    marginRight: "8px", 
    marginBottom: "8px", 
    color: "#616161", 
    background: "#eee", 
    borderRadius: "3px", 
    padding: "4px 14px", 
    fontSize: "12px"
  },
  footer: {
    padding: "9px 0 9px 19px", 
    display: "flex", 
    justifyContent: "space-between", 
    borderTop: "1px solid hsla(0,0%,59.2%,.1)", 
    minHeight: "30px"
  },
  registeredUsers: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  profileImgContainer: {
    display: "flex",
    marginBottom: "4px"
  },
  matTooltipTrigger: {
    marginLeft: 0
  },
  footerImage: {
    border: "1px solid #fff", 
    width: "22px", 
    height: "22px", 
    borderRadius: "50%"
  },
  count: {
    margin: 0,
    color: '#757575',
    fontSize: '13px'
  },
  status: {
    display: 'flex'
  }
}))

export default function archived() {
  const classes = useStyles()

  return (
    <div className={classes.event}>
      <div className={classes.card}>
        <header className={classes.header}>
          <div className={classes.glass}>
            <div className={classes.coverImageContainer} >
              <div className={classes.glassMain}></div>
              <img className={classes.headerImg} src="https://files.codingninjas.in/scolarship-mobile-version-event-10896.jpg" alt="Coding Ninjas Admission &amp; Scholarship Test June'21" />
            </div>
          </div>
        </header>
        <main className={classes.main}>
          <p className={classes.eventName}>Coding Ninjas Admission &amp; Scholarship Test June 21</p>
          <div className={classes.details}>
            <div className={classes.eventInfoItem}>
              <p className={classes.itemLabel}><b>Starts on</b></p>
              <p className={classes.itemValue}> 09:00 PM, 19 Jun 2021 </p>
            </div>
            <div className={clsx(classes.eventInfoItem, classes.price)}>
              <p className={classes.itemLabel}><b>Entry Fee</b></p>
              <p className={classes.itemValue}> INR 99 </p>
            </div>
            <div className={classes.eventInfoItem}>
              <p className={classes.itemLabel}><b>Venue</b></p>
              <p className={classes.itemValue}>Online, CodeZen</p>
            </div>
          </div>
          <div className={classes.shortDescription}> To encourage, reward and financially assist worthy students, as a part of this programme, we will conduct a National Level Online Admission and Scholarship Test for all Coding Ninjas courses. </div>
          <div className={classes.tagsContainer}>
            <div className={classes.tag}> Scholarship Test </div>
          </div>
        </main>
        
        <footer className={classes.footer}>
          <div className={classes.registeredUsers}>
            <div className={classes.profileImgContainer}>
              <div className={clsx(classes.matTooltipTrigger, classes.userImage)}>
                <img className={classes.footerImage} src="https://lh3.googleusercontent.com/a-/AOh14GgojE4VtZXFrgPtQbjVjkCviL05Q7p4juQ-FZ28BA=s96-c" />
              </div>
              <div className={clsx(classes.matTooltipTrigger, classes.userImage)}>
                <img className={classes.footerImage} src="https://lh6.googleusercontent.com/-ngHM-vHO4eU/AAAAAAAAAAI/AAAAAAAAABA/1FEIR1NDQQc/s96-c/photo.jpg" />
              </div>
            </div>
            <p className={classes.count}> and <b>890</b> others registered </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
