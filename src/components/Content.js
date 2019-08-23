import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../context/context.js'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Send from '@material-ui/icons/Send'
import Info from '@material-ui/icons/Info'

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
  paddingBottom: {
    paddingBottom: theme.spacing(2)
  },
  iconSmall: {
    fontSize: 20
  },
  typography: {
    padding: theme.spacing(2)
  }
}))

const Content = props => {
  const [beers, setBeers] = useState([])
  const message = 'List of Beers'

  const { favoriteDispatch } = useContext(FavoriteContext)

  const classes = useStyles()

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await axios.get(`https://api.punkapi.com/v2/beers`)
        setBeers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' gutterBottom className={classes.typography}>
          {message}
        </Typography>
      </Paper>
      {beers.map(beer =>
        <Paper key={beer.id} className={classes.paper}>
          <Grid container direction='row' justify='flex-start' classes={{ root: classes.paddingBottom }}>
            <Grid item xs={12} sm={6} lg={4}>
              <Typography variant='h5' gutterBottom className={classes.typography}>
                {beer.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} lg={4}>
              <Button
                variant='contained'
                color='default'
                className={classes.button}
                component={Link}
                to={{
                  pathname: `/detail/${beer.id}`,
                  state: {
                    beer: beer
                  }
                }}
              >
                Detailed info
                <Info className={classes.rightIcon} />
              </Button>
            </Grid>
            <Grid item xs={12} sm={3} lg={4}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={(e) => favoriteDispatch({ type: 'ADD_BEER', beer: { id: beer.id, name: beer.name } })}
              >
                Favorite Beer
                <Send className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  )
}

export default Content
