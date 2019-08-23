import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
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
  paddingBottom: {
    paddingBottom: theme.spacing(2)
  },
  typography: {
    padding: theme.spacing(2)
  }
}))

const Beer = props => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container direction='row' justify='flex-start' classes={{ root: classes.paddingBottom }}>
        <Grid item xs={12} sm={6} lg={6}>
          <Typography variant='h5' gutterBottom className={classes.typography}>
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={(e) => props.dispatch({ type: 'REMOVE_BEER', beer: { id: props.id } })}
          >
            Remove Beer
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Beer
