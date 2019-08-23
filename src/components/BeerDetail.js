import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  img: {
    maxWidth: '100%'
  },
  typography: {
    padding: theme.spacing(2)
  }
}))

const Detail = props => {
  const beer = props.location.state.beer
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' gutterBottom className={classes.typography}>
          Beer Detail
        </Typography>
      </Paper>
      <Paper key={beer.id} className={classes.paper}>
        <Grid container direction='row' justify='flex-start'>
          <Grid item xs={12} sm={6} lg={4}>
            <Typography variant='h5' gutterBottom className={classes.typography}>
              Name: {beer.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Typography variant='h5' gutterBottom className={classes.typography}>
              Description: {beer.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <img className={classes.img} src={beer.image_url} alt='beer' />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Detail
