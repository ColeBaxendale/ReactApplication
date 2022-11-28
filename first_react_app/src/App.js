import React from 'react';
import {Grid, CssBaseline,Paper,Avatar, Typography, TextField, FormControlLabel, Checkbox,Button,Link,Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import CopyRight from './Copyright'




function App() {
  const classes = useStyles();
  return (
  <div>
      <Grid container className={classes.root}>
        <CssBaseline/>
        <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>
              Please Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autocomplete='email'
              autoFocus/>

              <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='password'
              label='Password'
              name='password'
              autocomplete='password'
              autoFocus/>
              <FormControlLabel
                control={<Checkbox value='remember' color='primary'/>}
                label='Remember me'>
              </FormControlLabel>
              <Button 
              type='submit' 
              fullWidth 
              varient='contained'
              color='primary' 
              className={classes.submit}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href = '#' variant='body2'>
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href = '#' variant='body2'>
                    Don't have an account? Sign up!
                  </Link>
                </Grid>
              </Grid>
            </form>
            <Box mt={5}>
            <CopyRight/>
            </Box>
            
          </div>
        </Grid>
      </Grid>
  </div>
  )
}

export default App;


/*
Grid, material ui component that adapts to screen size ensures consisitency. Configure column and walls and stuff very well.
CssBaseline funcitonal componant that does some configurations like removing margins and stuff. 

*/