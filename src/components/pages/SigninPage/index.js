import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { SigninForm } from 'containers'

const styleSheet = {
  background: {
    background: '#e0e0e0',
    bottom: 0,
    direction: 'ltr',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    '& > svg': {
      minHeight: '100%',
      minWidth: '100%',
    },
  },
  root: {
    height: '100vh',
    flexGrow: 1,
    margin: 0,
    width: '100%',
  },
  form: {
    maxWidth: 450,
    position: 'relative',
    width: '100%',
    zIndex: 2,
  },
}

const SigninPage = ({ classes }) => (
  <Grid container alignItems="center" justify="center" className={classes.root}>
    <div className={classes.background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900"><path d="M186,-543L720,-438L1193,-493Z" fill="#c4c4c4" stroke="#c4c4c4" strokeWidth="1.51" /><path d="M840,1452L303,1530L1630,1586Z" fill="#474747" stroke="#474747" strokeWidth="1.51" /><path d="M1193,-493L1419,-516L1887,-663Z" fill="#999999" stroke="#999999" strokeWidth="1.51" /><path d="M186,-543L1193,-493L1887,-663Z" fill="#b1b1b1" stroke="#b1b1b1" strokeWidth="1.51" /><path d="M-203,-586L186,-543L1887,-663Z" fill="#cbcbcb" stroke="#cbcbcb" strokeWidth="1.51" /><path d="M1826,938L1928,1388L1996,265Z" fill="#3d3d3d" stroke="#3d3d3d" strokeWidth="1.51" /><path d="M1826,608L1826,938L1996,265Z" fill="#4c4c4c" stroke="#4c4c4c" strokeWidth="1.51" /><path d="M1487,367L1996,265L2047,-61Z" fill="#666666" stroke="#666666" strokeWidth="1.51" /><path d="M1512,-286L1487,367L2047,-61Z" fill="#787878" stroke="#787878" strokeWidth="1.51" /><path d="M1887,-663L1512,-286L2047,-61Z" fill="#7c7c7c" stroke="#7c7c7c" strokeWidth="1.51" /><path d="M1996,265L1928,1388L2047,-61Z" fill="#4b4b4b" stroke="#4b4b4b" strokeWidth="1.51" /><path d="M1487,367L1826,608L1996,265Z" fill="#5d5d5d" stroke="#5d5d5d" strokeWidth="1.51" /><path d="M1419,-516L1512,-286L1887,-663Z" fill="#909090" stroke="#909090" strokeWidth="1.51" /><path d="M1826,938L1441,1062L1928,1388Z" fill="#383838" stroke="#383838" strokeWidth="1.51" /><path d="M1441,1062L1630,1586L1928,1388Z" fill="#2c2c2c" stroke="#2c2c2c" strokeWidth="1.51" /><path d="M1409,563L1441,1062L1826,938Z" fill="#535353" stroke="#535353" strokeWidth="1.51" /><path d="M1409,563L1826,938L1826,608Z" fill="#525252" stroke="#525252" strokeWidth="1.51" /><path d="M1487,367L1409,563L1826,608Z" fill="#656565" stroke="#656565" strokeWidth="1.51" /><path d="M1126,341L1487,367L1512,-286Z" fill="#888888" stroke="#888888" strokeWidth="1.51" /><path d="M988,-215L1126,341L1512,-286Z" fill="#999999" stroke="#999999" strokeWidth="1.51" /><path d="M1067,1344L840,1452L1630,1586Z" fill="#3f3f3f" stroke="#3f3f3f" strokeWidth="1.51" /><path d="M1441,1062L1067,1344L1630,1586Z" fill="#3e3e3e" stroke="#3e3e3e" strokeWidth="1.51" /><path d="M1409,563L1106,1023L1441,1062Z" fill="#5f5f5f" stroke="#5f5f5f" strokeWidth="1.51" /><path d="M1419,-516L1193,-493L1512,-286Z" fill="#9f9f9f" stroke="#9f9f9f" strokeWidth="1.51" /><path d="M1193,-493L988,-215L1512,-286Z" fill="#a3a3a3" stroke="#a3a3a3" strokeWidth="1.51" /><path d="M1081,526L1106,1023L1409,563Z" fill="#6f6f6f" stroke="#6f6f6f" strokeWidth="1.51" /><path d="M1106,1023L1067,1344L1441,1062Z" fill="#545454" stroke="#545454" strokeWidth="1.51" /><path d="M1126,341L1409,563L1487,367Z" fill="#787878" stroke="#787878" strokeWidth="1.51" /><path d="M1126,341L1081,526L1409,563Z" fill="#7c7c7c" stroke="#7c7c7c" strokeWidth="1.51" /><path d="M1081,526L780,523L1106,1023Z" fill="#7a7a7a" stroke="#7a7a7a" strokeWidth="1.51" /><path d="M780,523L737,1018L1106,1023Z" fill="#767676" stroke="#767676" strokeWidth="1.51" /><path d="M988,-215L795,-53L1126,341Z" fill="#a2a2a2" stroke="#a2a2a2" strokeWidth="1.51" /><path d="M795,-53L766,156L1126,341Z" fill="#a0a0a0" stroke="#a0a0a0" strokeWidth="1.51" /><path d="M720,-438L988,-215L1193,-493Z" fill="#b2b2b2" stroke="#b2b2b2" strokeWidth="1.51" /><path d="M737,1018L1067,1344L1106,1023Z" fill="#616161" stroke="#616161" strokeWidth="1.51" /><path d="M780,523L1081,526L1126,341Z" fill="#878787" stroke="#878787" strokeWidth="1.51" /><path d="M766,156L780,523L1126,341Z" fill="#949494" stroke="#949494" strokeWidth="1.51" /><path d="M737,1018L840,1452L1067,1344Z" fill="#595959" stroke="#595959" strokeWidth="1.51" /><path d="M720,-438L795,-53L988,-215Z" fill="#b4b4b4" stroke="#b4b4b4" strokeWidth="1.51" /><path d="M412,949L303,1530L737,1018Z" fill="#767676" stroke="#767676" strokeWidth="1.51" /><path d="M412,949L737,1018L780,523Z" fill="#848484" stroke="#848484" strokeWidth="1.51" /><path d="M766,156L331,230L780,523Z" fill="#a4a4a4" stroke="#a4a4a4" strokeWidth="1.51" /><path d="M720,-438L375,-109L795,-53Z" fill="#bebebe" stroke="#bebebe" strokeWidth="1.51" /><path d="M737,1018L303,1530L840,1452Z" fill="#606060" stroke="#606060" strokeWidth="1.51" /><path d="M200,545L412,949L780,523Z" fill="#979797" stroke="#979797" strokeWidth="1.51" /><path d="M375,-109L766,156L795,-53Z" fill="#b4b4b4" stroke="#b4b4b4" strokeWidth="1.51" /><path d="M331,230L200,545L780,523Z" fill="#a6a6a6" stroke="#a6a6a6" strokeWidth="1.51" /><path d="M375,-109L331,230L766,156Z" fill="#b8b8b8" stroke="#b8b8b8" strokeWidth="1.51" /><path d="M186,-543L375,-109L720,-438Z" fill="#d0d0d0" stroke="#d0d0d0" strokeWidth="1.51" /><path d="M186,-543L-168,-219L375,-109Z" fill="#dadada" stroke="#dadada" strokeWidth="1.51" /><path d="M200,545L-40,661L412,949Z" fill="#a0a0a0" stroke="#a0a0a0" strokeWidth="1.51" /><path d="M-40,661L8,1131L412,949Z" fill="#979797" stroke="#979797" strokeWidth="1.51" /><path d="M8,1131L303,1530L412,949Z" fill="#7d7d7d" stroke="#7d7d7d" strokeWidth="1.51" /><path d="M-139,145L331,230L375,-109Z" fill="#c7c7c7" stroke="#c7c7c7" strokeWidth="1.51" /><path d="M-168,-219L-139,145L375,-109Z" fill="#d5d5d5" stroke="#d5d5d5" strokeWidth="1.51" /><path d="M8,1131L-183,1516L303,1530Z" fill="#757575" stroke="#757575" strokeWidth="1.51" /><path d="M-139,145L200,545L331,230Z" fill="#bcbcbc" stroke="#bcbcbc" strokeWidth="1.51" /><path d="M-203,-586L-168,-219L186,-543Z" fill="#e7e7e7" stroke="#e7e7e7" strokeWidth="1.51" /><path d="M-139,145L-40,661L200,545Z" fill="#b7b7b7" stroke="#b7b7b7" strokeWidth="1.51" /><path d="M-139,145L-494,513L-40,661Z" fill="#bfbfbf" stroke="#bfbfbf" strokeWidth="1.51" /><path d="M-388,1346L-183,1516L8,1131Z" fill="#818181" stroke="#818181" strokeWidth="1.51" /><path d="M-40,661L-468,1143L8,1131Z" fill="#9d9d9d" stroke="#9d9d9d" strokeWidth="1.51" /><path d="M-468,1143L-388,1346L8,1131Z" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.51" /><path d="M-168,-219L-391,-129L-139,145Z" fill="#dddddd" stroke="#dddddd" strokeWidth="1.51" /><path d="M-494,513L-468,1143L-40,661Z" fill="#aeaeae" stroke="#aeaeae" strokeWidth="1.51" /><path d="M-203,-586L-453,-561L-168,-219Z" fill="#eeeeee" stroke="#eeeeee" strokeWidth="1.51" /><path d="M-453,-561L-391,-129L-168,-219Z" fill="#eaeaea" stroke="#eaeaea" strokeWidth="1.51" /><path d="M-391,-129L-608,313L-139,145Z" fill="#d9d9d9" stroke="#d9d9d9" strokeWidth="1.51" /><path d="M-608,313L-494,513L-139,145Z" fill="#cccccc" stroke="#cccccc" strokeWidth="1.51" /><path d="M-453,-561L-608,313L-391,-129Z" fill="#e7e7e7" stroke="#e7e7e7" strokeWidth="1.51" /><path d="M-494,513L-608,313L-468,1143Z" fill="#b9b9b9" stroke="#b9b9b9" strokeWidth="1.51" /></svg>
    </div>
    <div className={classes.form}>
      <SigninForm />
    </div>
  </Grid>
)

SigninPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet, { name: 'SigninPage' })(SigninPage)
