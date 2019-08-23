import React, { useContext } from 'react'
import { FavoriteContext } from '../context/context.js'
import Beer from './Beer.js'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  root: {
    flexGrow: 1
  },
  typography: {
    padding: theme.spacing(2)
  }
}))

const FavoriteBeers = props => {
  const { favoriteBeers, favoriteDispatch } = useContext(FavoriteContext)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' gutterBottom className={classes.typography}>
          Favorite Beers
        </Typography>
      </Paper>
      {favoriteBeers.map(beer =>
        <Beer
          key={beer.id}
          {...beer}
          dispatch={favoriteDispatch}
        />
      )}
    </div>
  )
}

export default FavoriteBeers
